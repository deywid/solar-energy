import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Select } from "./style";

function CustomSelect({ label, htmlFor, ...props }) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    async function handleGetOptions() {
      try {
        const response = await axios.get("http://localhost:3333/unidades");
        setOptions(response.data);
      } catch (error) {
        toast.error("Ocorreu um erro ao requisitar dados do sistema");
        console.log(error);
      }
    }
    handleGetOptions();
  }, []);

  return (
    <>
      {label && <label htmlFor={htmlFor}>{label}</label>}
      <Select>
        <select
          id={props.id}
          name={props.name}
          defaultValue={props.defaultValue}
          onChange={props.onChange}
        >
          <option value="" disabled hidden></option>
          {options.map((opt) => (
            <option key={opt.id} value={opt.id}>
              {opt.apelido}
            </option>
          ))}
        </select>
      </Select>
    </>
  );
}

export default CustomSelect;
