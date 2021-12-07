import React, { useState } from 'react';
import {Button, Form, Container, FloatingLabel, Row, Col} from 'react-bootstrap';
import './css/ChangePassword.css';

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

//Icono
const eye = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 7.449-11.985 7.449c-7.18 0-12.015-7.449-12.015-7.449s4.446-6.551 12.015-6.551c7.694 0 11.985 6.551 11.985 6.551zm-7 .449c0-2.761-2.238-5-5-5-2.761 0-5 2.239-5 5 0 2.762 2.239 5 5 5 2.762 0 5-2.238 5-5z" />
            </svg>;

//Función a exportar
export function ChangePassword() {

    //Manejo de estado del error y lo que se encuentre en la caja de texto
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

    //Función para comparar ambas cajas de texto y verificar que sean iguales
    const checkPassword = (event) => {
        setC_password(event.target.value);

        const error2 = confirmValidation(event.target.value, document.getElementById("password").value);
        setError2(error2);
    };

    //Función para no enviar el formulario si hay algún error
    const submitHandler = (event) => {
        if (error || error2) return event.preventDefault();
    };
    
    return (
            <Container fluid>
            <div className="text-white">
                <Row>
                    <Form onSubmit={submitHandler}>
                        <label style={{display:'flex', justifyContent:'center', fontSize:'35px'}} >Cambiar Contraseña</label>
                        <br />
                        <Col md={{ span:4,offset:4 }}>
                            <FloatingLabel type={showPassword ? "text" : "password"} style={{ color: "black" }} label="Nueva Constraseña">
                                <Form.Control id="password" type="password" placeholder=" " value={password} onChange={inputPassword} />
                            </FloatingLabel>
                            <i class="password-icon" onClick={togglePassword}> {eye} </i>
                            { Boolean(error) && <p>{error}</p> }
                        </Col>
                        <br />
                        <Col md={{ span:4,offset:4 }}>
                            <FloatingLabel style={{ color: "black" }} label="Confirmar Constraseña" >
                                <Form.Control type="password" placeholder=" " value={c_password} onChange={checkPassword} />
                            </FloatingLabel>
                            { Boolean(error2) && <p>{error2}</p> }
                        </Col>
                        <br />
                        <Col md={{ span:5,offset:5 }}>
                            <Button variant="warning" >Cancelar</Button>
                            <Button type="submit" variant="warning" className="m-2" >Continuar</Button>
                        </Col>
                    </Form>
                </Row>
            </div>
            </Container>
    );
};