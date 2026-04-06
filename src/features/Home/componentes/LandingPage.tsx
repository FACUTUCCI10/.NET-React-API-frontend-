import { useState, useEffect } from "react";
import type Pelicula from "../../peliculas/modelos/pelicula.model";
import ListadoPeliculas from "../../peliculas/componentes/ListadoPeliculas";

export default function LandingPage() {
    const [peliculas, setPeliculas] = useState<Pelicula[]>([]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            const cines: Pelicula[] = [
                {
                    id: 1,
                    titulo: "El señor de los anillos",
                    poster: "https://upload.wikimedia.org/wikipedia/commons/7/7d/El_Se%C3%B1or_de_los_Anillos_lectura.jpg",
                },
                {
                    id: 2,
                    titulo: "john wick",
                    poster:
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Keanu_Reeves_2014.jpg/250px-Keanu_Reeves_2014.jpg",
                },
                {
                    id: 3,
                    titulo: "Cinema paradiso",
                    poster:
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Nuovo_Cinema_Paradiso_logo.png/250px-Nuovo_Cinema_Paradiso_logo.png",
                },
            ];

            setPeliculas(cines);

        }, 1000);

        return () => clearTimeout(timerId);
    }, []);


    return (
        <>
            <h3 className="mb-3" color="red">Películas</h3>
            <ListadoPeliculas peliculas={peliculas} />
        </>
    )


}