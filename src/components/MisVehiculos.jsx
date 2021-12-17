import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import "./css/MisVehiculos.css";
import Carro from './assets/img/Carro.png';
import Tanque from './assets/img/Tanque.png';
import { Container, Row, Col, Form, FormControl, InputGroup, Button, Dropdown, DropdownButton} from 'react-bootstrap';
import { Link } from "react-router-dom";

export function MisVehiculos() {
    
    //Hook para manejar array del back
    const [listado, setListado] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/vehiculos/mis_vehiculos", {
            method: "GET"
        }).then(res => res.json())
        .then(res => {
            if(res.status ==='ok'){
                setListado(res.vehiculos);
            }
        });
    }, []);

    return (
        <><Container>
            <Row className="justify-content-md-center">
                <Col md="auto" id="Titulo">
                    Mis Vehiculos
                </Col>
            </Row>
        </Container><Container>
                <Row>
                    <Row xs={1} md={2} className="g-4">
                        {
                            listado.map(p => 
                            <Col>
                            <Card key={p._id} value={p._id}>
                                <Card.Img id="center" src={Carro} alt="" width="170" rounded />
                                <Card.Body>
                                    <div id="placa">
                                        <div id="Text-Placa">{p.placa}</div>
                                    </div>
                                </Card.Body>                               
                            </Card>
                            <Button href={`vehiculos/${p._id}`} id= "BotonUE1" variant="secondary" size="lg">
                                        Editar
                            </Button>
                            <Button href={`vehiculos/${p._id}`} id="BotonUE1" variant="secondary" size="lg">
                                        Eliminar Vehiculo
                            </Button>
                            </Col>)
                        }
                    </Row>               
                </Row>              
            </Container>
            <Container className="d-grid gap-4" id="BotonUE">&gt;
            <div id= "BotonUE"className="d-grid gap-4">
                <Button  size="lg">
                    <Link to={"/agregar"}><img id="center" src={Tanque} alt="aglo" width="170" rounded /></Link>
                </Button>
                
            </div>
            </Container>
            </>
           
    );  
}
