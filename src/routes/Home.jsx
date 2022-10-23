import styled from 'styled-components';
import Intro from '../components/Intro';
import Posts from '../components/Posts';

const Layout = () => {};

function Home () {
  return (
    <>
      <HeaderWrapper>
        <Intro />
      </HeaderWrapper>

      <PostsWrapper>
        <Posts />
      </PostsWrapper>
    </>
  );
}

export default Home;

const HeaderWrapper = styled.header`
  background: white;
`;

const PostsWrapper = styled.div`
  background: #edf7fa;
  padding: 0 10px;
`;
