import { useForm, type SubmitHandler, type Resolver } from "react-hook-form";
import type PeliculaCreacion from "../modelos/PeliculaCreacion.model";
import { yupResolver } from "@hookform/resolvers/yup";
import Boton from "../../../Componentes/Boton";
import { NavLink } from "react-router-dom";
import SeleccionarImagen from "../../../Componentes/SeleccionarImagen";
import * as yup from "yup";
import SelectorMultiple from "../../../Componentes/SelectorMultiple/SelectorMultiple";
import type SelectorMultipleModel from "../../../Componentes/SelectorMultiple/SelectorMultiple.model";
import type Genero from "../../generos/componentes/Modelos/Genero.model";
import { useState } from "react";





import type Cine from "../../Cines/Componentes/modelos/Cine.Model";
import TypeAheadActores from "./TypeAheadActores";
import type ActorPelicula from "../modelos/ActorPelicula";

export default function FormularioPelicula(props: FormularioPeliculaProps) {
    const obtenerFechaDefecto = () => {
        if (!props.modelo?.fechaEstreno) return undefined;
        const fecha = new Date(props.modelo.fechaEstreno);
        if (isNaN(fecha.getTime())) return undefined;
        return fecha.toISOString().split('T')[0];
    }

    const {
        register, handleSubmit, setValue,
        formState: { errors, isValid, isSubmitting }
    } = useForm<PeliculaCreacion>({
        resolver: yupResolver(reglasValidacion) as unknown as Resolver<PeliculaCreacion>,
        mode: 'onChange',
        defaultValues: {
            ...props.modelo,
            fechaEstreno: obtenerFechaDefecto()
        } as unknown as PeliculaCreacion
    });

    const imagenActualURL: string | undefined = props.modelo?.poster ? props.modelo.poster as string : undefined;

    const mapear = (arreglo: { id: number, nombre: string }[]): SelectorMultipleModel[] => {
        return arreglo.map(item => {
            return {
                llave: item.id,
                descripcion: item.nombre
            }
        })
    }

    const [generosSeleccionados, SetGenerosSeleccionados] = useState(mapear(props.generosSeleccionados));
    const [generosNoSeleccionados, SetGenerosNoSeleccionados] = useState(mapear(props.generosNoSeleccionados));

    const [cinesSeleccionados, SetCinesSeleccionados] = useState(mapear(props.cinesSeleccionados));
    const [cinesNoSeleccionados, SetCinesNoSeleccionados] = useState(mapear(props.cinesNoSeleccionados));
    const [actoresSeleccionados, SetActoresSeleccionados] = useState<ActorPelicula[]>(props.actoresSeleccionados || []);

    const onSubmit: SubmitHandler<PeliculaCreacion> = (data) => {
        data.generosIds = generosSeleccionados.map(x => x.llave);
        data.cinesIds = cinesSeleccionados.map(x => x.llave);
        data.actores = actoresSeleccionados;
        props.onSubmit(data);
    }


    return (
        <>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="titulo">Título</label>
                    <input type="text" className="form-control" id="titulo" autoComplete="off" {...register("titulo")} />
                    {errors.titulo && <p className="error">{errors.titulo.message}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="fechaEstreno">Fecha Estreno</label>
                    <input type="date" className="form-control" id="fechaEstreno" {...register("fechaEstreno")} />
                    {errors.fechaEstreno && <p className="error">{errors.fechaEstreno.message}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="trailer">Trailer</label>
                    <input type="text" className="form-control" id="trailer" autoComplete="off" {...register("trailer")} />
                    {errors.trailer && <p className="error">{errors.trailer.message}</p>}
                </div>

                <SeleccionarImagen label="Poster" imagenUrl={imagenActualURL} imagenSeleccionada={poster => {
                    setValue('poster', poster, { shouldValidate: true });
                }} />

                <div className="form-group">
                    <label>Géneros:</label>
                    <SelectorMultiple seleccionados={generosSeleccionados} noSeleccionados={generosNoSeleccionados}
                        onChange={(seleccionados, noseleccionados) => {
                            SetGenerosSeleccionados(seleccionados);
                            SetGenerosNoSeleccionados(noseleccionados)
                        }} />
                </div>

                <div className="form-group">
                    <label>Cines:</label>
                    <SelectorMultiple seleccionados={cinesSeleccionados} noSeleccionados={cinesNoSeleccionados}
                        onChange={(seleccionados, noseleccionados) => {
                            SetCinesSeleccionados(seleccionados);
                            SetCinesNoSeleccionados(noseleccionados)
                        }} />
                </div>

                <div className="form-group">
                    <TypeAheadActores
                        actores={actoresSeleccionados}
                        onAdd={actores => {
                            SetActoresSeleccionados(actores)
                        }}

                        onRemove={actor => {
                            const actores = actoresSeleccionados.filter(x => x !== actor)
                            SetActoresSeleccionados(actores);
                        }}

                        onCambioPersonaje={(id, personaje) => {
                            const indice = actoresSeleccionados.findIndex(x => x.id === id);

                            const actores = [...actoresSeleccionados];
                            actores[indice].personaje = personaje;
                            SetActoresSeleccionados(actores);
                        }}
                    />
                </div>

                <div className="mt-2">
                    <Boton type="submit" disabled={!isValid || isSubmitting}>
                        {isSubmitting ? 'Enviando...' : 'Enviar'}
                    </Boton>
                    <NavLink to="/" className="btn btn-secondary ms-2">
                        Cancelar
                    </NavLink>
                </div>
            </form>
        </>
    );
}

interface FormularioPeliculaProps {
    modelo?: PeliculaCreacion;
    onSubmit: SubmitHandler<PeliculaCreacion>;
    generosSeleccionados: Genero[];
    generosNoSeleccionados: Genero[];
    cinesSeleccionados: Cine[];
    cinesNoSeleccionados: Cine[];
    actoresSeleccionados?: ActorPelicula[];
}

const reglasValidacion = yup.object({
    titulo: yup.string().required('El título es requerido'),
    fechaEstreno: yup.date().required('La fecha de estreno es requerida').typeError('La fecha de estreno es requerida'),
    trailer: yup.string(),
    poster: yup.mixed().nullable()
});