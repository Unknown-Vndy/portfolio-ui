import styled from 'styled-components';
import NavigationLink from './NavigationLink';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useEffect, useState } from 'react';

const Menu = ({ open, setIsOpen }) => {
  if (open)
    return (
      <>
        <NavigationLink to={'/works'} body={`Works`} />
        <NavigationLink to={'/blog'} body={`Blog`} />
        <NavigationLink to={'/contact'} body={`Contact`} />
      </>
    );
  else return;
};

function NavMenu () {
  const [open, setIsOpen] = useState(false);
  useEffect(() => {
    console.log('open :>> ', open);
  }, [open]);
  return (
    <MenuContainer>
      <StyledMenu>
        <Burger onClick={() => setIsOpen(!open)} />
        <Menu open={open} />
      </StyledMenu>

      <Links>
        <NavigationLink to={'/works'} body={`Works`} />
        <NavigationLink to={'/blog'} body={`Blog`} />
        <NavigationLink to={'/contact'} body={`Contact`} />
      </Links>
    </MenuContainer>
  );
}

export default NavMenu;

const StyledMenu = styled.nav`
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #effffa;
  
  /* @media (max-width: 576px) {
    width: 100%;
    height: 100vh;
  } */

  /* transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  transition: transform 0.3s ease-in-out; */

  /* @media (max-width: 576px) {
    width: 100%;
  }
  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }
  } */
`;

const MenuContainer = styled.div`
  max-width: 855px;
  margin: 0 auto;
  padding: 10px 10px 0px;

  display: flex;
  justify-content: flex-end;
  margin-bottom: 70px;
  @media (max-width: 800px) {
    margin-bottom: 33px;
  }
`;

const Links = styled.nav`
  display: flex;
  gap: 33px;
  text-align: center;
  flex-wrap: wrap;
  @media (max-width: 799px) {
    display: none;
  }
`;

const Burger = styled(AiOutlineMenu)`
  font-size: 2rem;
  cursor: pointer;
  @media (min-width: 800px) {
    display: none;
  }
`;

const Close = styled(AiOutlineClose)`
  font-size: 2rem;
  cursor: pointer;
`;
