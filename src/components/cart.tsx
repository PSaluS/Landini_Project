import styled from 'styled-components';

const CartDiv = styled.div`
  width: 200px;
  height: 150px;
  justify-content: center;
  border: 2px solid ${(props) => props.theme.mainBlue};
  border-radius: 20px;
  background-color: ${(props) => props.theme.white};
  margin: 10px;
  box-shadow: 2px 2px 3px ${(props) => props.theme.shadow};
  display: flex;
  cursor: pointer;
`;

export default CartDiv;
