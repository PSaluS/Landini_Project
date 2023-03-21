import styled from 'styled-components';

const Button = styled.button`
  border: none;
  box-shadow: 1px 1px 2px ${(props) => props.theme.shadow};
  width: 120px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  z-index: 1;
  font-weight: 600;
`;

export default Button;
