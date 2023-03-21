import styled from 'styled-components';

interface NavPI {
  here?: boolean;
}

const NavP = styled.p<NavPI>`
  font-weight: 600;
  font-size: 20px;
  padding: 10px;
  -webkit-text-stroke: 1px black;
  color: ${(props) =>
    props.here
      ? (props) => props.theme.mainBlue
      : (props) => props.theme.white};
  cursor: ${(props) => (props.here ? `default` : `pointer`)};
`;

export default NavP;
