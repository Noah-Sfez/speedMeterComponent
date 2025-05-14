import { defineConfig } from "vite";

export default defineConfig({
    build: {
        lib: {
            entry: "src/GaugeGraph.js",
            name: "GaugeGraph",
            fileName: (format) => `gauge-graph.${format}.js`,
            formats: ["es", "umd"],
        },
    },
});
