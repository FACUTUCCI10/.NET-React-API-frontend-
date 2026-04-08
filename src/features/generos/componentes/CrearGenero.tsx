import { useForm, type SubmitHandler } from "react-hook-form";
import type GeneroCreacion from "./Modelos/GeneroCreacion.Model";
import FormularioGenero from "./FormularioGenero";


export default function CrearGenero() {


    // Ya no necesitamos useEffect para buscar datos previos porque estamos creándolo desde cero.
    // 'onSubmit' en este caso es equivalente al de Editar, pero su trabajo al contactar a la API
    // será realizar una petición tipo POST en vez de un PUT, enviando el objeto 'data'.
    const onSubmit: SubmitHandler<GeneroCreacion> = async (data) => {
        console.log("Creando el genero...")
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(data);
    }



    return (
        <>
            <h3>Crear Género</h3>
            <FormularioGenero onSubmit={onSubmit} />
        </>
    )
}

