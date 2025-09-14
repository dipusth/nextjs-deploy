import styled from "styled-components";

export const FooterWrapper = styled.footer`
  overflow: hidden;
  padding: 3.375rem 1.25rem 2.125rem;
  color: white;

  background-color: var(--color-slate-600);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 160%;
  min-height: 500px;
  @media (max-width: 1023px) {
    background-image: none;
    p {
      text-align: center;
    }
  }

  h2 {
    font-size: 5.125rem;
  }
  a {
    &:hover {
      text-decoration: underline;
    }
  }
  @media (min-width: 1199px) {
    background-size: 120%;
  }

  .footer-info {
    font-size: 1.125rem;

    flex: 0 0 20.9375rem; /*flex-grow flex-shrink flex-basis */
    @media (min-width: 1199px) {
      margin-right: 5.625rem;
      margin-right: 3.125rem;
      flex: 0 0 26.25rem; /*flex-grow flex-shrink flex-basis */
    }
    @media (max-width: 767px) {
      align-items: center;
      text-align: center;
    }
  }

  .footer-content {
    display: grid;

    grid-template-columns: 2fr 1fr 2fr;
    gap: 60px;
  }

  .quick-links {
    flex-grow: 1;

    @media (max-width: 1024px) {
      margin-top: 1.875rem;
    }
    @media (max-width: 576px) {
      display: block !important;
      text-align: center;
      & > div {
        margin-bottom: 3rem;
      }
    }
    ul {
      li {
        margin-bottom: 1rem;
      }
    }
  }
  .social-link {
    li {
      background-color: var(--white);
      border-radius: 1.5625rem;
      padding: 0.25rem;
      width: 20px;
      height: 20px;
      font-size: 12px;
      color: var(--primary);
    }
  }
  .footer-bottom {
    @media (max-width: 576px) {
      text-align: center;
    }
  }
`;

export const CardProduct = styled.div`
  .tooltip {
    svg {
      fill: #565656 !important;
      background-color: #565656 !important;
    }
  }
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
