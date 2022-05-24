import styled from "styled-components";

export const Cart = styled.section`
  width: 600px;
  max-width: 100%;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  margin: 0 auto;

  @media (max-width: 600px) {
    box-shadow: none;
    border-radius: 0;
  }
`;
