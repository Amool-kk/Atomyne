import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    button: "src/button/index.ts",
    input: "src/input/index.ts",
    label: "src/label/index.ts",
    badge: "src/badge/index.ts",
  },
  format: ["esm"],
  dts: false,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom", "tailwindcss", "@atomyne/ui-core"],
  treeshake: true,
});
