import React from "react";
import "./css/MisVehiculos.css";
import Carro from './assets/img/Carro.png';
import Tanque from './assets/img/Tanque.png';
import { Container, Row, Col, Form, FormControl, InputGroup, Button, Dropdown, DropdownButton} from 'react-bootstrap';



export function MisVehiculos() {
    return (
        <><Container>
            <Row className="justify-content-md-center">
                <Col md="auto" id="Titulo">
                    Mis Vehiculos
                </Col>
            </Row>
        </Container><Container>
                <Row>
                    <Col xs={6} md={4}>
                        <Container id="Cont-MisVehiculos">
                            <Row>
                                <Container style={{ display: "bottom" }}>
                                <img id="center" src={Carro} alt="" width="170" rounded />
                                <div id="placa">
                                    <div id="Text-Placa">ABC-000</div>
                                </div>
                                </Container>
                            </Row>
                        </Container>
                    </Col>
                    <Col xs={6} md={4}>
                        <Container id="Cont-MisVehiculos">
                            <Row>
                                <Container style={{ display: "bottom" }}>
                                <img id="center" src={Carro} alt="" width="170" rounded />
                                <div id="placa">
                                    <div id="Text-Placa">ABC-000</div>
                                </div>
                                </Container>
                            </Row>
                        </Container>
                    </Col>
                    <Col xs={6} md={4}>
                        <Container id="Cont-MisVehiculos">
                            <Row>
                                <Container style={{ display: "bottom" }}>
                                <img id="center" src={Carro} alt="" width="170" rounded />
                                <div id="placa">
                                    <div id="Text-Placa">ABC-000</div>
                                </div>
                                </Container>
                            </Row>
                        </Container>
                    </Col>
                    
                </Row>
                
            </Container>
            <Container className="d-grid gap-4" id="BotonUE">
            <div id= "BotonUE"className="d-grid gap-4">
                <Button  size="lg">
                    <img id="center" src={Tanque} alt="" width="170" rounded />   
                </Button>
                <Button variant="secondary" size="lg">
                    Editar/Eliminar Vehiculo
                </Button>
            </div>
            </Container>
            </>
           
    );  
}
