# React Películas Frontend

Aplicación frontend construida con React y Vite para la gestión de películas, cines, actores y géneros. Este proyecto forma parte del ecosistema de la API en .NET, sirviendo como interfaz de usuario para interactuar con la base de datos de películas.

## 🚀 Tecnologías

*   React 18
*   TypeScript
*   Vite
*   React Router DOM (Enrutamiento)
*   Bootstrap (Estilos)

## 📁 Estructura Principal

*   `/src/features/`: Componentes organizados por dominio (Actores, Cines, Géneros, Películas, Home).
*   `/src/utils/`: Componentes y funciones compartidas (ej. `<Boton />`).
*   `/src/AppRoutes.tsx`: Configuración principal de las rutas de la aplicación.

## 🛠️ Instalación y Uso

1.  Clonar el repositorio.
2.  Instalar dependencias:
    ```bash
    npm install
    ```
3.  Iniciar el servidor de desarrollo:
    ```bash
    npm run dev
    ```

## 🌐 Endpoints y Rutas Activas

*   `/` - Inicio (Listado de Películas en Estreno/Cartelera)
*   `/peliculas` - Gestión de Películas
*   `/generos` - Gestión de Géneros
*   `/actores` - Gestión de Actores
*   `/cines` - Gestión de Cines
