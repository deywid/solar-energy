import styled from "styled-components";

export const Select = styled.div`
  display: flex;
  align-items: center;

  background: #fafafa;
  border: 1px solid #000000;
  border-radius: 10px;

  color: #a098ae;

  select {
    width: 100%;
    padding: 12px 24px;

    border-radius: 10px;
    cursor: pointer;
    margin-right: 28px;
  }

  svg {
    transform: scale(1.4);
    margin-left: 24px;
  }
`;
