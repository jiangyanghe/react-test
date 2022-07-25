import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import vitePluginImp from 'vite-plugin-imp'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        configFile: true
      }
    }),
    vitePluginImp({
      libList: [
        {
          libName: 'lodash',
          libDirectory: '',
          camel2DashComponentName: false
        }
      ]
    })
  ],
  build: {
    minify: false
  }
})
