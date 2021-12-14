import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Vistas

import { HeaderUserI } from "../components/HeaderUserI.jsx";
// import ChangePassword from "./components/ChangePassword";
// import { UsuarioInternoReg } from "./components/UsuarioInternoReg";
// import { PasarelaDePago } from "./components/PasarelaPago";
import { Precios } from "../components/Precios.jsx";
import { Inventario } from "../components/Inventario.jsx";
import { Tanqueo } from "../components/Tanqueo.jsx";
import { GestionUsuarios } from "../components/GestionUsuarios.jsx";
import { ConfiguracionUserI } from "../components/ConfiguracionUserI.jsx";
import { FooterUserI } from "../components/FooterUserI.jsx";
import { Login } from "../components/Login.jsx";
import { Singup } from "../components/Singup.jsx";
import { Footer } from "../components/Footer";
import { DatosNuevoVehiculo } from "../components/DatosNuevoVehiculo";
import { HeaderUserE } from  "../components/HeaderUserE";
import { PrecioPorGalon } from "../components/PrecioPorGalon.jsx";
import { Historial } from "../components/Historial.jsx";
import { CuentaUE } from "../components/CuentaUE.jsx";
import { FooterUserE } from "../components/FooterUserE.jsx";
import { MisVehiculos } from "../components/MisVehiculos.jsx";
import PrivateRouter from "./PrivateRouter.js";
import PublicRouter from "./PublicRouter.js";

export default function AppRouter() {
    return (
        <Router>
            <HeaderUserI />
            <Routes>
                <Route path="/ingresar" element={<PublicRouter><Login /></PublicRouter>}/>
                <Route path="/registrar" element={<PublicRouter><Singup /></PublicRouter>}/>
                <Route path="/informacion" element={<Footer />} />

                <Route path="/precios" element={<PrivateRouter><Precios /></PrivateRouter>} />
                <Route path="/inventario" element={<PrivateRouter><Inventario /></PrivateRouter>} />
                <Route path="/tanqueo" element={<PrivateRouter><Tanqueo /></PrivateRouter>} />
                <Route path="/gestion-user" element={<PrivateRouter><GestionUsuarios /></PrivateRouter>} />

                <Route path="/configuracion" element={<PrivateRouter><ConfiguracionUserI /></PrivateRouter>}/>
                <Route path="/vehiculos" element={<PublicRouter> <MisVehiculos /> </PublicRouter>}/>

                <Route path="*" element={<h1>Pagina No Encontrada</h1>}/>
            </Routes>
            <FooterUserI />
        </Router>
    )
}
