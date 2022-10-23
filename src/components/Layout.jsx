import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import NavMenu from './NavMenu';

function Layout () {
  return (
    <>
      <NavMenu />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
