import React from "react";

import { Table } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export function App() {
    

    return (
        <div class="container">
            <div>
                hola m
            </div>
            <button>
                hey
            </button>
            <Table>
                <Row className="mx-0">
                    <Button as={Col} variant="primary">Button #1</Button>
                    <Button as={Col} variant="secondary" className="mx-2">Button #2</Button>
                    <Button as={Col} variant="success">Button #3</Button>
                </Row>
            </Table>
        </div>

    ); 
}