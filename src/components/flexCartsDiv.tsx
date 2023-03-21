import styled from 'styled-components';

const FlexCartsDiv = styled.div`
  flex-wrap: wrap;
  display: flex;
  width: 100%;
  max-width: 1000px;
  margin: auto;
  max-height: 850px;
  justify-content: space-evenly;
  overflow-y: auto;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: ${(props) => props.theme.mainBlue};
  }
`;

export default FlexCartsDiv;
