import styled from "styled-components";

export const Price = styled.p`
  font-size: ${({ isPrice }) => isPrice ? '12px': '16px'};;
  font-weight: ${({ isPrice }) => isPrice ? 'normal': 'bold'};;
  color: ${({ isPrice }) => isPrice ? '#c4c4c4': '#000'};
  margin-bottom: 10px;
  width: 100%;
`;
