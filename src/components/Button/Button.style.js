import styled from 'styled-components';

export const Button = styled.button`
  background: ${(props) => (props.bgcolor === 'green' ? 'lightgreen' : 'red')};
  border-radius: 1.5rem;
  border: none;
  box-shadow: 5px 5px 5px gray;
  color: ${(props) => (props.color === 'blue' ? 'blueviolet' : 'white')};
  cursor: pointer;
  font-weight: bold;
  min-width: ${(props) => (props.size === 'lg' ? '100%' : '10%')};
  height: 3rem;
  padding: 0.8rem;
`;
