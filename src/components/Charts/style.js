import { Line } from "react-chartjs-2";
import styled from "styled-components";

export const ChartContainer = styled.div`
  width: 100%;
  padding: 1.5em 0;
`;

export const ChartDiv = styled(Line)`
  width: 70%;
  margin: 0 auto;
  padding: 1.5em 1em;

  border: 1px solid #e5e5e5;
  border-radius: 4px;
`;
