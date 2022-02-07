import styled from "styled-components";

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  transform: scale(2);
  margin: 12px 6px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
`;
