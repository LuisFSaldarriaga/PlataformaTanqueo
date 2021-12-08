import React from "react";
import "./css/PrecioPorGalon.css";
import Tanque from './assets/img/Tanque.png';
import { Container, Row, Col, Form, FormControl, InputGroup, Button, Dropdown, DropdownButton} from 'react-bootstrap';

export function PrecioPorGalon() {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="auto" id="Titulo">
                    Precio Por Galon
                </Col>
            </Row>
            <Row style={{marginLeft:"40px"}}>
                <Col>
                    <Container id="Cont-PrecioPorGalon">
                        <Row>
                            <Container style={{display:"center"}}>
                                <Col md="auto" id="Titulo">
                                    GT Extra $9.839
                                </Col>                                    
                            </Container>
                        </Row>
                    </Container>
                </Col>
                <Col>
                    <Container id="Cont-PrecioPorGalon1">
                        <Row>
                            <Container style={{display:"center"}}>
                                <Col md="auto" id="Titulo">
                                    Corriente $8.672
                                </Col>                                  
                            </Container>
                        </Row>
                    </Container>
                </Col>
            </Row>
                
            
        </Container>    
    );  
}
