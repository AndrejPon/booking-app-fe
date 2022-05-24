import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.div`
  display: flex;
  column-gap: 0.5rem;
`;

export const StyledLink = styled.a(Link)`
text-decoration: none;
font-size: 1rem;
color: antiquewhite;
`;
