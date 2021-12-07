import React, { useState } from 'react';
import {Button, Col, Container, FloatingLabel, Form, Row} from 'react-bootstrap';
import './css/UsuarioInternoReg.css'

//Expresión regular para contraseña mínimo 8 caracteres, por lo menos una letra y un número
const regexValidation = new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{8,})");

//Validación de los datos ingresados con la expresión regular
const validation = (input) => {
    const matchRegex = regexValidation.test(input);
    if (input.lenght < 8) return 'Se nececitas mínimo 8 caracteres';
    else if (!matchRegex) return 'Se necesita por lo menos un número y una letra, sin espacios';
    else return '';
};

//Validación para confirmar la contraseña
const confirmValidation = (a, b) => {
    if (a !== b) return 'Las contraseñas deben ser iguales'
    else return '';
}

const eye = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 7.449-11.985 7.449c-7.18 0-12.015-7.449-12.015-7.449s4.446-6.551 12.015-6.551c7.694 0 11.985 6.551 11.985 6.551zm-7 .449c0-2.761-2.238-5-5-5-2.761 0-5 2.239-5 5 0 2.762 2.239 5 5 5 2.762 0 5-2.238 5-5z" />
            </svg>;

export function UsuarioInternoReg() {
    
    const [password, setPassword] = useState('');
    const [c_password, setC_password] = useState('');
    const [error, setError] = useState('');
    const [error2, setError2] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    //Función para manejar ver/ocultar contraseña
    const togglePassword = () => {
        setShowPassword(!showPassword);
    }

    //Función para verificar que la contraseña cumpla con la Regex 
    const inputPassword = (event) => {
        setPassword(event.target.value);

        const error = validation(event.target.value);
        setError(error);
    };

    //Función para verificar que las contraseñas sean iguales
    const inputC_Password = (event) => {
        setC_password(event.target.value);

        const error2 = confirmValidation(event.target.value, document.getElementById("password").value);
        setError2(error2)
    }
    //Función para no enviar el formulario si hay algún error
    const submitHandler = (event) => {
        if (error || error2) return event.preventDefault();
    };

    return (
            <Container fluid>
                <div className="justify-content-center">  
                    <Form onSubmit={submitHandler}>
                        <Row>
                            <label className="fs-1 text-center">Registrar Usuario Interno</label>
                        </Row>
                        <Row className="pt-5">
                            <Col md={{ span:3,offset:3 }}>
                                <FloatingLabel style={{ color: "black" }} label="Nombres" >
                                    <Form.Control type="text" placeholder=" " />
                                </FloatingLabel>
                            </Col>
                            <Col md={{ span:3}}>
                                <FloatingLabel style={{ color: "black" }} label="Apellidos">
                                    <Form.Control type="text" placeholder=" "/> 
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col md={{ span:3,offset:3 }}>
                                <FloatingLabel style={{ color: "black" }} label="Nombre de usuario" >
                                    <Form.Control type="text" placeholder=" "/>
                                </FloatingLabel>
                            </Col>
                            <Col md={{ span:3}}>
                                <FloatingLabel style={{ color: "black" }} label="Correo Electrónico" > 
                                    <Form.Control type="email" placeholder=" "/>
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col md={{ span:3,offset:3 }}>
                               <FloatingLabel style={{ color: "black" }} label="Tipo de documento" >
                                <Form.Select placeholder=" ">
                                    <option value="CC">CC</option>
                                    <option value="CE">CE</option>
                                    <option value="PA">PA</option>
                                </Form.Select>
                                </FloatingLabel>
                            </Col>
                            <Col md={{ span:3}}>
                                <FloatingLabel style={{ color: "black" }} label="Número de documento" > 
                                    <Form.Control type="number" placeholder=" "/>
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <br />
                        <div className="row">
                            <Col md={{ span:3,offset:3 }}>
                                <FloatingLabel style={{ color: "black" }} label="Número de celular" > 
                                    <Form.Control type="number" placeholder=" "/>
                                </FloatingLabel>
                            </Col>
                            <Col md={{ span:3}}>
                                <FloatingLabel style={{ color: "black" }} label="Contraseña" >
                                    <Form.Control id="password" type={showPassword ? "text" : "password"} placeholder=" " value={password} onChange={inputPassword}/>
                                </FloatingLabel>
                                <i class="password_icon" onClick={togglePassword}> {eye} </i>
                                { Boolean(error) && <p className="fs-5">{error}</p> }
                            </Col>
                        </div>
                        <br />
                        <div className="row">
                            <Col md={{ span:3,offset:3 }}>
                                <FloatingLabel style={{ color: "black" }} label="Fecha de nacimiento" >
                                    <Form.Control type="date" placeholder=" "/>
                                </FloatingLabel>
                            </Col>
                            <Col md={{ span:3}}>
                                <FloatingLabel style={{ color: "black" }} label="Confirmar contraseña" >
                                    <Form.Control type="password" placeholder=" " value={c_password} onChange={inputC_Password} />
                                </FloatingLabel>
                                { Boolean(error2) && <p className="fs-5">{error2}</p> }
                            </Col>
                        </div>
                        <div className="d-grid gap-2 col-2 mx-auto">
                            <Button variant="warning" type="submit" className="m-4">Registrar</Button>
                        </div>
                    </Form>
                </div>    
            </Container>
    );
};