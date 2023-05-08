import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementUiResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'

import VueSetupExtend from 'vite-plugin-vue-setup-extend'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueSetupExtend(),
    AutoImport({
      imports: ['vue', '@vueuse/core', 'pinia', { 'element-ui': ['MessageBox', 'Message'] }, { 'vue-router/composables': ['useRoute', 'useRouter'] }],
      resolvers: [ElementUiResolver()],
      dts: true,
    }),
    ElementPlus({
      useSource: false,
    }),
    Components({
      extensions: ['vue', 'tsx'],
      resolvers: [
        ElementUiResolver(),
        // (componentName) => { console.log(componentName) },
      ],
      dts: true,
    }),
    Unocss(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '~': resolve(__dirname, './'),
    },
  },
  server: {
    port: 5409,
    hmr: {
      port: 5409,
    },
  },
  base: './',
  build: {
    // ssr 时样式导致的闪烁
    cssCodeSplit: false,
  },
  ssr: {
    format: 'cjs',
  },
})
