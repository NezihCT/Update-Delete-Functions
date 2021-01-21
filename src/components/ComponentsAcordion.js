import React from "react";
import PropTypes from "prop-types";
import { Row, Form, Button, Card, ListGroup } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "./ComponentsAcordion.css";

export const ComponentsAcordion = ({
  update,
  item,
  onChange,
  index,
  toTrash
}) => (
  <Accordion id="accordionid" className="acordion justify-content-center mx-auto col-md-9">
    <Card>
      <Accordion.Toggle
        id="accordiontog1"
        className="bg-dark"
        as={Button}
        variant="text"
        eventKey="0"
      >
        <ListGroup>
          <ListGroup.Item
            id="listitem"
            className="bg-dark text-white text-center"
          >
            User ID: {item.id}
          </ListGroup.Item>
        </ListGroup>
      </Accordion.Toggle>

      <Accordion.Collapse eventKey="0" >
        <Card.Body className="bg-secondary text-white">
          <ListGroup>
            {item.isEditing ? (
              <div className="mb-4">
                <ListGroup.Item>
                  <Form.Control
                    type="text"
                    name="name"
                    className=""
                    placeholder="Name"
                    value={item.name}
                    onChange={event => onChange(event, index)}
                    required
                  />
                </ListGroup.Item>
                <ListGroup.Item className="text-center">
                  <Form.Control
                    type="text"
                    name="surname"
                    placeholder="Surname"
                    value={item.surname}
                    onChange={event => onChange(event, index)}
                    required
                  />
                </ListGroup.Item>

                <ListGroup.Item className="text-center">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={item.email}
                    onChange={event => onChange(event, index)}
                    required
                  />
                </ListGroup.Item>
                <ListGroup.Item className="text-center">
                  <Form.Control
                    as="textarea"
                    name="notes"
                    placeholder="Notes"
                    value={item.notes}
                    onChange={event => onChange(event, index)}
                    required
                  />
                </ListGroup.Item>
              </div>
            ) : (
              <div>
                <Card.Title className="text-center font-italic font-weight-normal">{item.name}</Card.Title>

                <Row className="justify-content-center  font-italic mb-2">
                  <Card.Text
                    className="px-4 col-6 font-size-large text-center"
                  >
                    <span>{item.surname}</span>
                  </Card.Text>
                </Row>
                <Row className="justify-content-center font-italic mb-2">
                  <Card.Text
                    className="px-4 text-center"
                  >
                    <span>{item.email}</span>
                  </Card.Text>
                </Row>
                <Row className="mb-4">
                  <Card.Text
                    className="notes px-4 font-size-large font-italic"
                  >
                    <span>{item.notes}</span>
                  </Card.Text>
                </Row>
              </div>
            )}
          </ListGroup>
          <ListGroup>
            <Row className="justify-content-center">
              <div>
                <Button
                  type="button"
                  className="save btn btn-warning mr-4 text-white"
                  onClick={update}
                >
                  {item.isEditing ? "Save" : "Update"}
                </Button>
                <Button
                  type="button"
                  className="edit btn btn-dark text-white"
                  onClick={toTrash}
                >
                  Delete
                </Button>
              </div>
            </Row>
          </ListGroup>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
);


