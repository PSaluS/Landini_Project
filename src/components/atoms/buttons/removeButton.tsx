import styled from 'styled-components';
import Button from './button';

const RemoveButton = styled(Button)`
  background-color: ${(props) => props.theme.red};
  color: ${(props) => props.theme.white};
  position: absolute;
  bottom: 10px;
`;

export default RemoveButton;
