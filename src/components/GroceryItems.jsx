import React from "react";
import Select from "./Select";
import { Table } from "reactstrap";
import { MDBBtn } from "mdbreact";
import range from "lodash/range";
import { useStoreState, useStoreActions } from "easy-peasy";

const GroceryItems = ({ indexOfFirstProduct, indexOfLastProduct }) => {
  // options for Select Component, number of choices to buy.
  const options = range(1, 6);

  // grab state from models
  const groceries = useStoreState(state => state.ProductModel.GroceryList);
  const filteredList = useStoreState(state => state.CartModel.filteredList);

  // get add function from CartModel State (easy-peasy).
  const add = useStoreActions(actions => actions.CartModel.addItem);

  // if search, filters the list, otherwise list all products.
  const groceryList = filteredList.length > 0 ? filteredList : groceries;

  // slice list for pagination
  const filteredItems = groceryList.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

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
          {filteredItems.map((item, index) => (
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
