import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import {Navbar, Nav, Stack, Container} from "react-bootstrap";

export function PasarelaDePago() {
    return (
        <>
        <Navbar bg="secondary" className="py-1 mb-2">
            <Container>
              <Navbar.Brand href="#home">
                <img
                  src="/logo.svg"
                  width="150"
                  className="d-inline-block align-top"
                  alt="Logo"
                />
              </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link className="btn btn-warning px-4 rounded-pill ms-2 text-white" href="#">Regresar</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#"><FaFacebook className="text-white" /></Nav.Link>
                <Nav.Link href="#"><FaInstagram className="text-white" /></Nav.Link>
                <Nav.Link href="#"><FaTwitter className="text-white" /></Nav.Link>
                <Nav.Link href="#"><FaYoutube className="text-white" /></Nav.Link>
              </Nav>
            </Container>
        </Navbar>

        <h2 className="text-center mb-5">Selecciona Medio de Pago</h2>
        <Stack gap={3} className="col-md-5 mx-auto">
            <Container className="bg-secondary text-white py-4 px-3 rounded">
                <div className="input-group">
                    <div className="d-flex align-items-center">
                        <input className="form-check-input mt-0" type="radio" name="MedioPago"/>
                    </div>
                    <h5 className="m-0 ms-2">Tarjeta de credito</h5>
                </div>
                <div className="mx-4">
                    <form action="#">
                        <div className="mt-3">
                            <input className="form-control w-100 rounded" type="number" placeholder="Numero de tarjeta" />
                        </div>
                        <div className="mt-3">
                            <input className="form-control w-100 rounded" type="number" placeholder="Nombre Titular" />
                        </div>
                        <div class="input-group mt-3">
                            <input type="date" placeholder="Fecha de vencimiento(MM/AA)" className="form-control me-2 rounded" />
                            <input type="number" placeholder="Codigo de seguridad" className="form-control rounded" />
                        </div>
                    </form>
                </div>
            </Container>
            <Container className="bg-secondary text-white py-4 px-3 rounded">
                <div className="input-group">
                    <div className="d-flex align-items-center">
                        <input className="form-check-input mt-0" type="radio" name="MedioPago"/>
                    </div>
                    <h5 className="m-0 ms-2">Tarjeta debito</h5>
                </div>
            </Container>
            <Container className="bg-secondary text-white py-4 px-3 rounded">
                <div className="input-group">
                    <div className="d-flex align-items-center">
                        <input className="form-check-input mt-0" type="radio" name="MedioPago"/>
                    </div>
                    <h5 className="m-0 ms-2">Medio de pago electronico</h5>
                </div>
            </Container>
        </Stack>
        </>
    )
}