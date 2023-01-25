import { defineConfig } from 'vite';
import imagemin from 'unplugin-imagemin/vite';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ 
    imagemin({
      beforeBundle: false,
      mode: 'sharp',
      conversion: [
        { from: 'png', to: 'webp' },
        { from: 'jpeg', to: 'webp' },
        { from: 'jpg', to: 'webp' },
      ]
    })
  ]
});