import { MapContainer, Marker, Popup, TileLayer, useMapEvent } from "react-leaflet";
import type { Coordenada } from "./Coordenada.mode";

export default function Mapa(props: MapaProps) {
    return (
        <MapContainer center={[-34.6035777402363, -58.38156188839212]} zoom={14}
            scrollWheelZoom={true} style={{ height: '500px' }}>

            <TileLayer
                attribution='React Peliculas'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {props.editable && props.manejarClickMapa ? (
                <ClickMapa setPunto={props.manejarClickMapa} />
            ) : null}

            {props.coordenadas?.map(coordenada => (
                <Marker key={coordenada.latitud + coordenada.longitud}
                    position={[coordenada.latitud, coordenada.longitud]}
                >
                    {coordenada.mensaje ? <Popup>{coordenada.mensaje}</Popup> : undefined}
                </Marker>
            ))}
        </MapContainer>
    )
}

function ClickMapa(props: ClickMapaProps) {
    useMapEvent('click', e => {
        props.setPunto({ latitud: e.latlng.lat, longitud: e.latlng.lng });
    })
    return null;
}

interface ClickMapaProps {
    setPunto: (coordenada: Coordenada) => void;
}

interface MapaProps {
    coordenadas: Coordenada[];
    manejarClickMapa?: (coordenada: Coordenada) => void;
    editable: boolean;
}