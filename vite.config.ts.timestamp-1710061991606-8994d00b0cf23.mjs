var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// package.json
var require_package = __commonJS({
  "package.json"(exports, module) {
    module.exports = {
      name: "aixinmarket-frontend-2024",
      private: true,
      version: "0.0.0",
      type: "module",
      scripts: {
        dev: "vite",
        build: "vue-tsc && vite build",
        preview: "vite preview"
      },
      dependencies: {
        "@varlet/import-resolver": "^3.0.7",
        "@varlet/touch-emulator": "^3.0.7",
        "@varlet/ui": "^3.0.7",
        axios: "^1.6.7",
        "element-plus": "^2.6.1",
        pinia: "^2.1.7",
        vue: "^3.4.19",
        "vue-router": "^4.3.0"
      },
      devDependencies: {
        "@arco-design/web-vue": "^2.54.6",
        "@types/node": "^20.11.25",
        "@vitejs/plugin-basic-ssl": "^1.1.0",
        "@vitejs/plugin-vue": "^5.0.4",
        less: "^4.2.0",
        "naive-ui": "^2.38.1",
        "postcss-px-to-viewport": "^1.1.1",
        stylus: "^0.63.0",
        typescript: "^5.2.2",
        "unplugin-auto-import": "^0.17.5",
        "unplugin-vue-components": "^0.26.0",
        vite: "^5.1.4",
        "vite-plugin-mkcert": "^1.17.4",
        "vue-tsc": "^1.8.27"
      }
    };
  }
});

// vite.config.ts
import { defineConfig } from "file:///D:/Coding/web/mywebprojections/AiXinMarket-Frontend-2024/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/Coding/web/mywebprojections/AiXinMarket-Frontend-2024/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "path";
import AutoImport from "file:///D:/Coding/web/mywebprojections/AiXinMarket-Frontend-2024/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/Coding/web/mywebprojections/AiXinMarket-Frontend-2024/node_modules/unplugin-vue-components/dist/vite.js";
import { ArcoResolver, NaiveUiResolver } from "file:///D:/Coding/web/mywebprojections/AiXinMarket-Frontend-2024/node_modules/unplugin-vue-components/dist/resolvers.js";
import { VarletImportResolver } from "file:///D:/Coding/web/mywebprojections/AiXinMarket-Frontend-2024/node_modules/@varlet/import-resolver/lib/index.js";
var __vite_injected_original_dirname = "D:\\Coding\\web\\mywebprojections\\AiXinMarket-Frontend-2024";
var vite_config_default = defineConfig({
  define: {
    // 定义全局变量替换方式
    "process.env": process.env,
    "process.env.NODE_ENV": '"development"',
    __APP_VERSION__: JSON.stringify(require_package().version),
    __API_URL__: "window.__backend_api_url"
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ArcoResolver()]
    }),
    Components({
      resolvers: [
        ArcoResolver({
          importStyle: "less",
          sideEffect: true
        }),
        NaiveUiResolver(),
        VarletImportResolver()
      ]
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__vite_injected_original_dirname, "src")
      // 设置'@'指向'src'
    }
  },
  root: "./",
  // index.html所在的位置，即根目录
  base: "./",
  // 设置打包路径，用于嵌入式开发
  mode: process.env.NODE_ENV,
  // 设置模式，'development' 用于开发，'production' 用于构建(见define中的process.env.NODE_ENV)
  publicDir: "public",
  // 设置静态资源目录
  cacheDir: "node_modules/.vite",
  // 设置缓存目录
  envDir: "./",
  // 设置环境变量目录
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          // 'primary-color': '#1890ff',
          // 'link-color': '#1890ff',
          // 'border-radius-base': '2px',
        },
        javascriptEnabled: true,
        math: "parens-division"
      }
    }
  },
  server: {
    host: "localhost",
    // 设置服务器启动地址，默认为'localhost
    port: 5173,
    // 设置服务器启动端号,如果端口已经被使用，Vite 会自动尝试下一个可用的端口，所以这可能不是开发服务器最终监听的实际端口。
    strictPort: false,
    // 设置是否严格检查端口号
    open: false,
    // 设置服务启动时是否自动打开浏览器
    cors: true
    // 允许跨域
    // proxy: {
    //   // 带选项写法：http://localhost:5173/api/bar -> http://jsonplaceholder.typicode.com/bar
    //   '/api': {
    //     target: 'http://jsonplaceholder.typicode.com',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ''),
    //   },
    //   // 代理 websockets 或 socket.io 写法：ws://localhost:5173/socket.io -> ws://localhost:5174/socket.io
    //   '/socket.io': {
    //     target: 'ws://localhost:5174',
    //     ws: true,
    //   },
    // },
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsicGFja2FnZS5qc29uIiwgInZpdGUuY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG4gIFwibmFtZVwiOiBcImFpeGlubWFya2V0LWZyb250ZW5kLTIwMjRcIixcbiAgXCJwcml2YXRlXCI6IHRydWUsXG4gIFwidmVyc2lvblwiOiBcIjAuMC4wXCIsXG4gIFwidHlwZVwiOiBcIm1vZHVsZVwiLFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwiZGV2XCI6IFwidml0ZVwiLFxuICAgIFwiYnVpbGRcIjogXCJ2dWUtdHNjICYmIHZpdGUgYnVpbGRcIixcbiAgICBcInByZXZpZXdcIjogXCJ2aXRlIHByZXZpZXdcIlxuICB9LFxuICBcImRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAdmFybGV0L2ltcG9ydC1yZXNvbHZlclwiOiBcIl4zLjAuN1wiLFxuICAgIFwiQHZhcmxldC90b3VjaC1lbXVsYXRvclwiOiBcIl4zLjAuN1wiLFxuICAgIFwiQHZhcmxldC91aVwiOiBcIl4zLjAuN1wiLFxuICAgIFwiYXhpb3NcIjogXCJeMS42LjdcIixcbiAgICBcImVsZW1lbnQtcGx1c1wiOiBcIl4yLjYuMVwiLFxuICAgIFwicGluaWFcIjogXCJeMi4xLjdcIixcbiAgICBcInZ1ZVwiOiBcIl4zLjQuMTlcIixcbiAgICBcInZ1ZS1yb3V0ZXJcIjogXCJeNC4zLjBcIlxuICB9LFxuICBcImRldkRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAYXJjby1kZXNpZ24vd2ViLXZ1ZVwiOiBcIl4yLjU0LjZcIixcbiAgICBcIkB0eXBlcy9ub2RlXCI6IFwiXjIwLjExLjI1XCIsXG4gICAgXCJAdml0ZWpzL3BsdWdpbi1iYXNpYy1zc2xcIjogXCJeMS4xLjBcIixcbiAgICBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiOiBcIl41LjAuNFwiLFxuICAgIFwibGVzc1wiOiBcIl40LjIuMFwiLFxuICAgIFwibmFpdmUtdWlcIjogXCJeMi4zOC4xXCIsXG4gICAgXCJwb3N0Y3NzLXB4LXRvLXZpZXdwb3J0XCI6IFwiXjEuMS4xXCIsXG4gICAgXCJzdHlsdXNcIjogXCJeMC42My4wXCIsXG4gICAgXCJ0eXBlc2NyaXB0XCI6IFwiXjUuMi4yXCIsXG4gICAgXCJ1bnBsdWdpbi1hdXRvLWltcG9ydFwiOiBcIl4wLjE3LjVcIixcbiAgICBcInVucGx1Z2luLXZ1ZS1jb21wb25lbnRzXCI6IFwiXjAuMjYuMFwiLFxuICAgIFwidml0ZVwiOiBcIl41LjEuNFwiLFxuICAgIFwidml0ZS1wbHVnaW4tbWtjZXJ0XCI6IFwiXjEuMTcuNFwiLFxuICAgIFwidnVlLXRzY1wiOiBcIl4xLjguMjdcIlxuICB9XG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXENvZGluZ1xcXFx3ZWJcXFxcbXl3ZWJwcm9qZWN0aW9uc1xcXFxBaVhpbk1hcmtldC1Gcm9udGVuZC0yMDI0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxDb2RpbmdcXFxcd2ViXFxcXG15d2VicHJvamVjdGlvbnNcXFxcQWlYaW5NYXJrZXQtRnJvbnRlbmQtMjAyNFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovQ29kaW5nL3dlYi9teXdlYnByb2plY3Rpb25zL0FpWGluTWFya2V0LUZyb250ZW5kLTIwMjQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIlxuXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSc7XG5cbmltcG9ydCB7IEFyY29SZXNvbHZlciwgTmFpdmVVaVJlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJztcbmltcG9ydCB7IFZhcmxldEltcG9ydFJlc29sdmVyIH0gZnJvbSAnQHZhcmxldC9pbXBvcnQtcmVzb2x2ZXInXG5cbmltcG9ydCBiYXNpY1NTTCBmcm9tICdAdml0ZWpzL3BsdWdpbi1iYXNpYy1zc2wnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBkZWZpbmU6IHsgLy8gXHU1QjlBXHU0RTQ5XHU1MTY4XHU1QzQwXHU1M0Q4XHU5MUNGXHU2NkZGXHU2MzYyXHU2NUI5XHU1RjBGXG4gICAgJ3Byb2Nlc3MuZW52JzogcHJvY2Vzcy5lbnYsXG4gICAgJ3Byb2Nlc3MuZW52Lk5PREVfRU5WJzogJ1wiZGV2ZWxvcG1lbnRcIicsXG4gICAgX19BUFBfVkVSU0lPTl9fOiBKU09OLnN0cmluZ2lmeShyZXF1aXJlKCcuL3BhY2thZ2UuanNvbicpLnZlcnNpb24pLFxuICAgIF9fQVBJX1VSTF9fOiAnd2luZG93Ll9fYmFja2VuZF9hcGlfdXJsJyxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIEF1dG9JbXBvcnQoe1xuICAgICAgcmVzb2x2ZXJzOiBbQXJjb1Jlc29sdmVyKCldLFxuICAgIH0pLFxuICAgIENvbXBvbmVudHMoe1xuICAgICAgcmVzb2x2ZXJzOiBbXG4gICAgICAgIEFyY29SZXNvbHZlcih7XG4gICAgICAgICAgaW1wb3J0U3R5bGU6ICdsZXNzJyxcbiAgICAgICAgICBzaWRlRWZmZWN0OiB0cnVlLFxuICAgICAgICB9KSxcbiAgICAgICAgTmFpdmVVaVJlc29sdmVyKCksXG4gICAgICAgIFZhcmxldEltcG9ydFJlc29sdmVyKCksXG4gICAgICBdLFxuICAgIH0pLFxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQFwiOiByZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIiksXHQvLyBcdThCQkVcdTdGNkUnQCdcdTYzMDdcdTU0MTEnc3JjJ1xuICAgIH0sXG4gIH0sXG4gIHJvb3Q6ICcuLycsXHQvLyBpbmRleC5odG1sXHU2MjQwXHU1NzI4XHU3Njg0XHU0RjREXHU3RjZFXHVGRjBDXHU1MzczXHU2ODM5XHU3NkVFXHU1RjU1XG4gIGJhc2U6ICcuLycsXHQvLyBcdThCQkVcdTdGNkVcdTYyNTNcdTUzMDVcdThERUZcdTVGODRcdUZGMENcdTc1MjhcdTRFOEVcdTVENENcdTUxNjVcdTVGMEZcdTVGMDBcdTUzRDFcbiAgbW9kZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYsXHQvLyBcdThCQkVcdTdGNkVcdTZBMjFcdTVGMEZcdUZGMEMnZGV2ZWxvcG1lbnQnIFx1NzUyOFx1NEU4RVx1NUYwMFx1NTNEMVx1RkYwQydwcm9kdWN0aW9uJyBcdTc1MjhcdTRFOEVcdTY3ODRcdTVFRkEoXHU4OUMxZGVmaW5lXHU0RTJEXHU3Njg0cHJvY2Vzcy5lbnYuTk9ERV9FTlYpXG5cbiAgcHVibGljRGlyOiAncHVibGljJyxcdC8vIFx1OEJCRVx1N0Y2RVx1OTc1OVx1NjAwMVx1OEQ0NFx1NkU5MFx1NzZFRVx1NUY1NVxuICBjYWNoZURpcjogJ25vZGVfbW9kdWxlcy8udml0ZScsXHQvLyBcdThCQkVcdTdGNkVcdTdGMTNcdTVCNThcdTc2RUVcdTVGNTVcbiAgZW52RGlyOiAnLi8nLFx0Ly8gXHU4QkJFXHU3RjZFXHU3M0FGXHU1ODgzXHU1M0Q4XHU5MUNGXHU3NkVFXHU1RjU1XG5cbiAgY3NzOiB7XG4gICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgbGVzczoge1xuICAgICAgICBtb2RpZnlWYXJzOiB7XG4gICAgICAgICAgLy8gJ3ByaW1hcnktY29sb3InOiAnIzE4OTBmZicsXG4gICAgICAgICAgLy8gJ2xpbmstY29sb3InOiAnIzE4OTBmZicsXG4gICAgICAgICAgLy8gJ2JvcmRlci1yYWRpdXMtYmFzZSc6ICcycHgnLFxuICAgICAgICB9LFxuICAgICAgICBqYXZhc2NyaXB0RW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgbWF0aDogJ3BhcmVucy1kaXZpc2lvbicsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG5cbiAgc2VydmVyOiB7XG4gICAgaG9zdDogJ2xvY2FsaG9zdCcsXHQvLyBcdThCQkVcdTdGNkVcdTY3MERcdTUyQTFcdTU2NjhcdTU0MkZcdTUyQThcdTU3MzBcdTU3NDBcdUZGMENcdTlFRDhcdThCQTRcdTRFM0EnbG9jYWxob3N0XG4gICAgXG4gICAgcG9ydDogNTE3MyxcdC8vIFx1OEJCRVx1N0Y2RVx1NjcwRFx1NTJBMVx1NTY2OFx1NTQyRlx1NTJBOFx1N0FFRlx1NTNGNyxcdTU5ODJcdTY3OUNcdTdBRUZcdTUzRTNcdTVERjJcdTdFQ0ZcdTg4QUJcdTRGN0ZcdTc1MjhcdUZGMENWaXRlIFx1NEYxQVx1ODFFQVx1NTJBOFx1NUMxRFx1OEJENVx1NEUwQlx1NEUwMFx1NEUyQVx1NTNFRlx1NzUyOFx1NzY4NFx1N0FFRlx1NTNFM1x1RkYwQ1x1NjI0MFx1NEVFNVx1OEZEOVx1NTNFRlx1ODBGRFx1NEUwRFx1NjYyRlx1NUYwMFx1NTNEMVx1NjcwRFx1NTJBMVx1NTY2OFx1NjcwMFx1N0VDOFx1NzZEMVx1NTQyQ1x1NzY4NFx1NUI5RVx1OTY0NVx1N0FFRlx1NTNFM1x1MzAwMlxuICAgIHN0cmljdFBvcnQ6IGZhbHNlLFx0Ly8gXHU4QkJFXHU3RjZFXHU2NjJGXHU1NDI2XHU0RTI1XHU2ODNDXHU2OEMwXHU2N0U1XHU3QUVGXHU1M0UzXHU1M0Y3XG4gICAgXG4gICAgb3BlbjogZmFsc2UsXHQvLyBcdThCQkVcdTdGNkVcdTY3MERcdTUyQTFcdTU0MkZcdTUyQThcdTY1RjZcdTY2MkZcdTU0MjZcdTgxRUFcdTUyQThcdTYyNTNcdTVGMDBcdTZENEZcdTg5QzhcdTU2NjhcbiAgICBjb3JzOiB0cnVlLFx0Ly8gXHU1MTQxXHU4QkI4XHU4REU4XHU1N0RGXG4gICAgLy8gcHJveHk6IHtcbiAgICAvLyAgIC8vIFx1NUUyNlx1OTAwOVx1OTg3OVx1NTE5OVx1NkNENVx1RkYxQWh0dHA6Ly9sb2NhbGhvc3Q6NTE3My9hcGkvYmFyIC0+IGh0dHA6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL2JhclxuICAgIC8vICAgJy9hcGknOiB7XG4gICAgLy8gICAgIHRhcmdldDogJ2h0dHA6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tJyxcbiAgICAvLyAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgIC8vICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpLywgJycpLFxuICAgIC8vICAgfSxcbiAgICAvLyAgIC8vIFx1NEVFM1x1NzQwNiB3ZWJzb2NrZXRzIFx1NjIxNiBzb2NrZXQuaW8gXHU1MTk5XHU2Q0Q1XHVGRjFBd3M6Ly9sb2NhbGhvc3Q6NTE3My9zb2NrZXQuaW8gLT4gd3M6Ly9sb2NhbGhvc3Q6NTE3NC9zb2NrZXQuaW9cbiAgICAvLyAgICcvc29ja2V0LmlvJzoge1xuICAgIC8vICAgICB0YXJnZXQ6ICd3czovL2xvY2FsaG9zdDo1MTc0JyxcbiAgICAvLyAgICAgd3M6IHRydWUsXG4gICAgLy8gICB9LFxuICAgIC8vIH0sXG4gIH0sXG59KSJdLAogICJtYXBwaW5ncyI6ICI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQ0UsTUFBUTtBQUFBLE1BQ1IsU0FBVztBQUFBLE1BQ1gsU0FBVztBQUFBLE1BQ1gsTUFBUTtBQUFBLE1BQ1IsU0FBVztBQUFBLFFBQ1QsS0FBTztBQUFBLFFBQ1AsT0FBUztBQUFBLFFBQ1QsU0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBLGNBQWdCO0FBQUEsUUFDZCwyQkFBMkI7QUFBQSxRQUMzQiwwQkFBMEI7QUFBQSxRQUMxQixjQUFjO0FBQUEsUUFDZCxPQUFTO0FBQUEsUUFDVCxnQkFBZ0I7QUFBQSxRQUNoQixPQUFTO0FBQUEsUUFDVCxLQUFPO0FBQUEsUUFDUCxjQUFjO0FBQUEsTUFDaEI7QUFBQSxNQUNBLGlCQUFtQjtBQUFBLFFBQ2pCLHdCQUF3QjtBQUFBLFFBQ3hCLGVBQWU7QUFBQSxRQUNmLDRCQUE0QjtBQUFBLFFBQzVCLHNCQUFzQjtBQUFBLFFBQ3RCLE1BQVE7QUFBQSxRQUNSLFlBQVk7QUFBQSxRQUNaLDBCQUEwQjtBQUFBLFFBQzFCLFFBQVU7QUFBQSxRQUNWLFlBQWM7QUFBQSxRQUNkLHdCQUF3QjtBQUFBLFFBQ3hCLDJCQUEyQjtBQUFBLFFBQzNCLE1BQVE7QUFBQSxRQUNSLHNCQUFzQjtBQUFBLFFBQ3RCLFdBQVc7QUFBQSxNQUNiO0FBQUEsSUFDRjtBQUFBO0FBQUE7OztBQ3BDb1csU0FBUyxvQkFBb0I7QUFDalksT0FBTyxTQUFTO0FBQ2hCLFNBQVMsZUFBZTtBQUV4QixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUV2QixTQUFTLGNBQWMsdUJBQXVCO0FBQzlDLFNBQVMsNEJBQTRCO0FBUnJDLElBQU0sbUNBQW1DO0FBYXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFFBQVE7QUFBQTtBQUFBLElBQ04sZUFBZSxRQUFRO0FBQUEsSUFDdkIsd0JBQXdCO0FBQUEsSUFDeEIsaUJBQWlCLEtBQUssVUFBVSxrQkFBMEIsT0FBTztBQUFBLElBQ2pFLGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixXQUFXO0FBQUEsTUFDVCxXQUFXLENBQUMsYUFBYSxDQUFDO0FBQUEsSUFDNUIsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1QsV0FBVztBQUFBLFFBQ1QsYUFBYTtBQUFBLFVBQ1gsYUFBYTtBQUFBLFVBQ2IsWUFBWTtBQUFBLFFBQ2QsQ0FBQztBQUFBLFFBQ0QsZ0JBQWdCO0FBQUEsUUFDaEIscUJBQXFCO0FBQUEsTUFDdkI7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLFFBQVEsa0NBQVcsS0FBSztBQUFBO0FBQUEsSUFDL0I7QUFBQSxFQUNGO0FBQUEsRUFDQSxNQUFNO0FBQUE7QUFBQSxFQUNOLE1BQU07QUFBQTtBQUFBLEVBQ04sTUFBTSxRQUFRLElBQUk7QUFBQTtBQUFBLEVBRWxCLFdBQVc7QUFBQTtBQUFBLEVBQ1gsVUFBVTtBQUFBO0FBQUEsRUFDVixRQUFRO0FBQUE7QUFBQSxFQUVSLEtBQUs7QUFBQSxJQUNILHFCQUFxQjtBQUFBLE1BQ25CLE1BQU07QUFBQSxRQUNKLFlBQVk7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUlaO0FBQUEsUUFDQSxtQkFBbUI7QUFBQSxRQUNuQixNQUFNO0FBQUEsTUFDUjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFFQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQSxJQUVOLE1BQU07QUFBQTtBQUFBLElBQ04sWUFBWTtBQUFBO0FBQUEsSUFFWixNQUFNO0FBQUE7QUFBQSxJQUNOLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFjUjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
