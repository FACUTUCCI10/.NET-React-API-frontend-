import { Typeahead } from "react-bootstrap-typeahead";
import type ActorPelicula from "../modelos/ActorPelicula";
import { useState } from "react";

export default function TypeAheadActores(props: TypeAheadActoresProps) {


    const actores: ActorPelicula[] = [{
        id: 1,
        nombre: 'Tom Holland',
        personaje: 'Peter Parker',
        foto: ''
    },

    {
        id: 2,
        nombre: 'Maria Tomei',
        personaje: 'Tia May',
        foto: ''
    },
    {
        id: 3,
        nombre: 'Willem Dafoe',
        personaje: 'Duende verde',
        foto: ''
    }
    ];


    const seleccion: ActorPelicula[] = [];

    const [elementoArrastrado, setElementoArrastrado] = useState<ActorPelicula | undefined>(undefined);

    const manejarDragStart = (actor: ActorPelicula) => {
        setElementoArrastrado(actor);
    }

    const manejarDragOver = (actor: ActorPelicula) => {
        if (!elementoArrastrado || actor.id === elementoArrastrado.id) {
            return;
        }

        const actores = [...props.actores];

        const indiceDesde = actores.findIndex(x => x.id === elementoArrastrado.id);
        const indiceHasta = actores.findIndex(x => x.id === actor.id);

        if (indiceDesde !== -1 && indiceHasta !== -1) {
            [actores[indiceDesde], actores[indiceHasta]] = [actores[indiceHasta], actores[indiceDesde]];
            props.onAdd(actores);
        }


    }

    return (
        <>
            <label>Actores</label>
            <Typeahead id="typeahead"
                onChange={(actoresSeleccionados) => {
                    const actoresSeleccionado = actoresSeleccionados[0] as ActorPelicula
                    if (actoresSeleccionado && props.actores.findIndex(x => x.id === actoresSeleccionado.id) === -1) {
                        actoresSeleccionado.personaje = '';
                        props.onAdd([...props.actores, actoresSeleccionado])
                    }
                }}
                options={actores}
                labelKey={(opcion) => {
                    const actor = opcion as ActorPelicula;
                    return actor.nombre;
                }}

                filterBy={['nombre']}
                placeholder="Escriba el nombre del actor"
                minLength={2}
                flip={true}
                selected={seleccion}
                renderMenuItemChildren={(opcion) => {
                    const actor = opcion as ActorPelicula
                    return (
                        <>
                            <img src={actor.foto} alt="Imagen actor"
                                style={{
                                    height: '64px',
                                    width: '64px',
                                    marginRight: '10px'
                                }} />
                            <span>{actor.nombre}</span>
                        </>
                    )
                }}
            />
            <ul className="list-group">
                {props.actores.map(actor => (
                    <li draggable={true}
                        onDragStart={() => manejarDragStart(actor)}
                        onDragOver={() => manejarDragOver(actor)}
                        className="list-group-item d-flex align-items-center" key={actor.id}>

                        <div style={{ width: '70px' }}>
                            <img style={{ height: '60px' }} src={actor.foto} alt="Foto" />
                        </div>
                        <div style={{ width: '150px', marginLeft: '1rem' }}>
                            {actor.nombre}
                        </div>
                        <div className="flex-grow-1 mx-3">
                            <input className="form-control"
                                placeholder="Personaje" type="text"
                                value={actor.personaje}
                                onChange={e => {
                                    props.onCambioPersonaje(actor.id, e.currentTarget.value)
                                }} />
                        </div>
                        <span role="button" className="badge text-bg-secondary"
                            onClick={() => props.onRemove(actor)}>
                            X
                        </span>
                    </li>
                ))}
            </ul >
        </>
    )
}

interface TypeAheadActoresProps {
    actores: ActorPelicula[];
    onAdd(actores: ActorPelicula[]): void
    onCambioPersonaje(id: number, personaje: string): void;
    onRemove(actor: ActorPelicula): void
}