import styled from 'styled-components';

const ErrorDiv = styled.div`
  width: ${() => (window.innerWidth > 400 ? '400px' : '100vw')};
  height: 200px;
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.red};
  border-top: 30px solid ${(props) => props.theme.red};
  margin: auto;
  padding: 20px;
  padding-top: 50px;
  position: relative;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.white};
  font-size: 20px;
  text-align: center;
  z-index: 5;
`;

export default ErrorDiv;
