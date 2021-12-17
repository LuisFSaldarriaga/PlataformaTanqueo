import React from "react";
import "./css/Inventario.css"
import { Container, Row, Col, FormControl} from 'react-bootstrap';

export function SaldoView() {
    return(
        <Container id="Cont-PreciosView">
                        <Row className="justify-content-md-center" id="Contain-TipoyPrecio">
                            <Col md="auto" id="Titulo-PreciosView">
                                Saldo Disponible
                            </Col>
                            <div style={{height:"2px", width:"100%", backgroundColor:"white", margin:"5px 0px"}}></div>
                            <div id="SubContain-PreciosView">
                                <div id="Text2-Style">Saldo</div>
                            </div>
                            <FormControl id="PreciosView-Input" value="000000" readOnly/>
                        </Row>                            
                        <Row id="Contain-TipoyPrecio">
                            <div id="SubContain-PreciosView">
                                <div id="Text2-Style">Puntos</div>
                            </div>
                            <FormControl id="PreciosView-Input" value="000000" readOnly/>
                        </Row>                                                                
                    </Container>
    );
}