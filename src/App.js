import styled from 'styled-components';
import NavMenu from './components/NavMenu';
import IntroInfo from './components/IntroInfo';
import Intro from './components/Intro';

function App () {
  return (
    <Wrapper>
      <HeaderWrapper>
        <NavMenu />
        <Intro />
      </HeaderWrapper>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  max-width: 855px;
  margin: 0 auto;
`;

const HeaderWrapper = styled.header`
  background: white;
  margin-bottom: 71px;
  @media (max-width: 800px) {
    margin-bottom: 51px;
  }
`;
