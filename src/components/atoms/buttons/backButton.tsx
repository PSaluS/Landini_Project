import styled from 'styled-components';
import Button from './button';

const BackButton = styled(Button)`
  position: absolute;
  left: 10px;
  top: 10px;
  border: 2px solid ${(props) => props.theme.mainBlue};
`;

export default BackButton;
