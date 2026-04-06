import type { ReactNode } from "react";

export default function Boton(props: botonProps) {
    return (
        <button type={props.type} className="btn btn-primary"
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

interface botonProps {
    children: ReactNode;
    onClick?: () => void; //no retorna nada
    type: "button" | "submit" | "reset";
    className?: string;
}

Boton.defaultProps = {
    type: "button",
    className: "btn btn-primary"
}
