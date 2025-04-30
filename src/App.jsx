
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home.jsx';
import Projects from './pages/projects.jsx';
import About from './pages/personal.jsx';
import Navbar from './navbar.jsx';
import './App.css'

function App() {
  return(
    <>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/project' element={<Projects/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </>

  )//END OF RETURN
}

export default App
