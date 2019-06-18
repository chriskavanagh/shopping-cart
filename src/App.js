import React, { Component, Fragment } from "react";
import Cart from "./components/Cart";
import GroceryItems from "./components/GroceryItems";
import { Container, Row, Col } from "reactstrap";
import "./App.css";

class App extends Component {
  state = {
    cart: []
  };

  addItem = item => {
    let cart = [...this.state.cart, item];
    this.setState({
      cart
    });
  };

  render() {
    const { cart } = this.state;
    return (
      <Fragment>
        <h1 className="carth1">Shopping Cart</h1>
        <Container>
          <Row>
            <Col xs="5">
              <GroceryItems addToCart={this.addItem} />
            </Col>
            <Col xs="4" className="cartitems">
              <Cart items={cart} />
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default App;
