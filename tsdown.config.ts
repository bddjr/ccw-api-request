import { defineConfig } from "tsdown";
export default defineConfig({
  entry: ["src/index.ts"],
  format: {
    cjs: {},
    esm: {},
    iife: {
      deps: {
        onlyBundle: ["blueimp-md5"],
        alwaysBundle() {
          return true;
        },
        dts: {
          alwaysBundle() {
            return true;
          },
        },
        skipNodeModulesBundle: false,
      },
      platform: "browser",
    },
  },
  dts: true,
  minify: true,
  globalName: "ccwRequest",
});
