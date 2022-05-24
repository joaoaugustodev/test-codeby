import styled from "styled-components";


export const Wrapper = styled.p`
  width: 90%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #217a00;
  background-color: #c6ffa6;
  font-size: 21px;
  border-radius: 30px;
  margin: 0 auto;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
