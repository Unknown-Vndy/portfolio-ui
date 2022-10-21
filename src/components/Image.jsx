import styled from 'styled-components';

function Image ({ src }) {
  return <MainImage src={src} />;
}

export default Image;

const MainImage = styled.img`
  border-radius: 50%;
  height: 243px;
  width: 243px;
  object-fit: cover;
  @media (max-width: 375px) {
    height: 180px;
    width: 180px;
  }
`;
