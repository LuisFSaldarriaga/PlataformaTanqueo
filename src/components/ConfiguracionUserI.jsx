import React, { useRef } from "react";
import useAuth from "../auth/useAuth";
import "./css/ConfiguracionUserI.css"
import { toast } from "react-toastify"
import "./css/ConfiguracionUserI.css"
import { Container, Row, Col, Nav, Form, Button } from 'react-bootstrap';

export function ConfiguracionUserI() {

    toast.configure();
    const auth = useAuth();

    const nameRef = useRef();
    const lastNameRef = useRef();
    const usernameRef = useRef();
    const emailRef = useRef();

    const update = () => {
        const { id } = JSON.parse(auth.user);
        const name = nameRef.current.value;
        const lastName = lastNameRef.current.value;
        const username = usernameRef.current.value;
        const email = emailRef.current.value;
        
        fetch("http://localhost:8080/actualizar", {
            method: 'PUT',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({ id, name, lastName, username, email })
        })
        .then(data => data.json())
        .then((data) => {
            if (data.msg) {
                toast.success(data.msg, {autoClose: 2600})
                setTimeout(() => {
                    auth.logout();
                    toast.info("Inicia sesion nuevamente", {autoClose: 3000})
                }, 3000);
            } else {
                toast.error(data.err, {autoClose: 3000})
            }
        })
        .catch(() => console.log("Error"));

    }

    const deleteUser = () => {
        if (window.confirm('Estas seguro de eliminar tu cuenta?')) {
            const { id } = JSON.parse(auth.user);

            fetch("http://localhost:8080/eliminar", {
                method: 'DELETE',
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({ id })  
            })
            .then(data => data.json())
            .then((data) => {
                if (data.msg) {
                    auth.logout();
                    toast.info(data.msg, {autoClose: 2600})
                } else {
                    toast.error(data.err, {autoClose: 3000})
                }
            })
        }
    }

    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto" id="Titulo">
                        Configuracion
                    </Col>
                </Row>
                <Row className="justify-content-md-center" style={{marginTop:"70px"}}>
                    <Col md={{ span: 4, offset: 2 }} style={{textAlign:"center"}}>
                        <Container>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" focusable="false" style={{width:"250px"}}>
                                <path d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z"/>
                                <path d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z"/>
                            </svg>
                            <div style={{height:"2px", width:"80%", backgroundColor:"white", margin:"5px 30px 0px"}}></div>
                            <Nav.Link id="Link-ConfUserI" onClick={deleteUser}>Eliminar Cuenta</Nav.Link>
                        </Container>
                    </Col>
                    <Col style={{marginBottom:"80px"}}>
                        <Container id="Contain-LabelsConf">
                            <Form>
                                <input ref={nameRef} className="form-control" id="LabelsConf" type="text" placeholder="Nombres"/>
                                <input ref={lastNameRef} className="form-control" id="LabelsConf" type="text" placeholder="Apellidos"/>
                                <input ref={usernameRef} className="form-control" id="LabelsConf" type="text" placeholder="Nombre Usuario"/>
                                <input ref={emailRef} className="form-control" id="LabelsConf" type="email" placeholder="Correo"/>
                            </Form>
                            <Button id="Boton" as="input" value="Guardar Cambios" style={{width:"auto"}} onClick={update}/>{' '}
                            <div style={{height:"2px", width:"100%", backgroundColor:"white", margin:"5px 0px 0px"}}></div>
                            <Nav.Link href="#" id="Link-ConfUserI">Cambiar Contraseña</Nav.Link>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    ); 
}