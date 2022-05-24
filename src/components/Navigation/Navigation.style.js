<<<<<<< HEAD
import { Link } from 'react-router-dom';
import styled from 'styled-components';
=======
import styled from 'styled-components';
import { Link } from 'react-router-dom';
>>>>>>> 64187e5e39a016f3febabd357f3e26af78cf92f5

export const Nav = styled.div`
  display: flex;
  column-gap: 0.5rem;
`;

<<<<<<< HEAD
export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
  color: antiquewhite;
=======
export const StyledLink = styled.a(Link)`
text-decoration: none;
font-size: 1rem;
color: antiquewhite;
>>>>>>> 64187e5e39a016f3febabd357f3e26af78cf92f5
`;
