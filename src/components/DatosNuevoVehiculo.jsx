import React from "react";
import { Button, Nav, Stack, Container} from "react-bootstrap";

export function DatosNuevoVehiculo() {
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
        <h2 className="text-center mb-5">Datos Nuevo Vehicuo</h2>
        <Stack gap={3} className="col-md-5 mx-auto">
            <Container className="bg-secondary text-white py-4 px-3 rounded">
                <div className="input-group">
                    </div>
                <div className="mx-4">
                    <form action="#">
                        <div className="mt-3">
                            <input className="form-control w-100 rounded" type="number" placeholder="Placa" />
                        </div>
                        <div className="mt-3">
                            <input className="form-control w-100 rounded" type="number" placeholder="Color" />
                        </div>
                        <div className="mt-3">
                            <input className="form-control w-100 rounded" type="number" placeholder="Marca y Modelo" />
                        </div>
                    </form>
                </div>
            </Container>
            <>
            <Button variant="outline-warning">Guardar</Button>{' '}
            
</>
        </Stack>
        </>
    )
}