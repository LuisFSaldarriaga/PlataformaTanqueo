import React from "react";
import "./css/FooterUserI.css";
import { Nav , Navbar, Container, Stack } from 'react-bootstrap';
import { Link } from "react-router-dom";
import FacebookLogo from "./assets/img/F.png"
import InstagramLogo from "./assets/img/I.png"
import YoutubeLogo from "./assets/img/Y.png"
import WhatsappLogo from "./assets/img/W.png"

export function FooterUserI() {
  return (
    <>
     <Navbar collapseOnSelect expand="lg" fixed="bottom" className="container-footer">
        <Container class="footer">
          <div class="text-nowrap copyright">
            © 2021 Todos los Derechos Reservados
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">

          <Stack direction="horizontal" className="RedesContainer">

            <Nav.Link href="#" className="ImageLink">
              <img src={ FacebookLogo } alt="Facebook" className="ImageItem my-auto"/>
            </Nav.Link>

            <Nav.Link href="#" className="ImageLink">
            <img src={ InstagramLogo } alt="Instagram"  className="ImageItem my-auto"/>
            </Nav.Link>

            <Nav.Link href="#" className="ImageLink">
            <img src={ YoutubeLogo } alt="Youtube"  className="ImageItem my-auto"/>
            </Nav.Link>

            <Nav.Link href="#" className="ImageLink">
            <img src={ WhatsappLogo } alt="Whatsapp"  className="ImageItem my-auto"/>
            </Nav.Link>
          </Stack>
          <nav class="d-flex text-nowrap information flex-nowrap">
              <Link to="/informacion"> Informacion  </Link>|
              <Link to="/informacion"> Politica de Privacidad  </Link>|
              <Link to="/informacion"> Terminos y Condiciones  </Link>
          </nav>
          </Navbar.Collapse>
        </Container>
     </Navbar>        
    </>
  )
}