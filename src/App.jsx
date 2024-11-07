import { useState } from 'react'
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Home from './Component/Pages/Home/Home';
import About from './Component/Pages/About/About';
import Projects from './Component/Pages/Projects/Projects';
import Contact from './Component/Pages/Contact/Contact';

function App() {
  const [ theme , setTheme ] = useState();

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/projects' element={ <Projects /> } />
        <Route path='/Contact' element={ <Contact /> } />
      </Routes>
    </Router>
  )
}

export default App