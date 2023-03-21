import styled from 'styled-components';
import Button from './button';

const DetailButton = styled(Button)`
  border: 2px solid ${(props) => props.theme.mainBlue};
  position: absolute;
  bottom: 60px;
`;

export default DetailButton;
