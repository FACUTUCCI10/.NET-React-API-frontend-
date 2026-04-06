import Boton from "../../../Componentes/Boton";
import { useNavigate } from "react-router-dom";

export default function IndicePeliculas() {
    const navigate = useNavigate();
    return (
        <>
            <h3>Peliculas</h3>
            <Boton onClick={() => navigate('/peliculas/crear')}>
                Crear Película
            </Boton>
        </>
    )
} 
