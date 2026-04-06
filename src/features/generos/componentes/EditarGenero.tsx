import { useParams } from "react-router-dom"

export default function EditarGenero() {

    const { id } = useParams();

    return (
        <>
            <h3>Editar Género</h3>
            <p>el ID del genero es: {id}</p>
        </>
    )
}