import React, { Fragment, useState, useEffect } from "react";
import Cart from "./components/Cart";
import GroceryItems from "./components/GroceryItems";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import ScrollButton from "./components/ScrollButton";
import FooterPage from "./components/Footer";
//import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import NavbarPage from "./components/NavBar";
import GroceryList from "./models/ProductModel";
import { useStoreState } from "easy-peasy";
import "./App.css";

const App = props => {
  // set state on items in cart
  const [cartCount, setcartCount] = useState(0);

  // items in cart (from CartModel/easy-peasy)
  const items = useStoreState(state => state.CartModel.items);

  useEffect(() => {
    setcartCount(
      items.reduce((total, item) => {
        return parseInt(total) + parseInt(item.quantity);
      }, 0)
    );
  }, [items]);

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
          <strong className="fa-stack-1x">{cartCount}</strong>
          Cart
        </span>
      </h1>
      <Container>
        <Row>
          <Col xs="5">
            <GroceryItems />
          </Col>
          <Col xs="4" className="cartitems">
            <Cart />
          </Col>
        </Row>
        <ScrollButton scrollStepInPx="50" delayInMs="16.66" />
      </Container>
      <FooterPage />
    </Fragment>
  );
};

export default App;
