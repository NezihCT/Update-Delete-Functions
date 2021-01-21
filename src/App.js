import React, { Component } from "react";
import "./App.css";
import { ComponentsAcordion } from "./components/ComponentsAcordion";
import { ComponentsAdd } from "./components/ComponentsAdd";
import { Container, Row, Col } from "react-bootstrap";

class App extends Component {
  state = {
    name: "",
    surname: "",
    email: "",
    notes: "",
    items: []
  };

  toTrash = index => {
    this.setState({
      items: [
        ...this.state.items.slice(0, index),
        ...this.state.items.slice(index + 1)
      ]
    });
  };

  takeData = event => {
    event.preventDefault();
    const { name, surname, email, notes } = this.state;
    const itemsInState = this.state.items;
    const itemsArrayLength = itemsInState.length;
    const id = itemsArrayLength ? itemsInState[itemsArrayLength - 1].id + 1 : 1;
    this.setState({
      items: [
        ...itemsInState,
        Object.assign(
          {},
          {
            id,
            name,
            surname,
            email,
            notes
          }
        )
      ],
      name: "",
      surname: "",
      email: "",
      notes: ""
    });
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  updateData = (event, index) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      items: this.state.items.map((item, itemIndex) => {
        if (itemIndex === index) {
          return {
            ...item,
            [name]: value
          };
        }
        return item;
      })
    });
  };


  arrangeData = index => {
    this.setState({
      items: this.state.items.map((item, itemIndex) => {
        if (itemIndex === index) {
          return {
            ...item,
            isEditing: !item.isEditing
          };
        }
        return item;
      })
    });
  }; 

  render() {
    const { name, surname, email, notes } = this.state;
    return (
      <div>
        <Container fluid>
          <Row className="takeData" >
            <Col md={6} className="bg-dark ">
              <h1 className="display-5 pb-5 mb-3 text-center pt-5 text-warning "> Blog Form </h1>{" "}
              <ComponentsAdd
                name={name}
                surname={surname}
                email={email}
                notes={notes}
                onChange={this.handleInputChange}
                onSubmit={this.takeData}
              />{" "}
            </Col>
            <Col md={6} className="user bg-warning ">
              <h1 className="display-5 mx-auto text-center pb-5 mb-2 pt-5 text-dark"> Saved Users </h1>
              {" "}
              {this.state.items.map((item, index) => (
                <ComponentsAcordion
                  key={item.id}
                  index={index}
                  item={item}
                  update={() => this.arrangeData(index)}
                  onChange={this.updateData}
                  toTrash={() => this.toTrash(index)}
                />
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;

