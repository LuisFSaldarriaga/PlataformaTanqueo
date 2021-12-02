import React, { useState } from 'react';
import {Button, Form, Row} from 'react-bootstrap';

//Expresión regular para contraseña mínimo 8 caracteres, por lo menos una letra y un número
const regexValidation = new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{8,})");

//Validación de los datos ingresados con la expresión regular
const validation = (input) => {
    const matchRegex = regexValidation.test(input);
    if (input.lenght < 8) return 'Se nececitas mínimo 8 caracteres';
    else if (!matchRegex) return 'Se necesita por lo menos un número y una letra, sin espacios';
    else return '';
};

export function UsuarioInternoReg() {
    const [password, setPassword] = useState('');
    const [c_password, setC_password] = useState('');
    const [error, setError] = useState('');

    //Función para verificar que la contraseña cumpla con la Regex 
    const inputPassword = (event) => {
        setPassword(event.target.value);

        const error = validation(event.target.value);
        setError(error);
    };
    //Función para no enviar el formulario si hay algún error
    const submitHandler = (event) => {
        event.preventDefault();
    };

    return (
            <>
                <div className="d-flex justify-content-center">  
                    <Form onSubmit={submitHandler} >
                        <div className="row">
                            <label className="fs-1 text-center">Registrar Usuario Interno</label>
                        </div>
                        <div className="row pt-5">
                            <div className="col-6">
                                <input className="form-control" type="text" placeholder="Nombres"/>
                            </div>
                            <div className="col-6" >
                                <input className="form-control" type="text" placeholder="Apellidos"/>   
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-6">
                                <input className="form-control" type="text" placeholder="Nombre Usuario"/>
                            </div>
                            <div className="col 6">
                                <input className="form-control" type="email" placeholder="Correo Electrónico"/>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-6">
                                <select className="form-control" placeholde="Tipo de Documento">
                                    <option>Cédula</option>
                                    <option>Cédula Extranjería</option>
                                    <option>Pasaporte</option>
                                </select>
                            </div>
                            <div className="col-6">
                                <input className="form-control" type="number" placeholder="Número de documento"/>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-6">
                                <input className="form-control" type="number" placeholder="Número de Celular" value={cel_num}/>
                            </div>
                            <div className="col-6">
                                <input className="form-control" type="password" placeholder="Contraseña" value={password} onChange={inputPassword}/>
                                { Boolean(error) && <p className="fs-5">{error}</p> }
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-6">
                                <input className="form-control" type="date" placeholder="Fecha de Nacimiento"/>
                            </div>
                            <div className="col-6">
                                <input className="form-control" type="password" placeholder="Confirmar Contraseña" value={c_password}/>
                            </div>
                        </div>
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <Button variant="warning" type="submit" className="m-4">Registrar</Button>
                        </div>
                       
                    </Form>
                </div>    
            </>
    );
};