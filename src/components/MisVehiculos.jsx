import React from "react";
import "./css/MisVehiculos.css";
import Tanque from './assets/img/Tanque.png';
import { Container, Row, Col, Form, FormControl, InputGroup, Button, Dropdown, DropdownButton} from 'react-bootstrap';

export function MisVehiculos() {
    return (
        <Container >
            <Row className="justify-content-md-center">
                <Col md="auto" id="Titulo">
                    Mis Vehiculos
                </Col>
            </Row>
            <Row style={{marginLeft:"40px"}}>
                <Col>
                    <Row>
                        <Container id="Cont-MisVehiculos">
                            <Row>
                                <Container style={{display:"bottom"}}>
                                    
                                    <div src={Tanque} alt="" width="170" style={{textAlign:"center"}}>
                                        
                                        <div id="placa">
                                            <div id="Text-Placa">ABC-000</div>
                                        </div>
                                    </div>
                                    
                                </Container>
                            </Row>
                        </Container>
                        <Container id="Cont-MisVehiculos1">
                            <Row>
                                <Container style={{display:"top"}}>
                                    
                                    <div style={{textAlign:"center"}}>
                                        <div id="Text2-Style" style={{center:"100px"}}></div>
                                        <div id="placa">
                                            <div id="Text-Placa">ABC-000</div>
                                        </div>
                                    </div>
                                    
                                </Container>
                            </Row>
                        </Container>
                        <Button
                            title="Button"
                            id="Boton" size= "lg" >
                                <img src={Tanque} alt="" width="170" style={{paddingLeft:"10px"}}/>
                        </Button>
                        
                    </Row>
                <Row>
                <Col>
                    
                </Col>
                </Row>
                            
                </Col>
                <Col md="auto" style={{marginBottom:"40px"}} >
                   
                </Col>
            </Row>
            <Button
                title="Button"
                id="ButtonE1">
                <Button>Editar/Eliminar Vehiculo</Button>{' '}
            </Button>
        </Container>    
    );  
}
