import styled from "styled-components";

export const TabContainer = styled.div`
  width: 90%;
  margin: 0 auto;

  font-family: Raleway, sans-serif;
  font-weight: 700;

  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`;

export const TableList = styled.table`
  box-shadow: 0px 12px 26px rgba(16, 30, 115, 0.06);
  border-radius: 8px;
  border-collapse: collapse;
  border-spacing: 0;

  td {
    background-color: #fff;

    color: #53575d;
    font-weight: 400;
    font-size: 16px;

    overflow: hidden;
    padding: 10px 5px;
    word-break: normal;
  }

  th {
    color: #25282b;
    font-weight: 700;
    font-size: 16px;

    overflow: hidden;
    padding: 10px 5px;
    word-break: normal;
  }

  tr {
    border-bottom: 1px solid #e8e8e8;

    text-align: center;
    vertical-align: center;
  }
`;
