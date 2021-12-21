import React, { useRef, useEffect, useState } from "react";
import { PreciosView } from "./PreciosView.jsx";
import { SaldoView } from "./SaldoView.jsx";
import "./css/Tanqueo.css";
import { Container, Row, Col, Form, FormControl, InputGroup, Button, Dropdown, DropdownButton} from 'react-bootstrap';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

export function Tanqueo() {
    toast.configure();
    //Hook para capturar documento del usuario
    const documentoRef = useRef();

    //Hook para manejar los vehículos del usuario
    const [listado, setListado] = useState([]);

    //Hooks para cargar info del usuario encontrado
    const [usuario, setUsuario] = useState([]);

    useEffect(() => {
            fetch(`http://localhost:8080/vehiculos/mis_vehiculos/${usuario._id}`, {
            method: "GET"
        }).then(res => res.json())
            .then(res => {
                if (res.status === 'ok') {
                    setListado(res.vehiculos[1]);
                } else
                    alert(res.msg);
            }); 
    }, [usuario]);

    //Función para buscar la información del usuario y cargar, se activa onClick en botón buscar
    async function buscarUsuario() {
        //Capturar documento del usuario
        const documento = documentoRef.current.value;
        //Consultar si existe ususario con el documento capturado
        await fetch(`http://localhost:8080/tanqueo/buscar/${documento}`, {
            method: "GET"
        }).then(res => res.json())
        .then(res => {
            if (res.status === "ok") {
                toast.success(res.msg)
                setUsuario(res.data);

            } else {
                toast.error(res.msg) 
                window.setTimeout( () => window.location.href="/tanqueo", 5000)
            }
        })
    };
    
    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto" id="Titulo">
                        Tanqueo
                    </Col>
                </Row>
                <Row style={{marginLeft:"40px"}}>
                    <Col>
                        <InputGroup className="mb-3" id="Input-Search">
                            <FormControl
                            ref={documentoRef}
                            id="Input-SearchF"
                            placeholder="Numero de Documento"
                            aria-label="Numero de Documento"
                            />
                            <Button onClick={buscarUsuario} id="Boton2" as="input" type="button" value="Buscar" />{' '}
                        </InputGroup>
                        <Row>
                            <Container id="Cont-Tanqueo">
                                <Row>
                                    {
                                        listado.map(p => 
                                        <Container style={{display:"flex"}}>
                                        <div style={{textAlign:"center"}}>
                                            <div id="Text2-Style" style={{marginTop:"5px"}}>Placa</div>
                                            <div id="placa">
                                                <div id="Text-Placa">{p.placa}</div>
                                            </div>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" focusable="false" style={{width:"65px", margin:"15px 0px 0px 100px"}}>
                                            <path d="M494.26 276.22c-3.6-40.41-9.53-48.28-11.77-51.24-5.15-6.84-13.39-11.31-22.11-16a3.6 3.6 0 01-.91-5.68 15.93 15.93 0 004.53-12.53A16.27 16.27 0 00447.65 176h-15.6a17 17 0 00-2 .13 8.5 8.5 0 00-1.41-.47c-9.24-19.53-21.89-46.27-48.11-59.32C341.64 97 270 96 256 96s-85.64 1-124.48 20.31c-26.22 13.05-38.87 39.79-48.11 59.32l-.08.16a6.52 6.52 0 00-1.35.34 17 17 0 00-2-.13H64.35A16.27 16.27 0 0048 190.77a15.93 15.93 0 004.59 12.47 3.6 3.6 0 01-.91 5.68c-8.72 4.72-17 9.19-22.11 16-2.24 3-8.16 10.83-11.77 51.24-2 22.74-2.3 46.28-.73 61.44 3.29 31.5 9.46 50.54 9.72 51.33a16 16 0 0013.2 10.87v.2a16 16 0 0016 16h56a16 16 0 0016-16c8.61 0 14.6-1.54 20.95-3.18a158.83 158.83 0 0128-4.91C207.45 389 237.79 388 256 388c17.84 0 49.52 1 80.08 3.91a159.16 159.16 0 0128.11 4.93c6.08 1.56 11.85 3 19.84 3.15a16 16 0 0016 16h56a16 16 0 0016-16v-.12A16 16 0 00485.27 389c.26-.79 6.43-19.83 9.72-51.33 1.57-15.17 1.29-38.67-.73-61.45zm-381.93-86.91c8-17 17.15-36.24 33.44-44.35 23.54-11.72 72.33-17 110.23-17s86.69 5.24 110.23 17c16.29 8.11 25.4 27.36 33.44 44.35l1 2.17a8 8 0 01-7.44 11.42C360 202 290 199.12 256 199.12s-104 2.95-137.28 3.85a8 8 0 01-7.44-11.42c.35-.74.72-1.49 1.05-2.24zm11.93 79.63A427.17 427.17 0 0172.42 272c-10.6 0-21.53-3-23.56-12.44-1.39-6.35-1.24-9.92-.49-13.51C49 243 50 240.78 55 240c13-2 20.27.51 41.55 6.78 14.11 4.15 24.29 9.68 30.09 14.06 2.91 2.16 1.36 7.8-2.38 8.1zm221.38 82c-13.16 1.5-39.48.95-89.34.95s-76.17.55-89.33-.95c-13.58-1.51-30.89-14.35-19.07-25.79 7.87-7.54 26.23-13.18 50.68-16.35s34.8-4.8 57.62-4.8 32.12 1 57.62 4.81 44.77 9.52 50.68 16.35c10.78 12.24-5.29 24.19-18.86 25.84zm117.5-91.39c-2 9.48-13 12.44-23.56 12.44a455.91 455.91 0 01-52.84-3.06c-3.06-.29-4.48-5.66-1.38-8.1 5.71-4.49 16-9.91 30.09-14.06 21.28-6.27 33.55-8.78 44.09-6.69 2.57.51 3.93 3.27 4.09 5a40.64 40.64 0 01-.49 14.48z"/>
                                        </svg>
                                        </Container>)
                                    }                                   
                                </Row>
                                <Row>
                                    <Col>
                                        <div id="Contain-Cantidad-Tanqueo">
                                            <div id="Text1-Style">Cantidad:</div>
                                            <FormControl id="Cant-TanqueoInput"/>
                                        </div>
                                        <DropdownButton
                                            title="Tipo"
                                            id="Dropdown-Tipo">
                                            <Dropdown.Item id="Dropdown-Tipos" href="#">Corriente</Dropdown.Item>
                                            <Dropdown.Item id="Dropdown-Tipos" href="#">Extra</Dropdown.Item>
                                        </DropdownButton>
                                    </Col>
                                    <Col>
                                        <label id="check-puntos" htmlFor="">
                                            <Form.Check aria-label="option 1" id="check-puntosF"/>                                   
                                            <div style={{marginLeft:"5px"}}>Usar puntos</div>
                                        </label>
                                        <Button id="Boton3" as="input" type="submit" value="Enviar" />{' '}
                                    </Col>
                                </Row>
                            </Container>
                            <Container id="Cont-Tanqueo">
                                <Row>
                                    <Container style={{display:"flex"}}>
                                        <div style={{textAlign:"center"}}>
                                            <div id="Text2-Style" style={{marginTop:"5px"}}>Placa</div>
                                            <div id="placa">
                                                <div id="Text-Placa">ABC-000</div>
                                            </div>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" focusable="false" style={{width:"65px", margin:"15px 0px 0px 100px"}}>
                                            <path d="M494.26 276.22c-3.6-40.41-9.53-48.28-11.77-51.24-5.15-6.84-13.39-11.31-22.11-16a3.6 3.6 0 01-.91-5.68 15.93 15.93 0 004.53-12.53A16.27 16.27 0 00447.65 176h-15.6a17 17 0 00-2 .13 8.5 8.5 0 00-1.41-.47c-9.24-19.53-21.89-46.27-48.11-59.32C341.64 97 270 96 256 96s-85.64 1-124.48 20.31c-26.22 13.05-38.87 39.79-48.11 59.32l-.08.16a6.52 6.52 0 00-1.35.34 17 17 0 00-2-.13H64.35A16.27 16.27 0 0048 190.77a15.93 15.93 0 004.59 12.47 3.6 3.6 0 01-.91 5.68c-8.72 4.72-17 9.19-22.11 16-2.24 3-8.16 10.83-11.77 51.24-2 22.74-2.3 46.28-.73 61.44 3.29 31.5 9.46 50.54 9.72 51.33a16 16 0 0013.2 10.87v.2a16 16 0 0016 16h56a16 16 0 0016-16c8.61 0 14.6-1.54 20.95-3.18a158.83 158.83 0 0128-4.91C207.45 389 237.79 388 256 388c17.84 0 49.52 1 80.08 3.91a159.16 159.16 0 0128.11 4.93c6.08 1.56 11.85 3 19.84 3.15a16 16 0 0016 16h56a16 16 0 0016-16v-.12A16 16 0 00485.27 389c.26-.79 6.43-19.83 9.72-51.33 1.57-15.17 1.29-38.67-.73-61.45zm-381.93-86.91c8-17 17.15-36.24 33.44-44.35 23.54-11.72 72.33-17 110.23-17s86.69 5.24 110.23 17c16.29 8.11 25.4 27.36 33.44 44.35l1 2.17a8 8 0 01-7.44 11.42C360 202 290 199.12 256 199.12s-104 2.95-137.28 3.85a8 8 0 01-7.44-11.42c.35-.74.72-1.49 1.05-2.24zm11.93 79.63A427.17 427.17 0 0172.42 272c-10.6 0-21.53-3-23.56-12.44-1.39-6.35-1.24-9.92-.49-13.51C49 243 50 240.78 55 240c13-2 20.27.51 41.55 6.78 14.11 4.15 24.29 9.68 30.09 14.06 2.91 2.16 1.36 7.8-2.38 8.1zm221.38 82c-13.16 1.5-39.48.95-89.34.95s-76.17.55-89.33-.95c-13.58-1.51-30.89-14.35-19.07-25.79 7.87-7.54 26.23-13.18 50.68-16.35s34.8-4.8 57.62-4.8 32.12 1 57.62 4.81 44.77 9.52 50.68 16.35c10.78 12.24-5.29 24.19-18.86 25.84zm117.5-91.39c-2 9.48-13 12.44-23.56 12.44a455.91 455.91 0 01-52.84-3.06c-3.06-.29-4.48-5.66-1.38-8.1 5.71-4.49 16-9.91 30.09-14.06 21.28-6.27 33.55-8.78 44.09-6.69 2.57.51 3.93 3.27 4.09 5a40.64 40.64 0 01-.49 14.48z"/>
                                        </svg>
                                    </Container>
                                </Row>
                                <Row>
                                    <Col>
                                        <div id="Contain-Cantidad-Tanqueo">
                                            <div id="Text1-Style">Cantidad:</div>
                                            <FormControl id="Cant-TanqueoInput"/>
                                        </div>
                                        <DropdownButton
                                            title="Tipo"
                                            id="Dropdown-Tipo">
                                            <Dropdown.Item id="Dropdown-Tipos" href="#">Corriente</Dropdown.Item>
                                            <Dropdown.Item id="Dropdown-Tipos" href="#">Extra</Dropdown.Item>
                                        </DropdownButton>
                                    </Col>
                                    <Col>
                                        <label id="check-puntos" htmlFor="">
                                            <Form.Check aria-label="option 1" id="check-puntosF"/>                                   
                                            <div style={{marginLeft:"5px"}}>Usar puntos</div>
                                        </label>
                                        <Button id="Boton3" as="input" type="submit" value="Enviar" />{' '}
                                    </Col>
                                </Row>
                            </Container>
                        </Row>
                        <Row style={{marginBottom:"80px"}} >
                            <Container id="Cont-Tanqueo">
                                <Row>
                                    <Container style={{display:"flex"}}>
                                        <div style={{textAlign:"center"}}>
                                            <div id="Text2-Style" style={{marginTop:"5px"}}>Placa</div>
                                            <div id="placa">
                                                <div id="Text-Placa">ABC-000</div>
                                            </div>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" focusable="false" style={{width:"65px", margin:"15px 0px 0px 100px"}}>
                                            <path d="M494.26 276.22c-3.6-40.41-9.53-48.28-11.77-51.24-5.15-6.84-13.39-11.31-22.11-16a3.6 3.6 0 01-.91-5.68 15.93 15.93 0 004.53-12.53A16.27 16.27 0 00447.65 176h-15.6a17 17 0 00-2 .13 8.5 8.5 0 00-1.41-.47c-9.24-19.53-21.89-46.27-48.11-59.32C341.64 97 270 96 256 96s-85.64 1-124.48 20.31c-26.22 13.05-38.87 39.79-48.11 59.32l-.08.16a6.52 6.52 0 00-1.35.34 17 17 0 00-2-.13H64.35A16.27 16.27 0 0048 190.77a15.93 15.93 0 004.59 12.47 3.6 3.6 0 01-.91 5.68c-8.72 4.72-17 9.19-22.11 16-2.24 3-8.16 10.83-11.77 51.24-2 22.74-2.3 46.28-.73 61.44 3.29 31.5 9.46 50.54 9.72 51.33a16 16 0 0013.2 10.87v.2a16 16 0 0016 16h56a16 16 0 0016-16c8.61 0 14.6-1.54 20.95-3.18a158.83 158.83 0 0128-4.91C207.45 389 237.79 388 256 388c17.84 0 49.52 1 80.08 3.91a159.16 159.16 0 0128.11 4.93c6.08 1.56 11.85 3 19.84 3.15a16 16 0 0016 16h56a16 16 0 0016-16v-.12A16 16 0 00485.27 389c.26-.79 6.43-19.83 9.72-51.33 1.57-15.17 1.29-38.67-.73-61.45zm-381.93-86.91c8-17 17.15-36.24 33.44-44.35 23.54-11.72 72.33-17 110.23-17s86.69 5.24 110.23 17c16.29 8.11 25.4 27.36 33.44 44.35l1 2.17a8 8 0 01-7.44 11.42C360 202 290 199.12 256 199.12s-104 2.95-137.28 3.85a8 8 0 01-7.44-11.42c.35-.74.72-1.49 1.05-2.24zm11.93 79.63A427.17 427.17 0 0172.42 272c-10.6 0-21.53-3-23.56-12.44-1.39-6.35-1.24-9.92-.49-13.51C49 243 50 240.78 55 240c13-2 20.27.51 41.55 6.78 14.11 4.15 24.29 9.68 30.09 14.06 2.91 2.16 1.36 7.8-2.38 8.1zm221.38 82c-13.16 1.5-39.48.95-89.34.95s-76.17.55-89.33-.95c-13.58-1.51-30.89-14.35-19.07-25.79 7.87-7.54 26.23-13.18 50.68-16.35s34.8-4.8 57.62-4.8 32.12 1 57.62 4.81 44.77 9.52 50.68 16.35c10.78 12.24-5.29 24.19-18.86 25.84zm117.5-91.39c-2 9.48-13 12.44-23.56 12.44a455.91 455.91 0 01-52.84-3.06c-3.06-.29-4.48-5.66-1.38-8.1 5.71-4.49 16-9.91 30.09-14.06 21.28-6.27 33.55-8.78 44.09-6.69 2.57.51 3.93 3.27 4.09 5a40.64 40.64 0 01-.49 14.48z"/>
                                        </svg>
                                    </Container>
                                </Row>
                                <Row>
                                    <Col>
                                        <div id="Contain-Cantidad-Tanqueo">
                                            <div id="Text1-Style">Cantidad:</div>
                                            <FormControl id="Cant-TanqueoInput"/>
                                        </div>
                                        <DropdownButton
                                            title="Tipo"
                                            id="Dropdown-Tipo">
                                            <Dropdown.Item id="Dropdown-Tipos" href="#">Corriente</Dropdown.Item>
                                            <Dropdown.Item id="Dropdown-Tipos" href="#">Extra</Dropdown.Item>
                                        </DropdownButton>
                                    </Col>
                                    <Col>
                                        <label id="check-puntos" htmlFor="">
                                            <Form.Check aria-label="option 1" id="check-puntosF"/>                                   
                                            <div style={{marginLeft:"5px"}}>Usar puntos</div>
                                        </label>
                                        <Button id="Boton3" as="input" type="submit" value="Enviar" />{' '}
                                    </Col>
                                </Row>
                            </Container>
                            <Container id="Cont-Tanqueo">
                                <Row>
                                    <Container style={{display:"flex"}}>
                                        <div style={{textAlign:"center"}}>
                                            <div id="Text2-Style" style={{marginTop:"5px"}}>Placa</div>
                                            <div id="placa">
                                                <div id="Text-Placa">ABC-000</div>
                                            </div>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" focusable="false" style={{width:"65px", margin:"15px 0px 0px 100px"}}>
                                            <path d="M494.26 276.22c-3.6-40.41-9.53-48.28-11.77-51.24-5.15-6.84-13.39-11.31-22.11-16a3.6 3.6 0 01-.91-5.68 15.93 15.93 0 004.53-12.53A16.27 16.27 0 00447.65 176h-15.6a17 17 0 00-2 .13 8.5 8.5 0 00-1.41-.47c-9.24-19.53-21.89-46.27-48.11-59.32C341.64 97 270 96 256 96s-85.64 1-124.48 20.31c-26.22 13.05-38.87 39.79-48.11 59.32l-.08.16a6.52 6.52 0 00-1.35.34 17 17 0 00-2-.13H64.35A16.27 16.27 0 0048 190.77a15.93 15.93 0 004.59 12.47 3.6 3.6 0 01-.91 5.68c-8.72 4.72-17 9.19-22.11 16-2.24 3-8.16 10.83-11.77 51.24-2 22.74-2.3 46.28-.73 61.44 3.29 31.5 9.46 50.54 9.72 51.33a16 16 0 0013.2 10.87v.2a16 16 0 0016 16h56a16 16 0 0016-16c8.61 0 14.6-1.54 20.95-3.18a158.83 158.83 0 0128-4.91C207.45 389 237.79 388 256 388c17.84 0 49.52 1 80.08 3.91a159.16 159.16 0 0128.11 4.93c6.08 1.56 11.85 3 19.84 3.15a16 16 0 0016 16h56a16 16 0 0016-16v-.12A16 16 0 00485.27 389c.26-.79 6.43-19.83 9.72-51.33 1.57-15.17 1.29-38.67-.73-61.45zm-381.93-86.91c8-17 17.15-36.24 33.44-44.35 23.54-11.72 72.33-17 110.23-17s86.69 5.24 110.23 17c16.29 8.11 25.4 27.36 33.44 44.35l1 2.17a8 8 0 01-7.44 11.42C360 202 290 199.12 256 199.12s-104 2.95-137.28 3.85a8 8 0 01-7.44-11.42c.35-.74.72-1.49 1.05-2.24zm11.93 79.63A427.17 427.17 0 0172.42 272c-10.6 0-21.53-3-23.56-12.44-1.39-6.35-1.24-9.92-.49-13.51C49 243 50 240.78 55 240c13-2 20.27.51 41.55 6.78 14.11 4.15 24.29 9.68 30.09 14.06 2.91 2.16 1.36 7.8-2.38 8.1zm221.38 82c-13.16 1.5-39.48.95-89.34.95s-76.17.55-89.33-.95c-13.58-1.51-30.89-14.35-19.07-25.79 7.87-7.54 26.23-13.18 50.68-16.35s34.8-4.8 57.62-4.8 32.12 1 57.62 4.81 44.77 9.52 50.68 16.35c10.78 12.24-5.29 24.19-18.86 25.84zm117.5-91.39c-2 9.48-13 12.44-23.56 12.44a455.91 455.91 0 01-52.84-3.06c-3.06-.29-4.48-5.66-1.38-8.1 5.71-4.49 16-9.91 30.09-14.06 21.28-6.27 33.55-8.78 44.09-6.69 2.57.51 3.93 3.27 4.09 5a40.64 40.64 0 01-.49 14.48z"/>
                                        </svg>
                                    </Container>
                                </Row>
                                <Row>
                                    <Col>
                                        <div id="Contain-Cantidad-Tanqueo">
                                            <div id="Text1-Style">Cantidad:</div>
                                            <FormControl id="Cant-TanqueoInput"/>
                                        </div>
                                        <DropdownButton
                                            title="Tipo"
                                            id="Dropdown-Tipo">
                                            <Dropdown.Item id="Dropdown-Tipos" href="#">Corriente</Dropdown.Item>
                                            <Dropdown.Item id="Dropdown-Tipos" href="#">Extra</Dropdown.Item>
                                        </DropdownButton>
                                    </Col>
                                    <Col>
                                        <label id="check-puntos" htmlFor="">
                                            <Form.Check aria-label="option 1" id="check-puntosF"/>                                   
                                            <div style={{marginLeft:"5px"}}>Usar puntos</div>
                                        </label>
                                        <Button id="Boton3" as="input" type="submit" value="Enviar" />{' '}
                                    </Col>
                                </Row>
                            </Container>
                        </Row>
                    </Col>
                    <Col md="auto" >
                        <PreciosView></PreciosView>
                        <SaldoView></SaldoView>
                    </Col>
                </Row>
            </Container>
        </>   
    );  
}