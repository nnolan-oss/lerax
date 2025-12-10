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
in
  pkgs.mkShell {
    name = manifest.name;

    nativeBuildInputs = with pkgs; [
      # Node.js and package managers
      nodejs
      pnpm
      corepack
      nodePackages.typescript
      nodePackages.typescript-language-server

      # Nix tooling
      nixd
      statix
      deadnix
      alejandra

      # Tailwind CSS
      tailwindcss
    ];

    buildInputs = with pkgs; [
      openssl
      cacert
    ];

    shellHook = ''
      echo "🚀 Lerax development environment"
      echo "Run 'npm run dev' to start the development server"
    '';
  }