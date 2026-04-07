import type { ReactNode } from "react";

export default function Boton(props: botonProps) {
    return (
        <button type={props.type ?? 'button'} className={props.className ?? 'btn btn-primary'}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}

interface botonProps {
    children: ReactNode;
    onClick?: () => void; //no retorna nada
    type?: "button" | "submit" | "reset";
    className?: string;
    disabled?: boolean;
}

Boton.defaultProps = {
    type: "button",
    className: "btn btn-primary"
}
