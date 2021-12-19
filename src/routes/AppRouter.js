import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useAuth from "../auth/useAuth.js";

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
import { EditarVehiculo } from "../components/EditarVehiculo.jsx";

export default function AppRouter() {

    const auth = useAuth();
    const dato = JSON.parse(auth.user); 

    let interno = false;

    if(dato) {
        const { rol } = dato;
        if ( rol === "externo" ) {
            interno = true;
        }
    } 

    return (
        <Router>
            {interno ? (
                <HeaderUserE />
            ) : (
                <HeaderUserI />
            )}
            <Routes>
                <Route path="/ingresar" element={<PublicRouter><Login /></PublicRouter>}/>
                <Route path="/registrar" element={<PublicRouter><Singup /></PublicRouter>}/>
                <Route path="/informacion" element={<Footer />} />

                <Route path="/precios" element={<PrivateRouter><Precios /></PrivateRouter>} />
                <Route path="/inventario" element={<PrivateRouter><Inventario /></PrivateRouter>} />
                <Route path="/tanqueo" element={<PrivateRouter><Tanqueo /></PrivateRouter>} />
                <Route path="/gestion-user" element={<PrivateRouter><GestionUsuarios /></PrivateRouter>} />
                <Route path="/configuracion" element={<PrivateRouter><ConfiguracionUserI /></PrivateRouter>}/>
                <Route path="/vehiculos/:usuario" element={<PrivateRouter><MisVehiculos/></PrivateRouter>}/>
                <Route path="/agregar" element={<PrivateRouter><DatosNuevoVehiculo /></PrivateRouter>}/>
                <Route path="vehiculos/edit/:id" element={<PrivateRouter><EditarVehiculo /> </PrivateRouter>}/>
                <Route path="/historial" element={<PrivateRouter><Historial /></PrivateRouter>}/>
                <Route path="/precio-galon" element={<PrivateRouter><PrecioPorGalon /></PrivateRouter>}/>
                <Route path="/cuenta-ue" element={<PrivateRouter><CuentaUE /></PrivateRouter>}/>
                <Route path="*" element={<h1>Pagina No Encontrada</h1>}/>
            </Routes>
            {interno ? (
                <FooterUserE />
            ) : (
                <FooterUserI />
            )}
        </Router>
    )
}
