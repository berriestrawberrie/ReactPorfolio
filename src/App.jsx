
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Navbar from './navbar.jsx';
import './App.css'

function App() {
  return(
    <>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </>

  )//END OF RETURN
}

export default App
