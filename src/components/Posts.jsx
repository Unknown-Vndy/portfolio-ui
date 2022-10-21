import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import posts from './../assets/posts/posts.json';

function Posts () {
  return (
    <PostsContainer>
      <PostsHeader>
        <p>Recent posts</p>
        <Link to='#'>View all</Link>
      </PostsHeader>

      <PostsFlex>
        {posts.map((post, i) => (
          <Post key={i}>
            <Title>{post.title}</Title>
            <MiddleInfo>
              <span>{post.date}</span>
              <span>{post.topic}</span>
            </MiddleInfo>
            <p>{post.body}</p>
          </Post>
        ))}
      </PostsFlex>
    </PostsContainer>
  );
}

export default Posts;
const PostsContainer = styled.div`
  max-width: 855px;
  margin: 0 auto;
`;

const PostsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 22px;
    line-height: 60px;
  }
  a {
    color: #00a8cc;
  }
  @media (max-width: 800px) {
    a {
      display: none;
    }
    justify-content: center;
    p {
      font-size: 18px;
    }
  }
`;

const PostsFlex = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding-bottom: 38px;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 17px;
  }
`;

const Post = styled.article`
  background: white;
  box-shadow: 0px 4px 10px rgba(187, 225, 250, 0.25);
  border-radius: 4px;
  padding: 24px 24px 7px;
  max-width: 418px;
  @media (max-width: 800px) {
    padding: 12px 19px 5px;
  }
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 26px;
  line-height: 38px;
  margin-bottom: 17px;

  @media (max-width: 800px) {
    font-size: 22px;
    line-height: 30px;
    margin-bottom: 12px;
  }
`;

const MiddleInfo = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  margin-bottom: 11px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const Body = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  @media (max-width: 800px) {
    font-size: 16px;
    line-height: 24px;
  }
`;
