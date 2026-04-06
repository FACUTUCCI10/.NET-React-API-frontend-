/**
 * vite.config.ts
 * 
 * Archivo de configuración para Vite.
 * Aquí se definen los plugins y otras configuraciones que afectan cómo se compila y se sirve tu aplicación.
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Define la configuración para Vite de manera tipada.
export default defineConfig({
  // Plugins que utiliza Vite para extender sus capacidades. 
  // En este caso, el plugin de React con SWC para una compilación más rápida.
  plugins: [react()],
})
