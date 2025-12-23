flake: {
  config,
  lib,
  pkgs,
  ...
}: let
  # Shortcut config
  cfg = config.services.lerax;

  # Packaged server
  server = flake.packages.${pkgs.stdenv.hostPlatform.system}.default;
in {
  options = with lib; {
    services.lerax = {
      enable = mkEnableOption ''
        lerax website server.
      '';

      proxy = {
        enable = mkEnableOption ''
          Proxy reversed method of deployment
        '';

        domain = mkOption {
          type = with types; nullOr str;
          default = null;
          example = "lerax.nolan.uz";
          description = "Domain to use while adding configurations to web proxy server";
        };
      };

      host = mkOption {
        type = types.str;
        default = "127.0.0.1";
        description = "Hostname for Nuxt server to bind";
      };

      port = mkOption {
        type = types.int;
        default = 3000;
        description = "Port to use for passing over proxy";
      };

      user = mkOption {
        type = types.str;
        default = "lerax";
        description = "User for running system + accessing keys";
      };

      group = mkOption {
        type = types.str;
        default = "lerax";
        description = "Group for running system + accessing keys";
      };

      dataDir = mkOption {
        type = types.str;
        default = "/var/www/lerax";
        description = ''
          The path where lerax server keeps data and possibly logs.
        '';
      };

      package = mkOption {
        type = types.package;
        default = server;
        description = ''
          Packaged lerax website contents for service.
        '';
      };
    };
  };

  config =
    lib.mkIf cfg.enable
    {
      warnings = [
        (lib.mkIf (cfg.proxy.enable && cfg.proxy.domain == null) "services.lerax.proxy.domain must be set in order to properly generate certificate!")
      ];

      users.users.${cfg.user} = {
        description = "lerax website user";
        isSystemUser = true;
        group = cfg.group;
      };

      users.groups.${cfg.group} = {};

      systemd.services.lerax = {
        description = "lerax website";
        documentation = ["https://github.com/nnolan-oss/lerax"];

        environment = {
          PORT = "${toString cfg.port}";
          HOST = cfg.host;
          NODE_ENV = "production";
        };

        after = ["network-online.target"];
        wants = ["network-online.target"];
        wantedBy = ["multi-user.target"];

        serviceConfig = {
          User = cfg.user;
          Group = cfg.group;
          Restart = "always";
          ExecStart = "${lib.getExe cfg.package}";
          StateDirectory = cfg.user;
          StateDirectoryMode = "0750";
          CapabilityBoundingSet = [
            "AF_NETLINK"
            "AF_INET"
            "AF_INET6"
          ];
          DeviceAllow = ["/dev/stdin r"];
          DevicePolicy = "strict";
          IPAddressAllow = "localhost";
          LockPersonality = true;
          NoNewPrivileges = true;
          PrivateDevices = true;
          PrivateTmp = true;
          PrivateUsers = true;
          ProtectClock = true;
          ProtectControlGroups = true;
          ProtectHome = true;
          ProtectHostname = true;
          ProtectKernelLogs = true;
          ProtectKernelModules = true;
          ProtectKernelTunables = true;
          ProtectSystem = "strict";
          ReadOnlyPaths = ["/"];
          RemoveIPC = true;
          RestrictAddressFamilies = [
            "AF_NETLINK"
            "AF_INET"
            "AF_INET6"
          ];
          RestrictNamespaces = true;
          RestrictRealtime = true;
          RestrictSUIDSGID = true;
          SystemCallArchitectures = "native";
          SystemCallFilter = [
            "@system-service"
            "~@privileged"
            "~@resources"
            "@pkey"
          ];
          UMask = "0027";
        };
      };

      services.nginx.virtualHosts =
  lib.mkIf (cfg.proxy.enable)
  (lib.debug.traceIf (builtins.isNull cfg.proxy.domain) "proxy.domain can't be null, please specify it properly!" {
    "${cfg.proxy.domain}" = {
      addSSL = true;
      enableACME = true;

      # Proxy root URL to Nuxt server
      locations."/" = {
        proxyPass = "http://${cfg.host}:${toString cfg.port}";
        proxyWebsockets = true;

        # Optional: fallback to index.html for SPA routing
        extraConfig = ''
          try_files $uri $uri/ /index.html;
        '';
      };

      # Proxy Nuxt client bundle (_nuxt) for CSS/JS
      locations."/_nuxt/" = {
        proxyPass = "http://${cfg.host}:${toString cfg.port}/_nuxt/";
        proxyWebsockets = true;
      };

      # Proxy public assets
      locations."/public/" = {
        proxyPass = "http://${cfg.host}:${toString cfg.port}/public/";
      };
    };
  });

    };
}