import React from "react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Nav, Stack, Container} from "react-bootstrap";

export function DatosNuevoVehiculo() {

    //Referencias para capturar datos en inputs
    const placaRef = useRef();
    const colorRef = useRef();
    const fabricanteRef = useRef();

    async function guardar() {
        const placa = placaRef.current.value.toUpperCase();
        const color = colorRef.current.value;
        const fabricante = fabricanteRef.current.value;
        //const token = localStorage.getItem("token");

        await fetch("http://localhost:8080/vehiculos/nuevo", {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
                //"authorization": `Bearer ${token}`
            },
            method: "POST",
            body: JSON.stringify({ placa, color, fabricante })
        }).then(res => res.json())
            .then(res => {
                alert(res.msg);
                if (res.status === "ok") window.location.href="/vehiculos";
            })
    };

    return (
        <>
            <header className="mb-3">
                <nav>
                    <Nav className="p-2 bg-secondary" >
                        <Nav.Item>
                        <Nav.Link className="btn btn-warning rounded text-white px-5 ms-5"><Link to="/vehiculos">Regresar</Link></Nav.Link>
                        </Nav.Item>
                    </Nav>
                </nav>
            </header>
            <h2 className="text-center mb-5">Datos Nuevo Vehicuo</h2>
            <Stack gap={3} className="col-md-5 mx-auto">
                <Container className="bg-secondary text-white py-4 px-3 rounded">
                    <div className="input-group">
                        </div>
                    <div className="mx-4">
                        <form action="#">
                            <div className="mt-3">
                                <input ref={placaRef} className="form-control w-100 rounded" type="text" placeholder="Placa" />
                            </div>
                            <div className="mt-3">
                                <input ref={colorRef} className="form-control w-100 rounded" type="text" placeholder="Color" />
                            </div>
                            <div className="mt-3">
                                <input ref={fabricanteRef} className="form-control w-100 rounded" type="text" placeholder="Fabricante" />
                            </div>
                        </form>
                    </div>
                </Container>
                <>
                <Button onClick={guardar} variant="outline-warning">Guardar</Button>{' '}
            
        </>
        </Stack>
        </>
    )
}