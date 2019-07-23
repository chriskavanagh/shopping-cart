import React, { useState, useEffect } from "react";
import { FormGroup, Input } from "reactstrap";
import { useStoreActions } from "easy-peasy";

const Select = props => {
  const [quantity, setQuantity] = useState(1);
  const add = useStoreActions(actions => actions.CartModel.addQuantity);

  useEffect(() => {
    add(quantity);
  });
  return (
    <FormGroup>
      <select
        className="browser-default custom-select"
        type="number"
        name="quantity"
        id="quantity"
        onChange={e => setQuantity(e.target.value)}
        value={quantity}
      >
        {props.options.map(option => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </FormGroup>
  );
};

export default Select;
