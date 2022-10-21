import styled from 'styled-components';
import NavMenu from './components/NavMenu';
import Intro from './components/Intro';
import Posts from './components/Posts';
import Footer from './components/Footer';

function App () {
  return (
    <>
      <NavMenu />
      <HeaderWrapper>
        <Intro />
      </HeaderWrapper>

      <PostsWrapper>
        <Posts />
      </PostsWrapper>

      <Footer />
    </>
  );
}

export default App;

// const Wrapper = styled.div`
//   max-width: 855px;
// `;

const HeaderWrapper = styled.header`
  background: white;
`;

const PostsWrapper = styled.div`
  background: #edf7fa;
  padding: 0 10px;
`;
