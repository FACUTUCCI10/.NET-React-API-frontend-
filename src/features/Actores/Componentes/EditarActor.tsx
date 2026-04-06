import { useParams } from "react-router-dom"

export default function EditarActor() {

    const { id } = useParams();

    return (
        <>
            <h3>Editar Actor</h3>
            <p>el ID del actor es: {id}</p>
        </>
    )
}