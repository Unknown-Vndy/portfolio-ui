import { Route, Routes } from 'react-router-dom';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Layout from './components/Layout';
import Works from './components/Works';
import Home from './routes/Home';

function App () {
  return (
    <Routes>
      <Route exact path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='works' element={<Works />} />
        <Route path='blog' element={<Blog />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;

// const Wrapper = styled.div`
//   max-width: 855px;
// `;
