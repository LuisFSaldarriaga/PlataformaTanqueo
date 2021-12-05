import React from "react";
import { Modal, Button, Stack } from "react-bootstrap";

export default function recoverPassword(props) {
    return (
      <Modal
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Recuperar Contraseña
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-secondary">
          <h4>Ingresa el correo</h4>
          <Stack gap={4}>
            <form>
                <input type="email" id="emailRecover" placeholder="Correo Electronico"/>
            </form>
          </Stack>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <input type="sumbit" id="emailSumbit"/>
        </Modal.Footer>
      </Modal>
    );
  }