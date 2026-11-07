//import dotenv from "dotenv";
//const envPath = [__dirname, "../.env.local"].join("/");
//dotenv.config();
//dotenv.config({ path: envPath, override: true });

export const requireEnv = (value: string | undefined, identifier: string) => {
  if (!value) {
    throw new Error(`Required env var ${identifier} does not exist`);
  }
  return value;
};

export const NODE_ENV = process.env.NODE_ENV ?? "development";
// Google Analytics measurement ID, inlined at build time. When unset, the
// analytics tag is left out of the page entirely.
export const GOOGLE_ANALYTICS_KEY =
  process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY ?? "";
