import styled from "styled-components";

export const CadUnidadeContainer = styled.div`
  width: 90%;
  margin: 0 auto;

  font-family: Raleway, sans-serif;
  font-weight: 700;
  color: #53575d;

  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Form = styled.form`
  width: 50%;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ButtonContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: stretch;
  gap: 12px;

  > * {
    flex: 1;
  }
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  transform: scale(2);
  margin: 12px 6px;
`;
