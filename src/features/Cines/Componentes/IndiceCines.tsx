import Boton from "../../../Componentes/Boton";
import { useNavigate } from "react-router-dom";

export default function IndiceCines() {
    const navigate = useNavigate();
    return (
        <>
            <h3>Índice Cines</h3>
            <Boton onClick={() => navigate('/cines/crear')}>
                Crear Cine
            </Boton>
        </>
    )
}
