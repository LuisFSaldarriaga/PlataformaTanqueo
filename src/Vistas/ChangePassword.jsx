import React, { useState } from 'react';
import {Button, Form} from 'react-bootstrap';

//Expresión regular para contraseña mínimo 8 caracteres, por lo menos una letra y un número
const regexValidation = new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{8,})");

//Validación de los datos ingresados con la expresión regular
const validation = (input) => {
    const matchRegex = regexValidation.test(input);
    if (input.lenght < 8) return `Se nececitas mínimo 8 caracteres`;
    else if (!matchRegex) return 'Se necesita por lo menos un número y una letra, sin espacios';
    else return '';
};

//Función a exportar
const ChangePassword = () => {
    
    //Manejo de estado del error y lo que se encuentre en la caja de texto
    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const changeHandler = (event) => {
        setValue(event.target.value);

        const error = validation(event.target.value);
        setError(error);
    };
    const submitHandler = (event) => {
        event.preventDefault();
    }

    return (<>
            <div className="bg-dark text-white">
                <div className="d-flex justify-content-center">
                    <Form onSubmit={submitHandler}>
                        <label style={{display:'flex', justifyContent:'center', fontSize:'35px'}} >Cambiar Contraseña</label>
                        <br />
                        <input className="form-control" type="password" placeholder="Nueva Constraseña" value={value} onChange={changeHandler} />
                        {Boolean(error) && <p>{error}</p>}
                        <br />
                        <input className="form-control" type="password" placeholder="Confirmar Constraseña" />
                        <br />
                        <Button variant="warning" >Cancelar</Button>
                        <Button variant="warning" className="m-2" >Continuar</Button>
                    </Form>
                </div>
            </div>
            </>
    );
};

export default ChangePassword;