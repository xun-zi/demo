import react from '@vitejs/plugin-react'
import { defineConfig,normalizePath } from 'vite'
import path from 'path'


const variablePath = normalizePath(path.resolve('./src/global.scss'));
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css:{
    preprocessorOptions:{
      scss:{
        additionalData: `@import "${variablePath}";`
      }
    }
  } 
})
