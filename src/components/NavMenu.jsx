import styled from 'styled-components';
import NavigationLink from './NavigationLink';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useEffect, useState } from 'react';

function NavMenu () {
  return (
    <MenuContainer>
      <Burger />
      <Links>
        <NavigationLink to={'/works'} body={`Works`} />
        <NavigationLink to={'/blog'} body={`Blog`} />
        <NavigationLink to={'/contact'} body={`Contact`} />
      </Links>
    </MenuContainer>
  );
}

export default NavMenu;

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
  transition: 0.4s;
`;

const Close = styled(AiOutlineClose)`
  font-size: 2rem;
  cursor: pointer;
  transition: 0.4s;
`;
