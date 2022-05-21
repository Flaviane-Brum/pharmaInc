import styled from "styled-components";
import { keyframes } from "styled-components";
const scale = keyframes`
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }
`;
export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  height: 100vh;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  padding: 0 1rem;
`;

export const Modal = styled.section`
  width: 100%;
  max-width: 600px;
  background-color: var(--brand-green-light);
  animation: ${scale} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;
export const HeaderModal = styled.header`
  display: flex;
  height: 50px;
  padding: 0.5rem;
  background-color: var(--brand-green);
  @media (max-width: 500px) {
    height: auto;
  }
  img {
    margin-left: auto;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: relative;
    top: -45px;
    box-shadow: 0 2px 2px 0px rgb(0 0 0 / 30%);
    @media (max-width: 500px) {
      top: 5px;
    }
  }
  a {
    text-align: center;
    width: 35px;
    height: 35px;
    margin-left: auto;
    font-weight: bold;
    padding: 0.5rem;
    border: 0;
    text-decoration: none;
    color: var();
    background-color: transparent;
    color: var(--brand-green-light);
    transition: color 0.3s;
    &:hover {
      color: var(--brand-green-hover);
    }
  }
`;
export const UserInfo = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: var(--brand-green);

  h2 {
    display: block;
    color: var(--brand-beige);
    font: var(--font-l);
  }
  @media (max-width: 500px) {
    padding: 1rem;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 1rem;
  h3 {
    font: var(--font-l);
    font-weight: 400;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--brand-green-hover);
  }
  ul {
    list-style: none;
    padding-top: 1rem;
    @media (max-width: 500px) {
      padding-top: 0.5rem;
    }
    li {
      padding: 0.2rem 0;
      font: var(--font-s);
      color: var(--brand-green);
      font-weight: 700;
      @media (max-width: 500px) {
        font: var(--font-xs);

        &:last-child {
          span {
            word-wrap: break-word;
          }
        }
      }

      span {
        color: var(--gray-paragraph);
        font-weight: 400;
      }
    }
  }
`;
