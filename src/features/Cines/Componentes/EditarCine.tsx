import { useParams } from "react-router-dom"

export default function EditarCine() {

    const { id } = useParams();

    return (
        <>
            <h3>Editar Cine</h3>
            <p>el ID del cine es: {id}</p>
        </>
    )
}