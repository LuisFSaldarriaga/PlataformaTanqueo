import React, { useEffect, useState } from "react";
import "./css/Inventario.css"
import { Container, Row, Col, FormControl} from 'react-bootstrap';

export function PreciosView() {

    const [cantidad, setCantidad] = useState({ corriente: "", extra: ""});

    useEffect(() => {
        fetch("http://localhost:8080/inventario", {
            headers: { "Content-Type": "application/json"},
            method: "GET" 
        })
        .then(data => data.json())
        .then(data => setCantidad({ corriente: data.corriente, extra: data.extra }));
    }, [cantidad])

    return(
        <Container id="Cont-PreciosView">
                        <Row className="justify-content-md-center" id="Contain-TipoyPrecio">
                            <Col md="auto" id="Titulo-PreciosView">
                                Galones en Stock
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 640 512" focusable="false" style={{width:"30px", margin:"5px 0px 0px 15px"}}>
                                    <path d="M425.7 256c-16.9 0-32.8-9-41.4-23.4L320 126l-64.2 106.6c-8.7 14.5-24.6 23.5-41.5 23.5-4.5 0-9-.6-13.3-1.9L64 215v178c0 14.7 10 27.5 24.2 31l216.2 54.1c10.2 2.5 20.9 2.5 31 0L551.8 424c14.2-3.6 24.2-16.4 24.2-31V215l-137 39.1c-4.3 1.3-8.8 1.9-13.3 1.9zm212.6-112.2L586.8 41c-3.1-6.2-9.8-9.8-16.7-8.9L320 64l91.7 152.1c3.8 6.3 11.4 9.3 18.5 7.3l197.9-56.5c9.9-2.9 14.7-13.9 10.2-23.1zM53.2 41L1.7 143.8c-4.6 9.2.3 20.2 10.1 23l197.9 56.5c7.1 2 14.7-1 18.5-7.3L320 64 69.8 32.1c-6.9-.8-13.5 2.7-16.6 8.9z"/>
                                </svg>
                            </Col>
                            <div style={{height:"2px", width:"100%", backgroundColor:"white", margin:"5px 0px"}}></div>
                            <div id="SubContain-PreciosView">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" focusable="false" style={{width:"22px"}}>
                                    <path d="M10.99 10H6.007V9a1 1 0 00-2.002 0v1H2.982a.983.983 0 01-.98-1V3c0-.552.428-1 .98-1h8.009c.552 0 1.022.448 1.022 1v6c0 .552-.47 1-1.022 1zm-.98 7c0 .552-.469 1-1.022 1H4.984a.983.983 0 01-.98-1v-5h6.007v5zM19 6h-1.001c-1.106 0-2.002 1-2.002 2h.01c0 3-.99 6-3.993 6v-2c1 0 2.002-.895 2.002-2V2c0-1.105-.917-2-2.023-2H1.982A1.983 1.983 0 000 2v8c0 1.105 1.001 2 2.002 2v6c0 1.105.875 2 1.981 2H9.99c1.107 0 2.024-.895 2.024-2v-2c4.004 0 5.888-3.07 5.985-7.031A.988.988 0 0118.986 8h.013a1 1 0 100-2z" fill-rule="evenodd"/>
                                </svg>
                                <div id="Text2-Style">Corriente</div>
                            </div>
                            <FormControl id="PreciosView-Input" value={`${cantidad.corriente}`} readOnly/>
                        </Row>                            
                        <Row id="Contain-TipoyPrecio">
                            <div id="SubContain-PreciosView">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" focusable="false" style={{width:"22px"}}>
                                    <path d="M10.99 10H6.007V9a1 1 0 00-2.002 0v1H2.982a.983.983 0 01-.98-1V3c0-.552.428-1 .98-1h8.009c.552 0 1.022.448 1.022 1v6c0 .552-.47 1-1.022 1zm-.98 7c0 .552-.469 1-1.022 1H4.984a.983.983 0 01-.98-1v-5h6.007v5zM19 6h-1.001c-1.106 0-2.002 1-2.002 2h.01c0 3-.99 6-3.993 6v-2c1 0 2.002-.895 2.002-2V2c0-1.105-.917-2-2.023-2H1.982A1.983 1.983 0 000 2v8c0 1.105 1.001 2 2.002 2v6c0 1.105.875 2 1.981 2H9.99c1.107 0 2.024-.895 2.024-2v-2c4.004 0 5.888-3.07 5.985-7.031A.988.988 0 0118.986 8h.013a1 1 0 100-2z" fill-rule="evenodd"/>
                                </svg>
                                <div id="Text2-Style">Extra</div>
                            </div>
                            <FormControl id="PreciosView-Input" value={`${cantidad.extra}`} readOnly/>
                        </Row>                                                                
                    </Container>
    );
}