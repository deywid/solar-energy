import styled from "styled-components";

export const Load = styled.div`
  margin: 0 auto;
  border: 6px solid #fbfcff;
  border-top: 6px solid #4c5df1;
  border-radius: 50%;
  width: 27px;
  height: 27px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
