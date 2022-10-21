import styled from 'styled-components';

function PrimeButton ({ body }) {
  return <Button>{body}</Button>;
}

export default PrimeButton;

const Button = styled.button`
  width: 208px;
  height: 47px;
  border-radius: 8px;
  color: #ffffff;
  background: #ff6464;
  padding: 9px 21px 17px;
  font-size: 20px;
  line-height: 29px;
  font-weight: 500;
  overflow: hidden;
`;
