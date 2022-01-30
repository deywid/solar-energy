import styled from "styled-components";

export const CustomDiv = styled.div`
  display: flex;
  align-items: center;

  background: #fafafa;
  border: 1px solid #000000;
  border-radius: 10px;

  color: #a098ae;

  input,
  select {
    width: 100%;
    padding: 12px 24px;

    border-radius: 10px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  select {
    cursor: pointer;
    margin-right: 28px;
  }

  svg {
    transform: scale(1.4);
    margin-left: 24px;
  }
`;
