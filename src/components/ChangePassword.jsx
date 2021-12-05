import React, { useState } from 'react';
import {Button, Form} from 'react-bootstrap';

//Expresión regular para contraseña mínimo 8 caracteres, por lo menos una letra y un número
const regexValidation = new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{8,})");

//Validación de los datos ingresados con la expresión regular
const validation = (input) => {
    const matchRegex = regexValidation.test(input);
    if (input.lenght < 8) return 'Se nececitas mínimo 8 caracteres';
    else if (!matchRegex) return 'Se necesita por lo menos un número y una letra, sin espacios';
    else return '';
};

//Validación para confirmar contraseña
const confirmPasswordValidation = (check, input) => {
    if (check === input ) return ''
    else return 'Las contraseñas deben ser iguales';
}

//Función a exportar
const ChangePassword = () => {
    
    //Manejo de estado del error y lo que se encuentre en la caja de texto
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');
    const [error, setError] = useState('');

    //Función para verificar que la contraseña cumpla con la Regex 
    const changeHandler = (event) => {
        setValue(event.target.value);

        const error = validation(event.target.value);
        setError(error);
    };
    //Función para no enviar el formulario si hay algún error
    const submitHandler = (event) => {
        event.preventDefault();
    };
    //Función para comparar ambas cajas de texto y verificar que sean iguales
    const checkPassword = (event) => {
        setValue2(event.target.value);
        const error = confirmPasswordValidation(value, event.target.value2);
        setError(error);
    };

    return (
            <>
            <div className="text-white">
                <div className="d-flex justify-content-center">
                    <Form onSubmit={submitHandler}>
                        <label style={{display:'flex', justifyContent:'center', fontSize:'35px'}} >Cambiar Contraseña</label>
                        <br />
                        <input className="form-control" type="text" placeholder="Nueva Constraseña" value={value} onChange={changeHandler} />
                        {Boolean(error) && <p>{error}</p>}
                        <br />
                        <input className="form-control" type="text" placeholder="Confirmar Constraseña" value={value2} onChange={checkPassword} />
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