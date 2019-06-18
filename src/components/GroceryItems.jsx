import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import GroceryList from "../models/ProductModel";

class GroceryItems extends Component {
  render() {
    const { addToCart } = this.props;
    return (
      <div>
        <Table className="table">
          <thead>
            <tr>
              <th>Add Item</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {GroceryList.map((item, index) => (
              <tr key={index}>
                <td>
                  <Button
                    outline
                    color="primary"
                    onClick={() => addToCart(item)}
                  >
                    Add
                  </Button>
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default GroceryItems;
