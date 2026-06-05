import type ActorPelicula from "./ActorPelicula";

export default interface PeliculaCreacion {
    titulo: string;
    fechaEstreno: Date;
    trailer?: string;
    poster?: File | string | null;
    generosIds?: number[];
    cinesIds?: number[];
    actores?: ActorPelicula[];
}
