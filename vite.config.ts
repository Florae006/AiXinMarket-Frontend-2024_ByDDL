import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite';

import { ArcoResolver, NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import { VarletImportResolver } from '@varlet/import-resolver'

import basicSSL from '@vitejs/plugin-basic-ssl'


// https://vitejs.dev/config/
export default defineConfig({
  define: { // 定义全局变量替换方式
    'process.env': process.env,
    'process.env.NODE_ENV': '"development"',
    __APP_VERSION__: JSON.stringify(require('./package.json').version),
    __API_URL__: 'window.__backend_api_url',
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ArcoResolver()],
    }),
    Components({
      resolvers: [
        ArcoResolver({
          importStyle: 'less',
          sideEffect: true,
        }),
        NaiveUiResolver(),
        VarletImportResolver(),
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),	// 设置'@'指向'src'
    },
  },
  root: './',	// index.html所在的位置，即根目录
  base: './',	// 设置打包路径，用于嵌入式开发
  mode: process.env.NODE_ENV,	// 设置模式，'development' 用于开发，'production' 用于构建(见define中的process.env.NODE_ENV)

  publicDir: 'public',	// 设置静态资源目录
  cacheDir: 'node_modules/.vite',	// 设置缓存目录
  envDir: './',	// 设置环境变量目录

  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          // 'primary-color': '#1890ff',
          // 'link-color': '#1890ff',
          // 'border-radius-base': '2px',
        },
        javascriptEnabled: true,
        math: 'parens-division',
      },
    },
  },

  server: {
    host: 'localhost',	// 设置服务器启动地址，默认为'localhost
    
    port: 5173,	// 设置服务器启动端号,如果端口已经被使用，Vite 会自动尝试下一个可用的端口，所以这可能不是开发服务器最终监听的实际端口。
    strictPort: false,	// 设置是否严格检查端口号
    
    open: false,	// 设置服务启动时是否自动打开浏览器
    cors: true,	// 允许跨域
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
  },

  build: {
    outDir: 'dist',	// 设置输出目录
    assetsDir: 'assets',	// 设置静态资源目录
    assetsInlineLimit: 4096,	// 设置资源内联的最大尺寸
    sourcemap: false,	// 设置是否构建源映射
    manifest: true,	// 设置是否生成 manifest.json 文件
    chunkSizeWarningLimit: 1500,  // 设置构建警告的最大尺寸
    rollupOptions: {
      // 设置输出文件名
      output: {
        entryFileNames: 'entry-[hash].js',
        chunkFileNames: 'chunk-[hash].js',
        assetFileNames: 'asset-[hash].[ext]',
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      },
    },
  },
})

