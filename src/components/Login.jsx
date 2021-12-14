import React, { useState } from "react";
import useAuth from "../auth/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Row, Col, Container, Stack, Button, Modal } from "react-bootstrap" ;
import recoverPassword from "./LoginModal_RecoverPassword";
import Logo from "./assets/img/logo.png";
import "./css/basicLoginRegister.css";

export function Login() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();
    const location = useLocation();
    const previusObjectURL = location.state?.from;

    const auth = useAuth();
    const handleLogin = () => {
        auth.login();
        navigate(previusObjectURL || "/precios")
    }
    
    return(
        <div className="d-flex justify-content-center align-items-center"> 

            <Modal show={show} onHide={handleClose} centered>
                <form>
                <Modal.Header className="modalHeader justify-content-center">
                <Modal.Title>Recuperar Contraseña</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalBody">
                    <input type="email" id="recoverEmail" className="bg-secondary text-light border-0 rounded-3 form-control-lg form-control" placeholder="Correo Electronico"/>
                </Modal.Body>
                <Modal.Footer className="d-flex modalFooter justify-content-between">
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button type="submit" onClick={handleClose}>
                    Enviar
                </Button>
                </Modal.Footer>
                </form>
            </Modal>

            <Row className="d-inline-flex flex-column flex-lg-row flex-fill my-5 mx-lg-5 align-items-center" fluid>
                <Col  className="d-flex justify-content-center"> 
                    <Container className="d-block pb-lg-5 align-middle">
                    <h1 className="font-weight-bold display-2 pb-lg-5 text-center">BIENVENIDOS</h1>
                    </Container>
                </Col>
                <Col xs={{ order: 'last' }} className="d-flex my-5 mx-lg-5 justify-content-center"> 
                 <Container>           
                    <div>
                        <Container className="d-inline-flex pt-lg-5 align-items-center">
                            <img 
                                src={Logo} 
                                alt="LoginLogo" 
                                className="mx-auto"
                                width="85%"
                                max-width="100%" />
                        </Container>

                        <Container className="d-flex pt-4 px-lg-5 flex-column">

                            <Container>
                                <form>
                                    <Stack gap={4} className="pb-3 border-bottom border-light border-3">
                                        <input type="text" id="username" className="bg-secondary text-light border-0 rounded-3 form-control-lg form-control" placeholder="Usuario"/> 
                                        <input type="password" id="password" className="bg-secondary text-light border-0 rounded-3 form-control-lg form-control" placeholder="Contraseña"/>
                                        <button id="submitButton" className="btn form-control-lg" onClick={handleLogin}>
                                            Ingresar
                                        </button>
                                    </Stack>
                                </form>
                            </Container>
                            
                            <Container className="d-flex justify-content-between">
                                
                                <Button id="link2" className="btn btn-link border-0 text-light" onClick={handleShow}>
                                    Recuperar Contraseña
                                </Button>   

                                <Link id="link2" to="/registrar" className="btn btn-link border-0 text-light" >
                                    Registrarse
                                </Link>
                            </Container>
                        </Container>
                    </div>
                 </Container>
                </Col>
            </Row>
        </div>
        
    );

};

