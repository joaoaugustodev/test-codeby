import styled from "styled-components";

export const App = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d1d7e4;
  padding: 50px 0;

  @media (max-width: 600px) {
    padding: 0;
  }
`;

export const Title = styled.h1`
  text-align: center;
`;
