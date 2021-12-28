import React from 'react'
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import About from './Pages/About';
import Error from './Pages/Error';

const RouterTutorial =()=> {
    return (
        <div>
                 
      <Router>  
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/profile'>Profile</Link>
          </nav> 
          <Routes>
              <Route path='/' element={ <Home />} />
              <Route path='profile/:username' element={<Profile />}/>
              <Route path='profile/' element={<Profile />}/>
              <Route path='about' element={<About />}/>
              <Route path='*' element={<Error />} />
          </Routes>
          <footer>
            <p>This is Footer</p>
          </footer>
      </Router>
        </div>
    )
}

export default RouterTutorial
