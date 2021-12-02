import React from "react";

import { Table } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { ChangePassword } from "./components/ChangePassword";
import { UsuarioInternoReg } from "./components/UsuarioInternoReg";
import { PasarelaDePago } from "./components/PasarelaPago";

export function App() {
    

    return (
        <body className="bg-dark vh-100 text-white">
            <UsuarioInternoReg />
            <PasarelaDePago />
        </body>
    ); 
}