import React from "react";
import Select from "./Select";
//import GroceryList from "../models/ProductModel";
import { Table } from "reactstrap";
import { MDBBtn } from "mdbreact";
import range from "lodash/range";
import { useStoreState, useStoreActions } from "easy-peasy";

const GroceryItems = props => {
  const groceries = useStoreState(state => state.ProductModel.GroceryList);
  const filteredList = useStoreState(state => state.CartModel.filteredList);

  // options for Select Component, number of choices to buy.
  const options = range(1, 6);

  // get add function from CartModel State (easy-peasy).
  const add = useStoreActions(actions => actions.CartModel.add);

  // if search, filters the list, otherwise list all products.
  const groceryList = filteredList.length > 0 ? filteredList : groceries;

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
          {groceryList.map((item, index) => (
            <tr key={index}>
              <td>
                <MDBBtn
                  outline
                  color="primary"
                  size="sm"
                  onClick={() => add(item)}
                >
                  {" "}
                  Add
                </MDBBtn>
              </td>
              <td>{item.name}</td>
              <td>
                <Select options={options} />
              </td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default GroceryItems;
