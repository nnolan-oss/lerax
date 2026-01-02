{
  pkgs ? let
    lock = (builtins.fromJSON (builtins.readFile ./flake.lock)).nodes.nixpkgs.locked;
    nixpkgs = fetchTarball {
      url = "https://github.com/nixos/nixpkgs/archive/${lock.rev}.tar.gz";
      sha256 = lock.narHash;
    };
  in
    import nixpkgs {overlays = [];},
  ...
}: let
  manifest = pkgs.lib.importJSON ./package.json;

  exec = pkgs.writeShellScript "${manifest.name}-start.sh" ''
    # Change working directory to script
    cd "$(dirname "$0")/../www"

    ${pkgs.lib.getExe pkgs.nodejs} .output/server/index.mjs
  '';
in
  pkgs.buildNpmPackage {
    pname = manifest.name;
    version = manifest.version or "1.0.0";

    src = ./.;
    npmDepsHash = "sha256-VKkK1M8sl2/fBf0+/UqCKUDHc/rSp3QbFLHNjeYTDwE=";

    # Rebuild native dependencies in build phase where we have write access
    preBuild = ''
      # Rebuild native dependencies (like sharp, better-sqlite3) that need to compile
      # This is necessary because install scripts are skipped during dependency fetch
      # Set up environment for native builds
      export PKG_CONFIG_PATH="${pkgs.sqlite.dev}/lib/pkgconfig"
      
      # Build better-sqlite3 specifically - it needs to be built from source
      if [ -d "node_modules/better-sqlite3" ]; then
        cd node_modules/better-sqlite3
        # Run the install script that builds the native module
        npm run install --if-present || \
        node-gyp rebuild || \
        npm run build-release || true
        cd ../..
      fi
      
      # Rebuild all other native modules (sharp, etc.)
      npm rebuild --verbose
    '';

    buildPhase = ''
      runHook preBuild
      
      # Build Nuxt application in non-interactive mode
      # Disable telemetry and ensure non-interactive mode
      export NUXT_TELEMETRY_DISABLED=1
      export CI=true
      npm run build
      
      runHook postBuild
    '';

    installPhase = ''
      # Create output directory
      mkdir -p $out/www

      # Copy Nuxt output directory
      if [ -d "./.output" ]; then
        cp -R ./.output $out/www/.output
      fi

      # Copy public assets
      if [ -d "./public" ]; then
        cp -R ./public $out/www/public
      fi

      # Create executable directory
      mkdir -p $out/bin

      # Copy shell script to executables
      cp ${exec} $out/bin/${manifest.name}-start
      chmod +x $out/bin/${manifest.name}-start
    '';

    nativeBuildInputs = with pkgs; [
      # Node.js and package managers
      nodejs
      pnpm
      corepack
      
      # Build tools for native dependencies
      python3
      nodePackages.node-gyp
      # C/C++ build tools for native modules
      gnumake

      # Nix tooling
      nixd
      statix
      alejandra
    ];

    buildInputs = with pkgs; [
      openssl
      cacert
      # Native dependencies for sharp
      vips
      # Native dependencies for better-sqlite3
      sqlite
    ];

    env = {
      SSL_CERT_FILE = "${pkgs.cacert}/etc/ssl/certs/ca-bundle.crt";
      NODE_EXTRA_CA_CERTS = "${pkgs.cacert}/etc/ssl/certs/ca-bundle.crt";
      # Skip install scripts during dependency fetch (fixed-output derivation phase)
      # They will be run in the build phase where we have write access
      npm_config_ignore_scripts = "true";
      # Allow npm to write to temporary directories for native builds
      NPM_CONFIG_UNSAFE_PERM = "true";
      # Use a writable temp directory
      TMPDIR = "/tmp";
      # Help node-gyp find sqlite for better-sqlite3
      # better-sqlite3 will use pkg-config to find sqlite
      PKG_CONFIG_PATH = "${pkgs.sqlite.dev}/lib/pkgconfig";
      # Disable Nuxt telemetry to prevent TTY initialization errors in non-interactive builds
      NUXT_TELEMETRY_DISABLED = "1";
      # Indicate non-interactive/CI environment
      CI = "true";
    };

    meta = with pkgs.lib; {
      homepage = "https://github.com/nnolan-oss/lerax";
      mainProgram = "${manifest.name}-start";
      description = "Lerax - Programming learning platform in Uzbek";
      license = with licenses; [mit];
      platforms = with platforms; linux ++ darwin;
    };
  }