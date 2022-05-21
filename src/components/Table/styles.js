import styled from "styled-components";
import { keyframes } from "styled-components";

const slideLeft = keyframes`
  0% {
    -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
`;
export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    margin-top: 1rem;
    font: var(--font-l);
    color: var(--brand-green-hover);
    align-self: flex-start;
  }
  button {
    margin-top: 1rem;
    border: 0;
    width: 220px;
    border-radius: 5px;
    padding: 0.5rem 2rem;
    font: var(--font-m);
    color: var(--brand-green-light-02);
    background: var(--brand-green);
    transition: background-color 0.3s;
    &:hover {
      background: var(--brand-green-hover);
    }
  }
`;
export const InputArea = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Select = styled.select`
  align-self: flex-start;
  margin: 2rem 0;
  appearance: none;
  border: 0;
  outline: 0;
  font: var(--font-s);
  width: 320px;
  height: 48px;
  border-radius: 5px;
  padding: 0 4rem 0 1rem;
  background: url(https://upload.wikimedia.org/wikipedia/commons/9/9d/Caret_down_font_awesome_whitevariation.svg)
      no-repeat right 0.8rem center / 1.4rem,
    linear-gradient(
      to left,
      var(--brand-green-hover) 3rem,
      var(--brand-green) 2rem
    );
  color: var(--white);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  option {
    background-color: var(--brand-green);
  }
  &:focus {
    outline: none;
  }

  &:-ms-expand {
    display: none;
  }
  @media (max-width: 500px) {
    margin: 1.5rem 0;
    width: 80%;
    font: var(--font-xs);
  }
`;
export const TableWrapper = styled.div`
  overflow-x: auto;
  width: 100%;
  animation: ${slideLeft} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  &::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }
  &::-webkit-scrollbar-track {
    background: var(--brand-green-hover);
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 20%);
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--brand-green);
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 20%);
  }
`;
export const Table = styled.table`
  width: 100%;
  background-color: var(--white);
  border-collapse: collapse;

  td {
    border: 1px solid var(--brand-green);
    padding: 0.5rem;
  }
`;
export const Thead = styled.thead`
  background-color: var(--brand-green);
  height: 50px;
  color: var(--white);

  th {
    font: var(--font-s);
    font-weight: 700;
    border: 1px solid var(--brand-green-hover);
    @media (max-width: 500px) {
      font: var(--font-xs);
      font-weight: 700;
    }
  }
`;

export const Tbody = styled.tbody`
  tr {
    text-align: center;
    font: var(--font-s);
    @media (max-width: 500px) {
      font: var(--font-xs);
    }
  }
  a {
    padding: 0.3rem 1rem;
    border-radius: 5px;
    width: fit-content;
    text-decoration: none;
    display: flex;
    align-items: center;
    background: var(--white);
    border: 1px solid var(--brand-green);
    color: var(--brand-green);
    font: var(--font-s);
    margin: 0 auto;
    gap: 6px;
    font-weight: 700;

    transition: ease 0.3s;
    &:hover {
      background: var(--brand-green);
      color: var(--white);
    }
    @media (max-width: 500px) {
      font: var(--font-xs);
      padding: 0.3rem 0.5rem;
      svg {
        display: none;
      }
    }
  }
`;
