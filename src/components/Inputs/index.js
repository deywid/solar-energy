import React from "react";

import { Input } from "./style";

function CustomInput({ label, htmlFor, children, ...props }) {
  return (
    <>
      {label && <label htmlFor={htmlFor}>{label}</label>}
      <Input>
      {children}
      <input
            type={props.type}
            id={props.id}
            name={props.name}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
          />
      </Input>
    </>
  );
}

export default CustomInput;
