import { useForm, type SubmitHandler } from "react-hook-form";
import type CineCreacion from "./modelos/CineCreacion.model";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { primeraLetraMayuscula } from "../../../Validaciones/Validaciones";
import { NavLink } from "react-router-dom";
import Boton from "../../../Componentes/Boton";
import Mapa from "../../../Componentes/Mapa/Mapa";
import { useState } from "react";
import type { Coordenada } from "../../../Componentes/Mapa/Coordenada.mode";


export default function FormularioCine(props: FormularioCineProps) {
    const { register, handleSubmit, setValue, formState: { errors, isValid, isSubmitting } } = useForm<CineCreacion>({
        resolver: yupResolver(ReglasValidacion),
        mode: 'onChange',
        defaultValues: props.modelo ?? { nombre: '' }
    })

    const [coordenadas, setCoordenadas] = useState<Coordenada[]>(
        props.modelo?.latitud && props.modelo?.longitud 
        ? [{ latitud: props.modelo.latitud, longitud: props.modelo.longitud }] 
        : []
    );

    const manejarClickMapa = (coordenada: Coordenada) => {
        setValue('latitud', coordenada.latitud, { shouldValidate: true });
        setValue('longitud', coordenada.longitud, { shouldValidate: true });
        setCoordenadas([coordenada]);
    }

    return (
        <>
            <form onSubmit={handleSubmit(props.onSubmit)}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" className="form-control" autoComplete="off" {...register('nombre')} />
                    {errors.nombre && <p className="error">{errors.nombre.message}</p>}
                </div>

                <div className="mt-4">
                    <Mapa coordenadas={coordenadas} manejarClickMapa={manejarClickMapa} editable={true} />
                </div>

                <input type="hidden" {...register('latitud')} />
                <input type="hidden" {...register('longitud')} />

                {errors.latitud && <p className="error">{errors.latitud.message}</p>}
                {errors.longitud && <p className="error">{errors.longitud.message}</p>}

                <Boton type="submit" disabled={!isValid || isSubmitting}>
                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                </Boton>
                <NavLink to="/cines" className="btn btn-secondary ms-2">Cancelar</NavLink>
            </form>
        </>
    )
}


interface FormularioCineProps {
    modelo?: CineCreacion;
    onSubmit: SubmitHandler<CineCreacion>;
}

const ReglasValidacion = yup.object({
    nombre: yup.string().required("El nombre es requerido")
        .test(primeraLetraMayuscula()),
    latitud: yup.number().required("La latitud es requerida"),
    longitud: yup.number().required("La longitud es requerida")
})