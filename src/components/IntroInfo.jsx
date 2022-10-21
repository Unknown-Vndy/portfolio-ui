import styled from 'styled-components';
import PrimeButton from './PrimeButton';

function IntroInfo () {
  return (
    <Wrapper>
      <IntroHeader>Hi, I am John, Creative Technologist</IntroHeader>
      <IntroBody>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </IntroBody>
      <PrimeButton body={`Download resume`} />
    </Wrapper>
  );
}

export default IntroInfo;

const Wrapper = styled.div`
  max-width: 505px;
  margin-bottom: 71px;
  @media (max-width: 800px) {
    margin-bottom: 51px;
  }
`;

const IntroHeader = styled.h1`
  font-weight: 700;
  font-size: 44px;
  line-height: 60px;
  margin-bottom: 40px;
  @media (max-width: 800px) {
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 21px;
  }
`;

const IntroBody = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  margin-bottom: 38px;
  @media (max-width: 800px) {
    margin-bottom: 21px;
  }
`;
