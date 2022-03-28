
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import visualizer from 'rollup-plugin-visualizer';
import gzipPlugin from 'rollup-plugin-gzip';
import Components from 'unplugin-vue-components/vite';
import WindiCSS from 'vite-plugin-windicss';
import {
  AntDesignVueResolver,
} from 'unplugin-vue-components/resolvers'

const path = require('path');

const plugins = [
  vue(),
  WindiCSS(),
  gzipPlugin(),
  Components({ //自动按需加载
    resolvers: [AntDesignVueResolver()],
  })
];

if (process.env.vis) {
  plugins.push(
    visualizer({ //可视化包占比分析
      open: true,
      gzipSize: true,
      brotliSize: true,
    })
  );
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins,
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  build: {
    assetsDir: 'static'
  },
  server: {
    proxy: {
      '/api/v1': {
        target: 'http://192.168.252.54/dataunit',
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    }
  }
});
