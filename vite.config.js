import { defineConfig } from 'vite';
import imagemin from 'unplugin-imagemin/vite';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ 
    imagemin({
      // Default mode squoosh. support squoosh and sharp
      mode: 'sharp',
      // Default configuration options for compressing different pictures
      compress: {
        jpg: {
          quality: 0,
        },
        jpeg: {
          quality: 70,
        },
        png: {
          quality: 70,
        },
        webp: {
          quality: 70,
        },
      },
      // The type of picture converted after the build
      conversion: [
        { from: 'png', to: 'webp' },
        { from: 'jpeg', to: 'webp' },
      ]
    })
  ]
});