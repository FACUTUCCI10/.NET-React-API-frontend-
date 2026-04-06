import { NavLink } from "react-router-dom";
import Boton from "../../../Componentes/Boton";
import { useForm, type SubmitHandler } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function CrearGenero() {

    const { register, handleSubmit, formState: { errors, isValid, isSubmitting } } = useForm<FormType>({
        resolver: yupResolver(ReglasValidacion),
        mode: "onChange"
    });

    // function onSubmit(data: FormType) {
    //     console.log(data);
    // }

    const onSubmit: SubmitHandler<FormType> = async (data) => {

        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(data);
    }



    return (
        <>
            <h3>Crear Género</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" autoComplete="off" className="form-control" {...register('nombre')} />
                    {errors.nombre && <p className="error">{errors.nombre.message}</p>}
                </div>
                <div className="mt-2">
                    <Boton type="submit" disabled={!isValid || isSubmitting}> {isSubmitting ? 'Enviando...' : 'Enviar'}</Boton>
                    <NavLink to="/generos" className="btn btn-secondary ms-2">Cancelar</NavLink>
                </div>
            </form>
        </>
    )
}

interface FormType {
    nombre: string;
}

const ReglasValidacion = Yup.object({

    nombre: Yup.string().required('El nombre es requerido')
})