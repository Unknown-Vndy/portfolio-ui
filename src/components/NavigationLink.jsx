import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function NavigationLink ({ to, body }) {
  return <Tab to={to}>{body}</Tab>;
}

export default NavigationLink;

const Tab = styled(NavLink)`
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  color: #000000;
  border: none;
  background: none;
  &:hover {
    color: #ff6464;
  }
`;
