import styled from 'styled-components';
import Button from './button';

const AddButton = styled(Button)`
  background-color: ${(props) => props.theme.mainBlue};
  box-shadow: 1px 1px 2px ${(props) => props.theme.shadow};
  color: ${(props) => [props.theme.white]};
  position: fixed;
  bottom: 10px;
  right: ${() =>
    window.innerWidth > 1000 ? (window.innerWidth - 1000) / 2 : 10}px;
`;

export default AddButton;
