import React from "react";
import { Link } from "react-router-dom"
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "./assets/img/logo.png";
import "./css/HeaderUserE.css";
import useAuth from "../auth/useAuth";

export function HeaderUserE() {

    const auth = useAuth();
    const usuario = JSON.parse(auth.user)
    console.log(usuario.id);
  return (
    <>
      {auth.isLogged() && (
        <Navbar id="Header-UserE">
          <Container fluid>
            <Navbar.Brand href="#">
              <img
                src={logo}
                alt=""
                width="170"
                style={{ paddingLeft: "10px" }}
              />
            </Navbar.Brand>
            <Navbar.Collapse>
              <Nav id="Nav-cont">
                <Link to={`vehiculos/${usuario.id}`} href="" id="link">
                  Vehiculos
                </Link>
                <Link to={`historial/${usuario.id}`} id="link">
                  Historial
                </Link>
                <Link to="/puntos" id="link">
                  Mis Puntos
                </Link>
                <Link to="/precio-galon" id="link">
                  Precio Gasolina
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
          <Nav>
            <Nav.Link href="#">
                <Link to="/cuenta-ue">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        focusable="false"
                        className="Icons-Header"
                    >
                        <path d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z" />
                        <path d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z" />
                    </svg>
                </Link>
            </Nav.Link>
            <Nav.Link onClick={auth.logout} style={{ paddingRight: "20px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                focusable="false"
                className="Icons-Header"
              >
                <path d="M0 0h24v24H0z" stroke="none" />
                <path d="M14 8V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h7a2 2 0 002-2v-2" />
                <path d="M7 12h14l-3-3m0 6l3-3" />
              </svg>
            </Nav.Link>
          </Nav>
        </Navbar>
      )}
    </>
  );
}
