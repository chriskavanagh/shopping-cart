import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const Select = props => {
  return (
    <FormGroup>
      <Input
        type="select"
        name="quantity"
        id="quantity"
        onChange={props.handleChange}
      >
        {props.options.map(option => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </Input>
    </FormGroup>
  );
};

export default Select;
