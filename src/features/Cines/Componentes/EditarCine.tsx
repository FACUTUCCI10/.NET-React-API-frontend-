import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import type CineCreacion from "./modelos/CineCreacion.model";
import FormularioCine from "./FormularioCine";
import type { SubmitHandler } from "react-hook-form";
import Cargando from "../../../Componentes/Cargando";

export default function EditarCine() {

    const { id } = useParams();
    const [modelo, setModelo] = useState<CineCreacion | undefined>(undefined);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setModelo({ nombre: 'Cine Capitol', latitud: -34.6035777402363, longitud: -58.38156188839212 });
        }, 1000);
        return () => clearTimeout(timerId);
    }, [id]);


    const onsubmit: SubmitHandler<CineCreacion> = async (data) => {
        console.log('Editando cine...')
        await new Promise(resolve => setTimeout(resolve, 500));
        console.log(data);
    }

    return (
        <>
            <h3>Editar Cine</h3>
            {modelo ? <FormularioCine modelo={modelo} onSubmit={onsubmit} /> : <Cargando />}
        </>
    )
}