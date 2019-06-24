import React, { useState } from "react";
//import { Row, Col, Button } from "reactstrap";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useStoreState } from "easy-peasy";

const Cart = () => {
  const [quantity, setquantity] = useState("");
  const items = useStoreState(state => state.CartModel.items);
  // base price/ sum of all items in cart
  const getTotal = () => {
    return items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  // calculate VA state tax
  const getTax = () => {
    let subTotal = getTotal();
    let tax = subTotal * 0.043;
    return tax;
  };

  // calculate base price + state tax
  const totalPlusTax = () => {
    let subTotal = getTotal();
    let tax = subTotal * 0.043;
    let total = subTotal + tax;
    return total;
  };

  //const { items } = this.props;

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
          {getTotal().toFixed(2)}
        </div>
        <div>
          <span className="taxSpan">Tax:</span> ${getTax().toFixed(2)}
        </div>
        <hr />
        <div className="total">Total: ${totalPlusTax().toFixed(2)}</div>
        <CardText className="shippingText">Shipping Is Free!</CardText>
      </CardBody>
    </Card>
  );
};

export default Cart;
