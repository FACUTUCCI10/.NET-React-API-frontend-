import { Routes, Route } from "react-router-dom";
import LandingPage from "./features/Home/componentes/LandingPage";
import IndiceGeneros from "./features/generos/componentes/IndiceGeneros";
import CrearGenero from "./features/generos/componentes/CrearGenero";
import EditarGenero from "./features/generos/componentes/EditarGenero";
import CrearCine from "./features/Cines/Componentes/CrearCine";
import EditarCine from "./features/Cines/Componentes/EditarCine";
import IndiceCines from "./features/Cines/Componentes/IndiceCines";
import CrearPelicula from "./features/peliculas/componentes/CrearPelicula";
import EditarPelicula from "./features/peliculas/componentes/EditarPelicula";
import CrearActor from "./features/Actores/Componentes/CrearActor";
import EditarActor from "./features/Actores/Componentes/EditarActor";
import IndiceActores from "./features/Actores/Componentes/IndiceActores";
import IndicePeliculas from "./features/peliculas/componentes/IndicePeliculas";
import FiltrarPeliculas from "./features/peliculas/componentes/FiltrarPeliculas";
import RutaNoEncontrada from "./Componentes/RutaNoEncontrada";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/generos" element={<IndiceGeneros />} />
            <Route path="/generos/crear" element={<CrearGenero />} />
            <Route path="/generos/editar/:id" element={<EditarGenero />} />

            <Route path="/cines" element={<IndiceCines />} />
            <Route path="/cines/crear" element={<CrearCine />} />
            <Route path="/cines/editar/:id" element={<EditarCine />} />

            <Route path="/actores" element={<IndiceActores />} />
            <Route path="/actores/crear" element={<CrearActor />} />
            <Route path="/actores/editar/:id" element={<EditarActor />} />

            <Route path="/peliculas" element={<IndicePeliculas />} />
            <Route path="/peliculas/crear" element={<CrearPelicula />} />
            <Route path="/peliculas/editar/:id" element={<EditarPelicula />} />
            <Route path="/peliculas/filtrar" element={<FiltrarPeliculas />} />



            {/* 
             //ruta no encontrada */}

            <Route path="*" element={<RutaNoEncontrada />} />


        </Routes>
    )
}