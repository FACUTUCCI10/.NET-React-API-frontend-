import type { SubmitHandler } from "react-hook-form";
import FormularioPelicula from "./FormularioPelicula";
import type PeliculaCreacion from "../modelos/PeliculaCreacion.model";
import type Genero from "../../generos/componentes/Modelos/Genero.model";
import type Cine from "../../Cines/Componentes/modelos/Cine.Model";

export default function CrearPelicula() {


    const onsubmit: SubmitHandler<PeliculaCreacion> = async (data) => {
        console.log('creando pelicula...');
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(data);
    }

    const generosSeleccionados: Genero[] = [];
    const generosNoSeleccionados: Genero[] = [{ id: 1, nombre: 'Accion' },
    { id: 2, nombre: 'Drama' },
    { id: 3, nombre: 'Comedia' },
    { id: 4, nombre: 'Ciencia Ficcion' }];

    const cinesSeleccionados: Cine[] = [];
    const cinesNoSeleccionados: Cine[] = [
        { id: 1, nombre: 'Gaumont', latitud: 0, longitud: 0 },
        { id: 2, nombre: 'Imax', latitud: 0, longitud: 0 }
    ];

    return (

        <>
            <h3>Crear Película</h3>
            <FormularioPelicula
                onSubmit={onsubmit}
                generosSeleccionados={generosSeleccionados}
                generosNoSeleccionados={generosNoSeleccionados}
                cinesSeleccionados={cinesSeleccionados}
                cinesNoSeleccionados={cinesNoSeleccionados}
                actoresSeleccionados={[]}
            />
        </>

    )
}