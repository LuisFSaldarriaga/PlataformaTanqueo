import React from "react";

import { Table } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import ChangePassword from "./components/ChangePassword";
import { UsuarioInternoReg } from "./components/UsuarioInternoReg";
import { PasarelaDePago } from "./components/PasarelaPago";
import { HeaderUserI } from  "./components/HeaderUserI";
import { Precios } from "./components/Precios.jsx";
import { Inventario } from "./components/Inventario.jsx";
import { Tanqueo } from "./components/Tanqueo.jsx";
import { GestionUsuarios } from "./components/GestionUsuarios.jsx";
import { ConfiguracionUserI } from "./components/ConfiguracionUserI.jsx";
import { FooterUserI } from "./components/FooterUserI.jsx";
import { Login } from "./components/Login.jsx";
import { Singup } from "./components/Singup.jsx";

export function App() {
    

    return (
        <div className="bg-dark vh-100 text-white">
            {/*<HeaderUserI></HeaderUserI>*/}
            <Singup/>
            <FooterUserI></FooterUserI>
        </div>
    ); 
}