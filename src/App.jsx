<<<<<<< HEAD
import AppRouter from "./routes/AppRouter"
import AuthProvider from "./auth/AuthProvider";
=======
import React from "react";

import { Table } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { ChangePassword} from "./components/ChangePassword";
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
import { Footer } from "./components/Footer";
>>>>>>> c08a088b699da4f802596fee9d35c6602be97236

export function App() {
    

    return (
<<<<<<< HEAD
        <div className="text-white">
            <AuthProvider>
                <AppRouter />
            </AuthProvider>
=======
        <div className="bg-dark vh-100 text-white">
            <Precios/>
>>>>>>> c08a088b699da4f802596fee9d35c6602be97236
        </div>
    ); 
}