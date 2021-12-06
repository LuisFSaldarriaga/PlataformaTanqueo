import React from "react";
import "./css/GestionUsuarios.css"
import { Container, Row, Col, FormControl, InputGroup, Button } from 'react-bootstrap';

export function GestionUsuarios() {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="auto" id="Titulo">
                    Gestion de Usuarios
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md="auto" style={{marginBottom:"300px"}}>
                    <div id="Contain-Estado-Usuarios">
                        <div id="Text2-Style">Estado:</div>
                        <FormControl id="Estado-Input" readOnly value="Habilitado"/>
                    </div>
                    <InputGroup className="mb-3" id="Input-Search">
                        <FormControl
                        id="Input-SearchF"
                        placeholder="Numero de Documento"
                        aria-label="Numero de Documento"
                        aria-describedby="basic-addon2"
                        />
                        <Button id="Boton2" as="input" type="button" value="Buscar" />{' '}
                    </InputGroup>
                    <Container style={{marginLeft:"30px"}}>
                        <Button id="Boton" as="input" type="submit" value="Habilitar" />{' '}
                        <Button id="Boton" as="input" type="submit" value="Deshabilitar" />{' '}
                    </Container>
                </Col>
            </Row>
        </Container>
    ); 
}