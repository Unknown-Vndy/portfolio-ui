import { ImFacebook2 } from 'react-icons/im';
import { SiTwitter, SiInstagram, SiLinkedin } from 'react-icons/si';
import styled from 'styled-components';

function Footer () {
  return (
    <FooterContainer>
      <FooterLinks>
        <SocialLink href='https://facebook.com' target='_blank'>
          <ImFacebook2 />
        </SocialLink>
        <SocialLink href='https://instagram.com' target='_blank'>
          <SiInstagram />
        </SocialLink>
        <SocialLink href='https://twitter.com' target='_blank'>
          <SiTwitter />
        </SocialLink>
        <SocialLink href='https://linkedin.com' target='_blank'>
          <SiLinkedin />
        </SocialLink>
      </FooterLinks>
      <Copyright>Copyright ©2020 All rights reserved </Copyright>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  max-width: 855px;
  margin: 50px auto 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  @media (max-width: 800px) {
    margin-top: 20px;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 35px;
  flex-wrap: wrap;
  font-size: 2.5rem;
  margin-bottom: 25px;
  @media (max-width: 800px) {
    margin-bottom: 10px;
  }
`;

const SocialLink = styled.a``;

const Copyright = styled.p`
  margin-bottom: 50px;
  @media (max-width: 800px) {
    margin-bottom: 10px;
  }
`;
