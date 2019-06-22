import React, { Component } from "react";
import Select from "./Select";
import GroceryList from "../models/ProductModel";
import { Table } from "reactstrap";
import { MDBBtn } from "mdbreact";
import range from "lodash/range";

class GroceryItems extends Component {
  //options = [1, 2, 3, 4, 5];
  options = range(1, 6);

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
                  <MDBBtn
                    outline
                    color="primary"
                    size="sm"
                    onClick={e => addToCart(item)}
                  >
                    {" "}
                    Add
                  </MDBBtn>
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
