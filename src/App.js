
import './App.css';
import {BrowserRouter, NavLink, Routes,Route, Router} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Work from './components/Work';

import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <div>
        <Routes>
          <Route path='/work' element={<Work/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
