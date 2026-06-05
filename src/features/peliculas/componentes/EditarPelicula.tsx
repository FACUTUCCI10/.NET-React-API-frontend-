import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type PeliculaCreacion from "../modelos/PeliculaCreacion.model";
import FormularioPelicula from "./FormularioPelicula";
import type { SubmitHandler } from "react-hook-form";
import Cargando from "../../../Componentes/Cargando";
import type Genero from "../../generos/componentes/Modelos/Genero.model";

import type Cine from "../../Cines/Componentes/modelos/Cine.Model";
import type ActorPelicula from "../modelos/ActorPelicula";

export default function EditarPelicula() {
    const { id } = useParams();
    const [modelo, setModelo] = useState<PeliculaCreacion | undefined>(undefined);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setModelo({
                titulo: 'Spiderman ' + id,
                fechaEstreno: new Date('2003-10-07'),
                trailer: 'abc',
                poster: 'https://es.wikipedia.org/wiki/Archivo:Spider-Man.jpg'
            });
        }, 1000);
        return () => clearTimeout(timerId);
    }, [id]);

    const onsubmit: SubmitHandler<PeliculaCreacion> = async (data) => {
        console.log('Editando película...');
        await new Promise(resolve => setTimeout(resolve, 500));
        console.log(data);
    };

    const generosSeleccionados: Genero[] = [
        { id: 1, nombre: 'Accion' },
        { id: 3, nombre: 'Comedia' }
    ];

    const generosNoSeleccionados: Genero[] = [
        { id: 2, nombre: 'Drama' },
        { id: 4, nombre: 'Ciencia Ficcion' }
    ];

    const cinesSeleccionados: Cine[] = [
        { id: 1, nombre: 'Gaumont', latitud: 0, longitud: 0 }
    ];

    const cinesNoSeleccionados: Cine[] = [
        { id: 2, nombre: 'Imax', latitud: 0, longitud: 0 }
    ];

    const actoresSeleccionados: ActorPelicula[] = [
        {
            id: 1,
            nombre: 'Tom Holland',
            personaje: 'Spider-Man',
            foto: ''
        }
    ];

    return (
        <>
            <h3>Editar Película</h3>
            {modelo ? (
                <FormularioPelicula
                    modelo={modelo}
                    onSubmit={onsubmit}
                    generosSeleccionados={generosSeleccionados}
                    generosNoSeleccionados={generosNoSeleccionados}
                    cinesSeleccionados={cinesSeleccionados}
                    cinesNoSeleccionados={cinesNoSeleccionados}
                    actoresSeleccionados={actoresSeleccionados}
                />
            ) : (
                <Cargando />
            )}
        </>
    );
}