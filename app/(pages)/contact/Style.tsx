import styled from "styled-components";

const CartWrapper = styled.div`
  &:not(:last-child) {
    border-bottom: 1px solid #ccc;
    margin-bottom: 30px;
  }
  .cart-img {
    img {
      max-height: 100px;
      max-width: 100px;
    }
  }
`;

export default CartWrapper;
