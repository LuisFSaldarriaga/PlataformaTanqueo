import React, { useState } from 'react';
import {Button, Form} from 'react-bootstrap';

const UsuarioInternoReg = () => {

    console.log("hola")

    return (
            <>
            <div className="text-white">  
                <Form>
                    <label style={{display:'flex', justifyContent:'center', fontSize:'35px'}} >Registrar Usuario Interno</label>
                    <input className="form-control" type="text" placeholder="Nombres"/>
                    <input className="form-control" type="text" placeholder="Apellidos"/>
                    <br />
                    <input className="form-control" type="text" placeholder="Nombre Usuario"/>
                    <input className="form-control" type="email" placeholder="correo"/>
                    <br />
                    <input className="form-control" type="text" placeholder="Nombres"/>
                    <select className="form-control" placeholde="Tipo de Documento">
                        <option>Cédula</option>
                        <option>Cédula Extranjería</option>
                        <option>Pasaporte</option>
                    </select>
                    <br />
                    <input className="form-control" type="text" placeholder="Número de Celular"/>
                    <input className="form-control" type="password" placeholder="Contraseña"/>
                    <br />
                    <input className="form-control" type="date" placeholder="Fecha de Nacimiento"  />
                    <input className="form-control" type="email" placeholder="Confirmar Contraseña"/>
                </Form>
            </div>      
            </>
    );
};

export default UsuarioInternoReg;