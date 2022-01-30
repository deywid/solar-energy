import styled from "styled-components";

export const CardContainer = styled.div`
  font-family: "Mulish", sans-serif;
  font-weight: 700;

  width: 100%;

  display: flex;
  justify-content: center;
  gap: 30px;
  padding-top: 2em;
`;

export const CardTitle = styled.span`
  text-align: center;
  color: #9fa2b4;
`;

export const CardValue = styled.span`
  text-align: center;
  color: #252733;
  font-size: 2em;
  line-height: 50px;
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 12px;

  width: 258px;
  height: 134px;

  border: 1px solid #dfe0eb;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
    border: 1px solid #3751ff;
    ${CardTitle},
    ${CardValue} {
      color: #3751ff;
    }
  }
`;
