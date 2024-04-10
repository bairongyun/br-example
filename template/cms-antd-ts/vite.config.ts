import { resolve } from "path";
import { defineConfig } from "vite";
import type { Alias, PluginOption, UserConfigExport } from "vite";
import react from "@vitejs/plugin-react-swc";
import vitePluginImp from "vite-plugin-imp";

export default defineConfig(({ mode }: UserConfigExport) => {
  // plugins
  const plugins: PluginOption[] = [react()];

  plugins.push(
    vitePluginImp({
      libList: [
        {
          libName: "antd",
          style(name) {
            return `antd/es/${name}/style/index.js`;
          },
        },
      ],
    }),
  );
  // alias
  const alias: Alias[] = [
    {
      find: /^~/,
      replacement: "",
    },
    {
      find: "@",
      replacement: resolve(__dirname, "./src"),
    },
    {
      find: "@config",
      replacement: resolve(__dirname, "./config"),
    },
  ];

  // server
  const server = {
    hmr: {
      overlay: false,
    },
  };

  if (mode === "development") {
    alias.push({
      find: /antd\/es\/(.*)\/style\/index\.less/,
      replacement: "antd/dist/antd.less",
    });
  }

  // config
  const config: UserConfigExport = {
    server,
    build: {
      cssCodeSplit: false,
    },
    plugins: plugins,
    resolve: {
      alias,
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
  };

  return config;
});
