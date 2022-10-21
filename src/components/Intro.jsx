import styled from 'styled-components';
import Image from './Image';
import IntroInfo from './IntroInfo';
import pic from './../assets/images/matt-bomer.jpg';
function Intro () {
  return (
    <Flex>
      <IntroInfo />
      <Image src={pic} />
    </Flex>
  );
}

export default Intro;

const Flex = styled.div`
  max-width: 855px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    img {
      order: -1;
      margin-bottom: 34px;
    }
  }
`;
