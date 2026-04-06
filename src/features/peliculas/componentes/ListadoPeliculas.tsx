import { PeliculaIndividual } from "./PeliculaIndividual"
import type Pelicula from "../modelos/pelicula.model";
import styles from "./listadoPeliculas.module.css";
import ListadoGenerico from "../../../Componentes/listadoGenerico";



export default function listadoPeliculas(props: listadoPeliculasProps) {



    return (

        <ListadoGenerico<Pelicula> listado={props.peliculas} >

            <div className={styles.div}>
                {props.peliculas?.map((pelicula) => <PeliculaIndividual key={pelicula.id} pelicula={pelicula} />)}
            </div>

        </ListadoGenerico>

    )



}

interface listadoPeliculasProps {
    peliculas?: Pelicula[];
}