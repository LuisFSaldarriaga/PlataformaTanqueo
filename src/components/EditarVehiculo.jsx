import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Button, Nav, Stack, Container} from "react-bootstrap";
import { useParams } from "react-router-dom";

export function EditarVehiculo() {

    //Referencias para capturar datos en inputs
    const colorRef = useRef();
    const [data, setData] = useState([]);
    const {id} = useParams();

    useEffect(()=> {
        fetch(`http://localhost:8080/vehiculos/buscar/${id}`, {
        method: "GET"
    }).then(res => res.json())
    .then(res => setData(res.data))
    }, []);
    
    async function editar() {
        const color = colorRef.current.value;
        //const token = localStorage.getItem("token");

        await fetch(`http://localhost:8080/vehiculos/edit/${id}`, {
            headers: {
                "Content-Type": "application/json"
                //"authorization": `Bearer ${token}`
            },
            method: "PUT",
            body: JSON.stringify({ color })
        }).then(res => res.json())
            .then(res => {
                alert(res.msg);
                if (res.status === "ok") window.location.href="/vehiculos";
            })
    };

    async function eliminar() {
        await fetch(`http://localhost:8080/vehiculos/delete/${id}`, {
            method: "DELETE",
        }).then(res => {
            alert(res.msg);
            if(res.status === "ok"); window.location.href="/vehiculos";
        })
    }

    return (
        <>
            <header className="mb-3">
                <nav>
                    <Nav className="p-2 bg-secondary" activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)} >
                        <Nav.Item>
                        <Nav.Link className="btn btn-warning rounded text-white px-5 ms-5" href="/home">Regresar</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </nav>
            </header>
            <h2 className="text-center mb-5">Editar/Eliminar Vehículo</h2>
            <Stack gap={3} className="col-md-5 mx-auto">
                <Container className="bg-secondary text-white py-4 px-3 rounded">
                    <div className="input-group">
                        </div>
                    <div className="mx-4">
                        <form action="#">
                            <div className="mt-3">
                                <input readOnly className="form-control w-100 rounded bg-color" type="text" placeholder={data.placa} />
                            </div>              
                            <div className="mt-3">
                                <input ref={colorRef} className="form-control w-100 rounded" type="text" placeholder="Color" />
                            </div>
                            <div className="mt-3">
                                <input readOnly className="form-control w-100 rounded" type="text" placeholder={data.fabricante} />
                            </div>  
                        </form>
                    </div>
                </Container>
                <>
                <Button onClick={editar} variant="outline-warning">Editar</Button>{' '}
                <Button onClick={eliminar} variant="outline-warning">Eliminar</Button>{' '}         
        </>
        </Stack>
        </>
    )
}