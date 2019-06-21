import React, { Component, Fragment } from "react";
import Cart from "./components/Cart";
import GroceryItems from "./components/GroceryItems";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import ScrollButton from "./components/ScrollButton";
import "./App.css";

class App extends Component {
  state = {
    cart: [],
    quantity: 1
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  addItem = item => {
    let clone = [...this.state.cart];
    let index = clone.indexOf(item);

    if (index !== -1) {
      clone[index].quantity++;
      this.setState({ cart: clone });
    } else {
      let quantity = this.state.quantity;
      item.quantity = quantity;
      let cart = [...this.state.cart, item];
      this.setState({
        cart
      });
    }
    this.setState({ quantity: 1 });
  };

  render() {
    const { cart } = this.state;
    return (
      <Fragment>
        <h1 className="carth1">
          My
          <span className="fa-stack fa-2x">
            <FontAwesomeIcon
              icon={faCartPlus}
              transform="shrink-5 down-3 left-3"
              color="#007bff"
              size="1x"
              className="icon"
              style={{ marginLeft: "7px" }}
            />
            <strong className="fa-stack-1x">{cart.length}</strong>
          </span>
          Cart
        </h1>
        <Container>
          <Row>
            <Col xs="5">
              <GroceryItems
                addToCart={this.addItem}
                handleChange={this.handleChange}
              />
            </Col>
            <Col xs="4" className="cartitems">
              <Cart items={cart} />
            </Col>
          </Row>
          <ScrollButton />
        </Container>
      </Fragment>
    );
  }
}

export default App;
