import styled from "styled-components";

export const Header = styled.header`
  height: 60px;
  background: var(--brand-green);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AreaLogo = styled.a`
  display: flex;
  align-items: center;
  gap: 4px;
  font: var(--font-l);
  color: var(--white);
  font-weight: 400;
  span {
    color: var(--brand-green-light);
    font: var(--font-l);
    font-weight: 700;
  }
`;
export const AreaUser = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--brand-green-light);
`;
