import type Pelicula from "../modelos/pelicula.model";
import styles from "./peliculaindividual.module.css";

export function PeliculaIndividual(props: PeliculaIndividualProps   )
{

    const construirLink= ()=> `/pelicula/${props.pelicula.id}`

return(
    <div className={styles.card}>
        <a href={construirLink()}>
            <img alt="Poster" src={props.pelicula.poster} className={styles.poster}></img>
        </a>
        <p className={styles.title}>
            <a href={construirLink()} className={styles.link}>{props.pelicula.titulo}</a>

            </p>
    </div>
)
}

interface PeliculaIndividualProps{
    pelicula: Pelicula
}