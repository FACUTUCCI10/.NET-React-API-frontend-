import { useState, useEffect, type ChangeEvent } from "react";
import styles from './SeleccionarImagen.module.css'

export default function SeleccionarImagen(props: SeleccionarImagenProps) {

    const [imagenBase64, setImagenBase64] = useState(props.imagenUrl || '');

    useEffect(() => {
        setImagenBase64(props.imagenUrl || '');
    }, [props.imagenUrl]);

    const manejarOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files) {
            const archivo = e.currentTarget.files[0];

            aBase64(archivo).then(imagen => setImagenBase64(imagen))
                .catch(error => console.error(error));


            props.imagenSeleccionada(archivo);
        }
    }

    const aBase64 = (archivo: File) => {

        return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(archivo);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = error => reject(error);
        })
    }

    return (

        <div className="form-group">
            <label>{props.label}</label>
            <div>
                <input type="file" accept=".jpg, .jpeg, .png" onChange={manejarOnChange} />
            </div>

            {imagenBase64 ? <div>
                <div className={styles.div}>
                    <img src={imagenBase64} alt="imagen seleccionada" />
                </div>
            </div> : undefined}
        </div>

    )
}

interface SeleccionarImagenProps {
    label: string;
    imagenUrl?: string;
    imagenSeleccionada: (file: File) => void;
}