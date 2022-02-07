import React from "react";
import { Checkbox, Label } from "./style";

function CustomCheckbox({ htmlFor, label, ...props }) {
  return (
    <>
      <Label htmlFor={htmlFor}>
        <Checkbox
          type={props.type}
          id={props.id}
          name={props.name}
          checked={props.checked}
          onChange={props.onChange}
        />
        {label}
      </Label>
    </>
  );
}

export default CustomCheckbox;
