import styled from 'styled-components';
import { Link } from 'react-router-dom';

function NavigationLink ({ body }) {
  return <Tab>{body}</Tab>;
}

export default NavigationLink;

const Tab = styled(Link)`
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
