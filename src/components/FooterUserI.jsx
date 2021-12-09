import React from "react";
import "./css/FooterUserI.css";
import Redes from './assets/img/redes.png';
import { Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

export function FooterUserI() {
  return (
    <>
      <div class="container-footer">
        <div class="footer">
          <div class="copyright">
            © 2021 Todos los Derechos Reservados
          </div>
          <Nav.Link href="#" style={{padding:"0"}}>
            <img src={Redes} alt="" width="150"/>
          </Nav.Link>
          <nav class="information">
              <Link to="/informacion"> Informacion </Link>|
              <Link to="/informacion"> Politica de Privacidad </Link>|
              <Link to="/informacion"> Terminos y Condiciones</Link>
          </nav>
        </div>
      </div>        
    </>
  )
}