import styled from "styled-components";

export const CardProduct = styled.div`
  .hover-content {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.3s linear;
  }
  &:hover {
    .hover-content {
      opacity: 1;
      transform: translateY(-20px);
    }
  }
`;
