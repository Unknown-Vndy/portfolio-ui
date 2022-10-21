import styled from 'styled-components';
import NavigationLink from './NavigationLink';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useEffect, useState } from 'react';

function NavMenu () {
  const [isMenu, setIsMenu] = useState(true);

  const toggleHandler = () => {
    setIsMenu(!isMenu);
  };

  return (
    <Menu>
      <Links>
        {isMenu ? (
          <Burger onClick={toggleHandler} />
        ) : (
          <Close onClick={toggleHandler} />
        )}
        <NavigationLink body={`Works`} />
        <NavigationLink body={`Blog`} />
        <NavigationLink body={`Contact`} />
      </Links>
    </Menu>
  );
}
{
}

export default NavMenu;

const Menu = styled.nav`
  display: flex;
  justify-content: flex-end;
`;

const Links = styled.div`
  display: flex;
  gap: 33px;
  text-align: center;
  flex-wrap: wrap;
`;

const Burger = styled(AiOutlineMenu)`
  font-size: 2rem;
  cursor: pointer;
`;

const Close = styled(AiOutlineClose)`
  font-size: 2rem;
  cursor: pointer;
`;
