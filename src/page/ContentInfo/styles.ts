import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const PageTitle = styled.h1`
  margin: 4rem 2rem;
  font-size: 5.4rem;
  line-height: 8rem;
  color: var(--gray-50);

  @media (min-width: 768px) {
    margin: 4rem 12rem;
  }
`;

export const PageLink = styled.a`
  margin: 4rem 2rem;
  font-size: 2.4rem;
  line-height: 8rem;
  color: var(--gray-50);
  
  &:hover {
      color: var(--primary);
    }

  @media (min-width: 768px) {
    margin: 4rem 12rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;  
  margin: 4rem 2rem;
  
  @media (min-width: 768px) {
    margin: 4rem 14rem;
  }
`;

export const Description = styled.div`
  color: white;
  text-align: center;
  font-size: 17px;
`;
