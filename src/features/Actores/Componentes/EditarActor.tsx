import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import FormularioActor from "./FormularioActor";
import Cargando from "../../../Componentes/Cargando";
import type { SubmitHandler } from "react-hook-form";
import type ActorCreacion from "./Modelos/ActorCreacion.model";

export default function EditarActor() {

    const { id } = useParams();

    const [modelo, setModelo] = useState<ActorCreacion | undefined>(undefined);

    // useEffect simula aquí una llamada a la API que trae los datos del actor.
    // Al colocar [id] como dependencia, este efecto se dispara cada vez que el ID de la URL cambie.
    useEffect(() => {
        const timerId = setTimeout(() => {
            // Seteamos el modelo pasados los 1000ms. Al tener los datos, react-hook-form los tomará como defaultValues.
            setModelo({ nombre: ' Tom Hanks ' + id, fechaNacimiento: ' 1956-07-09 ', Foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/TomHanksPrincEdw031223_%2811_of_41%29_%28cropped%29.jpg/500px-TomHanksPrincEdw031223_%2811_of_41%29_%28cropped%29.jpg' });
        }, 1000);
        return () => clearTimeout(timerId); // Limpiamos el timer si el usuario sale antes de que termine.
    }, [id]);

    // La función onSubmit se pasa como propiedad al FormularioActor.
    // Se encargará de recibir la 'data' validada y estructurada por react-hook-form,
    // y enviarla a la API (aquí estamos simulándolo con un Promise de 2 seg).
    const onSubmit: SubmitHandler<ActorCreacion> = async (data) => {
        console.log('Editando actor...');
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(data); // Imprime el resultado listo para enviar al backend en formato JSON
    }




    return (
        <>
            <h3>Editar Actor</h3>
            {modelo ? <FormularioActor modelo={modelo} onSubmit={onSubmit} /> : <Cargando />}
        </>
    )
}