import styled from "styled-components";

export const Input = styled.div`
  display: flex;
  align-items: center;

  background: #fafafa;
  border: 1px solid #000000;
  border-radius: 10px;

  color: #a098ae;

  input {
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

  svg {
    transform: scale(1.4);
    margin-left: 24px;
  }
`;
