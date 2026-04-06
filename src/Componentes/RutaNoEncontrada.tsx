import { useEffect } from "react"
import { useLocation, Navigate } from "react-router-dom";


export default function RutaNoEncontrada() {

    const location = useLocation();


    useEffect(() => {
        console.log(`Ruta no encontrada: ${location.pathname}`);
    }, [location])

    return <Navigate to="/" />
}