import React, { Component } from "react";
import Select from "./Select";
import GroceryList from "../models/ProductModel";
import { Button, Table } from "reactstrap";

class GroceryItems extends Component {
  state = {
    item: {}
  };
  options = [1, 2, 3, 4, 5];

  render() {
    const { handleChange } = this.props;
    const { addToCart } = this.props;
    return (
      <div>
        <Table className="table">
          <thead>
            <tr>
              <th>Add Item</th>
              <th>Name</th>
              <th>Quantity</th>
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
                    onClick={e => addToCart(item)}
                  >
                    Add
                  </Button>
                </td>
                <td>{item.name}</td>
                <td>
                  <Select options={this.options} handleChange={handleChange} />
                </td>
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
