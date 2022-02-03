import styled from "styled-components";

export const ListButton = styled.button`
  font-family: "Raleway", sans-serif;
  font-size: .9em;
  font-weight: 700;
  color: #fbfcff;
  text-align: center;
  line-height: 24px;

  padding: 8px 16px;
  cursor: pointer;

  background-color: ${(props) => (props.primary ? "#8DB51B" : "#D82D56")};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;

export const PageButton = styled.button`
font-family: "poppins", sans-serif;
  color: #fbfcff;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  align-items: center;

  cursor: pointer;
  padding: 12px 32px;

  max-width: ${(props) => props.maxWidth};
  
  background-color: ${(props) => (props.primary ? "#4C5DF1" : "#4CBC9A")};
  box-shadow: 0px 20px 50px rgba(55, 69, 87, 0.1);
  border-radius: 10px;
`;
