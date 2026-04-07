import { NavLink } from "react-router-dom";
import Boton from "../../../Componentes/Boton";
import { useForm, type SubmitHandler } from "react-hook-form";
import type GeneroCreacion from "./Modelos/GeneroCreacion.Model";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function FormularioGenero(props: FormularioGeneroProps) {

    const { register, handleSubmit, formState: { errors, isValid, isSubmitting } } = useForm<GeneroCreacion>({
        defaultValues: props.modelo ?? { nombre: '' },
        resolver: yupResolver(ReglasValidacion),
        mode: "onChange",
    });

    return (

        <form onSubmit={handleSubmit(props.onSubmit)}>
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
    )
}

interface FormularioGeneroProps {
    modelo?: GeneroCreacion;
    onSubmit: SubmitHandler<GeneroCreacion>;
}

const ReglasValidacion = Yup.object({
    nombre: Yup.string().required('El nombre es requerido')
})