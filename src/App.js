import React, { Component, Fragment } from "react";
import Cart from "./components/Cart";
import GroceryItems from "./components/GroceryItems";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import ScrollButton from "./components/ScrollButton";
import FooterPage from "./components/Footer";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import NavbarPage from "./components/NavBar";
import GroceryList from "./models/ProductModel";
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

  numberCartItems = () => {
    const { cart } = this.state;
    return cart.reduce((total, item) => {
      return parseInt(total) + parseInt(item.quantity);
    }, 0);
  };

  render() {
    const { cart } = this.state;
    return (
      <Fragment>
        <NavbarPage items={GroceryList} />
        <h1 className="carth1">
          My
          <span>
            <FontAwesomeIcon
              icon={faCartPlus}
              transform="shrink-5 down-3 "
              color="#007bff"
              size="2x"
              className="icon"
              style={{ marginBottom: "7px" }}
            />
            <strong className="fa-stack-1x">{this.numberCartItems()}</strong>
            Cart
          </span>
        </h1>
        <MDBContainer>
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
          <ScrollButton scrollStepInPx="50" delayInMs="16.66" />
        </MDBContainer>
        <FooterPage />
      </Fragment>
    );
  }
}

export default App;

/* numberCartItems = () => {
    const { cart } = this.state;
    let quantity = cart.map(item => item.quantity);
    parseInt(quantity);
    return quantity.reduce((total, item) => {
      return parseInt(total) + parseInt(item);
    }, 0);
  }; */

/* addItem = item => {
    let clone = [...this.state.cart];

    let existingItem = clone.filter(i => i.id === item.id);
    console.log(existingItem);
    if (existingItem.length > 0) {
      existingItem[0].quantity++;
      this.setState({ cart: clone });
    } else {
      let quantity = this.state.quantity;
      item.quantity = quantity;
      let cart = [...this.state.cart, item];
      this.setState({ cart });
    }
    this.setState({ quantity: 1 });
  }; */
