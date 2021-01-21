import React from "react";
import { Row, Form, Button, InputGroup, Container } from "react-bootstrap";
import "./Add.css";

export const ComponentsAdd = ({ name, surname, email, notes, onChange, onSubmit }) => (
    <Container fluid>
        <Row className="">
            <Form inline onSubmit={onSubmit}>
                <InputGroup className="mb-3 mx-auto col-md-9">
                    <Form.Control
                        type="text"
                        placeholder="Please type a name..."
                        value={name}
                        name="name"
                        onChange={onChange}
                    />
                </InputGroup>
                <InputGroup className="mb-3 mx-auto col-md-9">
                    <Form.Control
                        type="text"
                        placeholder="Please type a lastname..."
                        value={surname}
                        name="surname"
                        onChange={onChange}
                    />
                </InputGroup>
                <InputGroup className="mb-3 mx-auto col-md-9">
                    <Form.Control
                        type="email"
                        placeholder="Please type an email..."
                        value={email}
                        name="email"
                        onChange={onChange}
                    />
                </InputGroup>
                <InputGroup className="mb-3 mx-auto col-md-9">
                    <Form.Control
                        as="textarea"
                        placeholder="Please type a note..."
                        value={notes}
                        name="notes"
                        onChange={onChange}
                    />
                </InputGroup>

                <Button type="submit" id="buton" className="buton1 mx-auto btn text-dark btn-warning display-5 mb-2">
                    Submit
      </Button>
            </Form>
        </Row>
    </Container>
);


