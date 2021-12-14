import React from "react";
import Card from 'react-bootstrap/Card'
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
                    <Row xs={1} md={2} className="g-4">
                        {Array.from({ length: 4 }).map((_, idx) => (
                            <Col>
                            <Card>
                                <Card.Img id="center" src={Carro} alt="" width="170" rounded />
                                <Card.Body>
                                    <div id="placa">
                                        <div id="Text-Placa">ABC-000</div>
                                    </div>
                                </Card.Body>
                                
                            </Card>
                            <Button id= "BotonUE1" variant="secondary" size="lg">
                                        Editar/Eliminar Vehiculo
                            </Button>
                            </Col>
                            
                        ))}
                    </Row>
                    
                </Row>
                
            </Container>
            <Container className="d-grid gap-4" id="BotonUE">
            <div id= "BotonUE"className="d-grid gap-4">
                <Button  size="lg">
                    <img id="center" src={Tanque} alt="" width="170" rounded />   
                </Button>
                
            </div>
            </Container>
            </>
           
    );  
}
