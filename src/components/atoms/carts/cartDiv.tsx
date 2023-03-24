import styled from 'styled-components';

const CartDiv = styled.div`
  box-sizing: border-box;
  width: 200px;
  height: 150px;
  justify-content: center;
  border: 2px solid ${(props) => props.theme.mainBlue};
  border-radius: 20px;
  background-color: ${(props) => props.theme.white};
  margin: 10px;
  box-shadow: 2px 2px 3px ${(props) => props.theme.shadow};
  display: flex;
  position: relative;
  padding-top: 10px;
  color: ${(props) => props.theme.mainBlue};
  font-weight: 600;
  font-size: 20px;
`;

export default CartDiv;
