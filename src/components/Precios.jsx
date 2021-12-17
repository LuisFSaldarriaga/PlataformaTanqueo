import React from "react";
import "./css/Precios.css"
import { Container, Row, Col, FormControl, Button} from 'react-bootstrap';

export function Precios() {
    
    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto" id="Titulo">
                        Precios
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Container id="Cont-Gasolina">
                            <Row>
                                <Col style={{paddingLeft:"15px"}}>
                                    <Row>
                                        <div id="SubContain1">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" focusable="false" style={{width:"30px", marginLeft:"10px"}}>
                                                <path d="M10.99 10H6.007V9a1 1 0 00-2.002 0v1H2.982a.983.983 0 01-.98-1V3c0-.552.428-1 .98-1h8.009c.552 0 1.022.448 1.022 1v6c0 .552-.47 1-1.022 1zm-.98 7c0 .552-.469 1-1.022 1H4.984a.983.983 0 01-.98-1v-5h6.007v5zM19 6h-1.001c-1.106 0-2.002 1-2.002 2h.01c0 3-.99 6-3.993 6v-2c1 0 2.002-.895 2.002-2V2c0-1.105-.917-2-2.023-2H1.982A1.983 1.983 0 000 2v8c0 1.105 1.001 2 2.002 2v6c0 1.105.875 2 1.981 2H9.99c1.107 0 2.024-.895 2.024-2v-2c4.004 0 5.888-3.07 5.985-7.031A.988.988 0 0118.986 8h.013a1 1 0 100-2z" fill-rule="evenodd"/>
                                            </svg>
                                            <div id="Text2-Style">Corriente</div>
                                        </div>                                
                                        <div id="SubContain2">
                                            <div id="Text1-Style">Precio:</div>
                                            <FormControl id="PrecioInput"/>
                                        </div>
                                    </Row>
                                </Col>
                                <Col>
                                    <Container id="Contain-Fecha">
                                        <Row className="justify-content-md-center">
                                            <div id="Contain-FechaInput">
                                                <input id="FechaInput" className="form-control" type="date" placeholder="Fecha de Nacimiento"  />
                                                <input id="FechaInput"className="form-control" type="date" placeholder="Fecha de Nacimiento"  />
                                            </div>
                                        </Row>
                                        <Row className="justify-content-md-center">
                                            <div id="Contain-FechaInput">
                                                <div id="Text1-Style">Desde</div>
                                                <div id="Text1-Style">Hasta</div>
                                            </div>                                         
                                        </Row>
                                    </Container>
                                    <Col md={{ span: 3, offset: 8}}>
                                        <Button id="Boton" as="input" type="submit" value="Guardar" />{' '}
                                    </Col>                                     
                                </Col>
                            </Row>
                        </Container>

                        <Container id="Cont-Gasolina" style={{marginBottom:"70px"}}>
                            <Row>
                                <Col style={{paddingLeft:"15px"}}>
                                    <Row>
                                        <div id="SubContain1">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" focusable="false" style={{width:"30px", marginLeft:"10px"}}>
                                                <path d="M10.99 10H6.007V9a1 1 0 00-2.002 0v1H2.982a.983.983 0 01-.98-1V3c0-.552.428-1 .98-1h8.009c.552 0 1.022.448 1.022 1v6c0 .552-.47 1-1.022 1zm-.98 7c0 .552-.469 1-1.022 1H4.984a.983.983 0 01-.98-1v-5h6.007v5zM19 6h-1.001c-1.106 0-2.002 1-2.002 2h.01c0 3-.99 6-3.993 6v-2c1 0 2.002-.895 2.002-2V2c0-1.105-.917-2-2.023-2H1.982A1.983 1.983 0 000 2v8c0 1.105 1.001 2 2.002 2v6c0 1.105.875 2 1.981 2H9.99c1.107 0 2.024-.895 2.024-2v-2c4.004 0 5.888-3.07 5.985-7.031A.988.988 0 0118.986 8h.013a1 1 0 100-2z" fill-rule="evenodd"/>
                                            </svg>
                                            <div id="Text2-Style">Extra</div>
                                        </div>                                
                                        <div id="SubContain2">
                                            <div id="Text1-Style">Precio:</div>
                                            <FormControl id="PrecioInput"/>
                                        </div>
                                    </Row>
                                </Col>
                                <Col>
                                    <Container id="Contain-Fecha">
                                        <Row className="justify-content-md-center">
                                            <div id="Contain-FechaInput">
                                                <input id="FechaInput" className="form-control" type="date" placeholder="Fecha de Nacimiento"  />
                                                <input id="FechaInput"className="form-control" type="date" placeholder="Fecha de Nacimiento"  />
                                            </div>
                                        </Row>
                                        <Row className="justify-content-md-center">
                                            <div id="Contain-FechaInput">
                                                <div id="Text1-Style">Desde</div>
                                                <div id="Text1-Style">Hasta</div>
                                            </div>                                         
                                        </Row>
                                    </Container>
                                    <Col md={{ span: 3, offset: 8}}>
                                        <Button id="Boton" as="input" type="submit" value="Guardar" />{' '}
                                    </Col>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    ); 
}