import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.div`
  align-items: center;
  background: lightskyblue;
  color: darkblue;
  display: flex;
  font-weight: bold;
  height: 5rem;
  justify-content: space-between;
  padding: 0 1rem;
  text-align: center;
  @media screen {
    min-width: 440px;
  }
`;

export const Logo = styled.img`
  height: inherit;
`;
export const StyledLink = styled(Link)`
  height: inherit;
`;
