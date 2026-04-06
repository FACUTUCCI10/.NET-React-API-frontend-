import Boton from "../../../Componentes/Boton";
import { useNavigate } from "react-router-dom";

export default function IndiceActores() {
    const navigate = useNavigate();
    return (
        <>
            <h3>Índice Actores</h3>
            <Boton onClick={() => navigate('/actores/crear')}>
                Crear Actor
            </Boton>
        </>
    )
}   
