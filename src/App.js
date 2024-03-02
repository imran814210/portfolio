
import './App.css';
import {BrowserRouter, NavLink, Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Work from './components/Work';
import mypicture from './Asset/mypic.jpg'

function App() {
  return (
    <><div className="flex justify-between w-full h-[50px] bg-red-400">
      <div className='bg-indigo-300 text-white w-full h-full bg-red-400 flex justify-end align-middle'>
        <ul className='flex items-center'>
          <li className='pr-4 '><span className='hover:underline decoration-4 hover:cursor-pointer'><NavLink to="/work">Work</NavLink></span></li>
          <li className='pr-4'><span className='hover:underline decoration-4 hover:cursor-pointer'><NavLink to="/about">About</NavLink></span></li>
          <li className='pr-4'><span className='hover:underline decoration-4 hover:cursor-pointer'><NavLink to="/contact">Contact</NavLink></span></li>
          <li className=' pr-4'><span className='hover:underline decoration-4 hover:cursor-pointer'><NavLink to="/">Home</NavLink></span></li>
        </ul>

      </div>
      <div className=''>
        <img src={mypicture} className='rounded-full w-[50px] h-full mr-2 hover:cursor-pointer'></img>
      </div>
    </div>
    <div>
      <BrowserRouter>
        <Routes>
            <Route exact path='/'  element={<Home/>} />
            <Route path='/about' exact element={<About/>} />
            <Route path='/contact' exact element={<Contact/>} />
            <Route path='/work' exact element={<Work/>} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
