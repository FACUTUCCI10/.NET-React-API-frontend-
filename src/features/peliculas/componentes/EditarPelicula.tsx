import { useParams } from "react-router-dom"

export default function EditarPelicula() {

    const { id } = useParams();

    return (
        <>
            <h3>Editar Película</h3>
            <p>el ID de la pelicula es: {id}</p>
        </>
    )
}