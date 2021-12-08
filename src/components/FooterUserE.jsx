import React from "react";
import "./css/FooterUserE.css";
import Redes from './assets/img/redes.png';
import { Nav } from 'react-bootstrap';

export function FooterUserE() {
  return (
    <footer>
      <div class="container-footer">
        <div class="footer">
          <div class="copyright">
            © 2021 Todos los Derechos Reservados
          </div>
          <Nav.Link href="#" style={{padding:"0"}}>
            <img src={Redes} alt="" width="150"/>
          </Nav.Link>
          <nav class="information">
              <a href="/"> Informacion </a>|
              <a href="/"> Politica de Privacidad </a>|
              <a href="/"> Terminos y Condiciones</a>
          </nav>
        </div>
      </div>        
    </footer>
  )
}