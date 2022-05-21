import styled from "styled-components";

export const FormIput = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  position: relative;
  border-radius: 5px;
  input {
    flex: 1;
    padding: 1rem;
    border: 0;
    border-radius: 5px;
    font: var(--font-s);
    font-weight: 700;
    border: 1px solid #ccc;
    &:focus {
      outline: none;
      box-shadow: 0 0 0 1px #c0fff5;
      border-color: #212529;
    }
    &::placeholder {
      color: #ccc;
    }
    @media (max-width: 500px) {
      font: var(--font-xs);
      font-weight: 700;
    }
  }
  svg {
    position: absolute;
    border: 1px solid transparent;
    background-color: var(--white);
    right: 10px;
    top: 1px;
    height: 32px;
    border-radius: 0 5px 5px 0;
    &:focus {
      outline: none;
      border-color: transparent;
    }
  }
`;
