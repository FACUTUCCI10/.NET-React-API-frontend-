import { useForm, type SubmitHandler } from "react-hook-form";
import Boton from "../../../Componentes/Boton";
import type Genero from "../../generos/componentes/Modelos/Genero.model";

export default function FiltrarPeliculas() {

    const ValorInicial: FormularioValores = {
        titulo: '',
        generoId: 0,
        enCines: false,
        proximosEstrenos: false
    }


    const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<FormularioValores>({

        defaultValues: ValorInicial
    })

    const genero: Genero[] = [
        { id: 1, nombre: 'Drama' },
        { id: 2, nombre: 'Accion' },
        { id: 3, nombre: 'suspenso' },
        { id: 4, nombre: 'comedia' }
    ]

    const onSubmit: SubmitHandler<FormularioValores> = async (data) => {
        console.log('Filtrando...');
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(data);
    }


    return (
        <>
            <h3>Filtro de Peliculas</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="row row-cols-lg-auto g-3 align-items-center">
                <div className="col-12">
                    <input id="titulo" placeholder="Titulo de la pelicula" autoComplete="off" className="form-control" {...register('titulo')} />
                </div>
                <div className="col-12">
                    <select className="form-select" {...register('generoId')} >
                        <option value="0">Todos los géneros</option>
                        {genero.map(genero => <option key={genero.id} value={genero.id}>{genero.nombre}</option>)}
                    </select>
                </div>

                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="enCines" {...register('enCines')} />
                        <label className="form-check-label" htmlFor="enCines">En Cines</label>
                    </div>

                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="ProximosEstrenos" {...register('proximosEstrenos')} />
                        <label className="form-check-label" htmlFor="ProximosEstrenos">Proximos Estrenos</label>
                    </div>
                </div>
                <div className="col-12">
                    <Boton disabled={isSubmitting} type="submit" className="btn btn-primary">{isSubmitting ? 'Filtrando...' : 'Filtrar'}</Boton>
                    <Boton onClick={() => reset()} className="btn btn-danger ms-2">Limpiar</Boton>
                </div>
            </form>
        </>
    );
}

interface FormularioValores {
    titulo: string;
    generoId: number;
    enCines: boolean;
    proximosEstrenos: boolean;
}