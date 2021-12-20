import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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
import { EditarVehiculo } from "../components/EditarVehiculo.jsx";

//Routes
import ExternoRouter from "./ExternoRouter"
import InternoRouter from "./InternoRouter.js";
import PublicRouter from "./PublicRouter.js";

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

                <Route path="/precios" element={<InternoRouter><Precios /></InternoRouter>} />
                <Route path="/inventario" element={<InternoRouter><Inventario /></InternoRouter>} />
                <Route path="/tanqueo" element={<InternoRouter><Tanqueo /></InternoRouter>} />
                <Route path="/gestion-user" element={<InternoRouter><GestionUsuarios /></InternoRouter>} />
                <Route path="/configuracion" element={<InternoRouter><ConfiguracionUserI /></InternoRouter>}/>

                <Route path="/vehiculos/:id" element={<ExternoRouter><MisVehiculos/></ExternoRouter>}/>
                <Route path="/agregar" element={<ExternoRouter><DatosNuevoVehiculo /></ExternoRouter>}/>
                <Route path="/vehiculos/editar/:id" element={<ExternoRouter><EditarVehiculo /> </ExternoRouter>}/>
                <Route path="/historial/:id" element={<ExternoRouter><Historial /></ExternoRouter>}/>
                <Route path="/precio-galon" element={<ExternoRouter><PrecioPorGalon /></ExternoRouter>}/>
                <Route path="/cuenta-ue" element={<ExternoRouter><CuentaUE /></ExternoRouter>}/>

                <Route path="/" element={<Navigate to="/ingresar"/>}/>
                <Route path="*" element={<h1>Pagina No Encontrada</h1>}/>
            </Routes>
            <FooterUserI />
        </Router>
    )
}
