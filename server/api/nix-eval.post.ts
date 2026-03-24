import { execFile } from "child_process";
import { promisify } from "util";

const execFileAsync = promisify(execFile);

const BLOCKED_PATTERNS = [
  /`/,
  /\/etc\//,
  /\/proc\//,
  /\/sys\//,
  /import\s+<nixpkgs>/,
  /import\s+<[^>]+>/,
  /builtins\.(fetchurl|fetchTarball|fetchGit|fetchTree|fetchClosure)/,
  /builtins\.(readFile|readDir|pathExists|toFile)\b/,
  /builtins\.(exec|currentSystem|storePath|getEnv)\b/,
  /builtins\.import\b/,
  /:!\/nix\/store/,
];

const TIMEOUT_MS = 5000;
const MAX_OUTPUT = 10000;

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const expr = body?.expr?.trim();

  if (!expr || typeof expr !== "string") {
    throw createError({ statusCode: 400, statusMessage: "Expression kerak" });
  }

  if (expr.length > 2000) {
    throw createError({
      statusCode: 400,
      statusMessage: "Expression juda uzun (max 2000 belgi)",
    });
  }

  for (const pattern of BLOCKED_PATTERNS) {
    if (pattern.test(expr)) {
      throw createError({
        statusCode: 403,
        statusMessage: "Bu ifoda ruxsat etilmagan",
      });
    }
  }

  try {
    const { stdout } = await execFileAsync(
      "nix",
      ["eval", "--expr", expr, "--json"],
      {
        timeout: TIMEOUT_MS,
        maxBuffer: MAX_OUTPUT,
        env: {
          PATH: process.env.PATH,
          HOME: process.env.HOME,
          NIX_PATH: process.env.NIX_PATH || "",
        },
      },
    );

    const output = stdout.trim();

    try {
      return { ok: true, result: JSON.parse(output) };
    } catch {
      return { ok: true, result: output };
    }
  } catch (err: unknown) {
    const e = err as { killed?: boolean; stderr?: string; message?: string };
    if (e.killed) {
      return {
        ok: false,
        error: "Vaqt tugadi (5s limit)",
      };
    }

    const msg =
      e.stderr?.trim() || e.message || "Noma'lum xatolik";
    return {
      ok: false,
      error: msg.slice(0, MAX_OUTPUT),
    };
  }
});
