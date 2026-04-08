import { NavLink } from "react-router-dom";
import Boton from "../../../Componentes/Boton";
import { useForm, type SubmitHandler } from "react-hook-form";
import type ActorCreacion from "./Modelos/ActorCreacion.model";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function FormularioActor(props: FormularioActorProps) {

    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isSubmitting }
    } = useForm<ActorCreacion>({
        defaultValues: props.modelo ?? { nombre: '', fechaNacimiento: '' },
        // resolver: yupResolver(ReglasValidacion),
        // mode: "onChange",
    })


return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
        <div className="form-group">
            <label htmlFor="nombre">Nombre del Actor</label>
            <input type="text" autoComplete="off" className="form-control" {...register('nombre')} />
            {errors.nombre && <p className="error">{errors.nombre.message}</p>}
        </div>

        <div className="form-group">
            <label htmlFor="fecha">Fecha de nacimiento</label>
            <input type="date" id="fechaNacimiento" autoComplete="off" className="form-control" {...register('fechaNacimiento')} />
            {errors.fechaNacimiento && <p className="error">{errors.fechaNacimiento.message}</p>}
        </div>



        <div className="mt-2">
            <Boton type="submit" disabled={!isValid || isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Enviar'}
            </Boton>
            <NavLink to="/actores" className="btn btn-secondary ms-2">Cancelar</NavLink>
        </div>
    </form>
)
}

interface FormularioActorProps {
    modelo?: ActorCreacion;
    onSubmit: SubmitHandler<ActorCreacion>;
}