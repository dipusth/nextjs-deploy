import styled from "styled-components";

export const LoginWapper = styled.div`
  &.bg-props {
    &::after,
    &:before {
      /* position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: var(--color-primary-100);
    opacity: 0.5;
    border-radius: 10%;
    right: 35%;
    top: auto;
    bottom: -70%;
    transform: rotate(38deg) scale(1.9); */
      position: absolute;
      content: "";
      width: 52%;
      height: 100%;
      background-color: var(--color-primary-100);
      opacity: 0.5;
      border-radius: 11%;
      right: 28%;
      top: 8%;
      /* bottom: -70%; */
      transform: rotate(38deg) translate(-50%, -52%);
      left: 21%;
    }
    &:before {
      /* left: -55%;
    right: auto;
    top: 26%;
    width: 50%;
    height: 90%;
     opacity: 0.5; */
    }
  }
`;
