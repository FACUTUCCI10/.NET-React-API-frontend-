import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./features/Home/componentes/Menu";
import AppRoutes from "./AppRoutes";
export default function App() {

  return (
    <>
      <BrowserRouter>
        <Menu />
        <div className="container">

          <AppRoutes />

        </div>
      </BrowserRouter>
    </>
  );
}
