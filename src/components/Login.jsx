import React from "react";
import { Row, Col, Container, Stack, Button } from "react-bootstrap" ;
import recoverPassword from "./LoginModal_RecoverPassword";
import Logo from "./assets/img/logo.png";
import "./css/basicLoginRegister.css";

export function Login() {
    const [modalShow, setModalShow] = React.useState(false);
    return(

        <div className="d-flex justify-content-center align-items-center"> 
            <Row className="d-inline-flex flex-fill my-5 mx-md-5 align-items-center" fluid>
                <Col  className="d-flex justify-content-center"> 
                    <Container className="d-block pb-md-5 align-middle">
                    <h1 className="font-weight-bold display-2 pb-md-5 text-center">BIENVENIDOS</h1>
                    </Container>
                </Col>
                <Col xs={{ order: 'last' }} className="d-flex my-5 mx-md-5 justify-content-center"> 
                 <Container>           
                    <div>
                        <Container className="d-inline-flex pt-md-5 align-items-center">
                            <img 
                                src={Logo} 
                                alt="LoginLogo" 
                                className="mx-auto"
                                width="85%"
                                max-width="100%" />
                        </Container>

                        <Container className="d-flex pt-4 px-md-5 flex-column">

                            <Container>
                                <form>
                                    <Stack gap={4} className="pb-3 border-bottom border-light border-3">
                                        <input type="text" id="username" className="bg-secondary text-light border-0 rounded-3 form-control-lg form-control" placeholder="Usuario"/> 
                                        <input type="password" id="password" className="bg-secondary text-light border-0 rounded-3 form-control-lg form-control" placeholder="Contraseña"/>
                                        <input type="submit" id="submitButton" value="Ingresar" className="btn form-control-lg" placeholder="Ingresar"/>
                                    </Stack>
                                </form>

                                {/*<span className="placeholder col-12 placeholder-xs bg-light"></span>*/}
                            </Container>
                            
                            <Container className="d-flex justify-content-between">
                                
                                <Button className="btn border-0 bg-dark text-light" onClick={() => setModalShow(true)}>
                                    Recuperar Contraseña
                                </Button>

                                <recoverPassword
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />


                                <Button className="btn border-0 bg-dark text-light" >
                                    Registrarse
                                </Button>
                            </Container>
                        </Container>
                    </div>
                 </Container>
                </Col>
            </Row>
        </div>
        
    );

};

