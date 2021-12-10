import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container, Stack, Button, Modal, ModalBody } from "react-bootstrap" ;
import { Terms } from "./Terms.jsx"

export function Singup() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        
        <div className="d-flex justify-content-center align-items-center">
            <form className="d-flex flex-column mx-md-5 my-3 justify-content-center"> 
            
            <Modal size="lg" show={show} onHide={handleClose} >
                <form>
                <Modal.Header className="modalHeader justify-content-center">
                <Modal.Title>Terminos y Condiciones</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalBody textFormatDefault registerModal" style={{
                    maxHeight: 'calc(100vh - 210px)',
                    overflowY: 'auto'
                    }}>

                    <Terms></Terms>

                    
                </Modal.Body>
                <Modal.Footer className="d-flex modalFooter justify-content-between">
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button type="submit" onClick={handleClose}>
                    Continuar
                </Button>
                </Modal.Footer>
                </form>
            </Modal>

            <Row className="d-inline-flex flex-fill my-5 mx-md-5 align-items-center " fluid>
                <Container className="d-flex justify-content-center">
                    <h2>Registrar Usuario</h2>
                </Container>
                
                    <Col className="d-flex mt-5 mb-2 mx-md-5 mx-3 justify-content-center">
                    
                        <Row className="d-flex flex-column flex-xl-row mx-md-5 flex-fill justify-content-center">
                            
                                <Col className="my-1">
                                
                                    <Stack gap={2}>
                                        <input type="text" id="registerName" className="bg-secondary text-light border-0 rounded-3 form-control-lg form-control" placeholder="Nombre/s"/>
                                        <input type="text" id="registerUsername" className="bg-secondary text-light border-0 rounded-3 form-control-lg form-control" placeholder="Nombre de usuario"/>
                                        <select id="registerIDType" className="bg-secondary text-light border-0 rounded-3 form-control-lg form-control" placeholder="Tipo de documento">
                                            <option id="registerName" value="cedula">Cédula de Ciudadanía</option>
                                            <option id="registerName" value="pasaporte">Pasaporte</option>
                                            <option id="registerName" value="cedulaExt">Cédula de Extranjería</option>
                                        </select>
                                        <input type="tel" id="registerPhone" placeholder="Celular" className="bg-secondary text-light border-0 rounded-3 form-control-lg form-control" pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"/>
                                        <div id="registerBirthdayGroup" className="d-flex justify-content-between bg-secondary form-control-lg rounded-3 px-2 py-0">
                                                <h6 className="special-label form-control bg-secondary border-0 mb-0 ">Fecha de nacimiento:</h6>
                                                <input type="date" id="registerBirthday" placeholder="Fecha de nacimiento" className="bg-secondary text-light border-0 rounded-3 form-control"/>
                                        </div>
                                    </Stack>

                                </Col>

                                <Col xs={{ order: 'last' }} className="my-1">

                                    <Stack gap={2}>
                                        <input type="text" id="registerLastName" className="bg-secondary text-light border-0 rounded-3 form-control-lg form-control" placeholder="Apellido/s"/>
                                        <input type="email" id="registerEmail" className="bg-secondary text-light border-0 rounded-3 form-control-lg form-control" placeholder="Correo Electronico"/>
                                        <input type="number" id="registerID" className="bg-secondary text-light border-0 rounded-3 form-control-lg form-control" placeholder="Numero de documento"/>
                                        <input type="password" id="registerPassword" className="bg-secondary text-light border-0 rounded-3 form-control-lg form-control" placeholder="Contraseña"/>
                                        <input type="password" id="registerRePassword" className="bg-secondary text-light border-0 rounded-3 form-control-lg form-control" placeholder="Confirmar Contraseña"/>
                                    </Stack>

                                </Col>

                        </Row>
                    
                    </Col>

                    <Container className="d-flex flex-column justify-content-center ">

                        <Container  className="d-inline-flex justify-content-center pb-3 border-bottom border-light border-3 ">
                                <Button className="btn" onClick={handleShow}>
                                    Registrar
                                </Button>  
                        </Container>       

                        <Container  className="d-inline-flex justify-content-center mb-3">
                                <Link to="/ingresar" className="btn btn-link border-0 text-light" >
                                    Ingresar
                                </Link>
                        </Container>               
                    </Container>
                </Row>



            </form> 
        </div>
    );
};