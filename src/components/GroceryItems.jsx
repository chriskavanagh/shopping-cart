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

  const options = range(1, 6);

  //const { handleChange } = props;
  //const { addToCart } = props;
  const add = useStoreActions(actions => actions.CartModel.add);
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
          {groceries.map((item, index) => (
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
