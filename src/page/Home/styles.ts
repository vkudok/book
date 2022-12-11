import styled from "styled-components";

export const Ul = styled.ul`
    color: white;
    font-size: 20px;
`;

export const Li = styled.li`
    &:hover {
      color: var(--primary);
    }
`;

export const PageTitle = styled.h1`
  margin: 4rem 2rem;
  font-size: 5.4rem;
  line-height: 8rem;
  color: var(--gray-50);

  @media (min-width: 768px) {
    margin: 4rem 12rem;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;  
  margin: 4rem 2rem;
  
  @media (min-width: 768px) {
    margin: 4rem 14rem;
  }
`;
