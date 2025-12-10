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
    npmDepsHash = "sha256-bFddl29Nbm2U5De49yj3T9IgBhyGfNSydHxoh/JQhzQ=";

    buildPhase = ''
      runHook preBuild
      
      # Build Nuxt application
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

      # Nix tooling
      nixd
      statix
      alejandra
    ];

    buildInputs = with pkgs; [
      openssl
      cacert
    ];

    env = {
      SSL_CERT_FILE = "${pkgs.cacert}/etc/ssl/certs/ca-bundle.crt";
      NODE_EXTRA_CA_CERTS = "${pkgs.cacert}/etc/ssl/certs/ca-bundle.crt";
    };

    meta = with pkgs.lib; {
      homepage = "https://github.com/nnolan-oss/lerax";
      mainProgram = "${manifest.name}-start";
      description = "Lerax - Programming learning platform in Uzbek";
      license = with licenses; [mit];
      platforms = with platforms; linux ++ darwin;
    };
  }