import { NavLink } from "react-router-dom";

export default function Menu() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">React Peliculas </NavLink>

                <div className="collapse navbar-collapse">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/peliculas/filtrar" className="nav-link">Filtrar Peliculas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/generos" className="nav-link">Géneros</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/cines" className="nav-link">Cines</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/actores" className="nav-link">Actores</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/peliculas" className="nav-link">Películas</NavLink>
                        </li>
                    </ul>
                </div>

            </div>

        </nav>
    )
}
