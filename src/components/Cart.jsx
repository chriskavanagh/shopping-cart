import React, { Component } from "react";
//import { Row, Col, Button } from "reactstrap";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

class Cart extends Component {
  // base price/ sum of all items in cart
  getTotal = () => {
    return this.props.items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  // calculate VA state tax
  getTax = () => {
    let subTotal = this.getTotal();
    let tax = subTotal * 0.043;
    return tax;
  };

  // calculate base price + state tax
  totalPlusTax = () => {
    let subTotal = this.getTotal();
    let tax = subTotal * 0.043;
    let total = subTotal + tax;
    return total;
  };

  render() {
    const { items } = this.props;

    return (
      <Card className="card">
        <CardBody className="cardBody">
          <CardTitle>
            {!items.length && <h4>Your Cart Is Empty </h4>}
            {items.length && (
              <h4
                style={{
                  textAlign: "center",
                  marginBottom: "2rem"
                }}
              >
                My Cart
              </h4>
            )}
          </CardTitle>

          <div>
            <ul>
              {items.map((item, index) => (
                <li key={index}>
                  {item.name} - ${item.price} x {item.quantity}
                </li>
              ))}
            </ul>
            <hr />
          </div>
          <div>
            <span className="subtotalSpan">Subtotal:</span>$
            {this.getTotal().toFixed(2)}
          </div>
          <div>
            <span className="taxSpan">Tax:</span> ${this.getTax().toFixed(2)}
          </div>
          <hr />
          <div className="total">Total: ${this.totalPlusTax().toFixed(2)}</div>
          <CardText className="shippingText">Shipping Is Free!</CardText>
        </CardBody>
      </Card>
    );
  }
}

export default Cart;
