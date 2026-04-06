/**
 * main.tsx
 * 
 * Este es el punto de entrada principal de la aplicación React.
 * Su función principal es renderizar el componente raíz (App) en el contenedor DOM 'root'.
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css' // Estilos de Bootstrap
import './index.css' // Estilos globales para la aplicación
import App from './App.tsx' // Componente principal de la aplicación

// Crea el nodo raíz de React y renderiza el componente App dentro de StrictMode.
// StrictMode ayuda a identificar problemas potenciales en la aplicación durante el desarrollo.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
