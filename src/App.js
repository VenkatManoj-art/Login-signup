import React from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Login from './Components/Login'
import Signup from './Components/Signup';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    // Navigations
    <Router>
      <div className='App'>
        <nav className='navbar navbar-expand-sm navbar-dark fixed-top'>
          <div className='container'>
           <Link className="navbar-brand" to={"/sign-in"}>Poster</Link>
           <div className='collapse navbar-collapse' id="navbarToggle">
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <Link className='nav-links' to={'/sign-in'}>Login</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-links' to={'/sign-up'}>Sign-up</Link>
              </li>
            </ul>
           </div>
          </div>
        </nav>

        <div className='auth'>
          <div className='auth-inner'>
            <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/sign-in' element={<Login/>}/>
            <Route path='/sign-up' element={<Signup/>}/>
            </Routes>
          </div>
        </div>
    </div>
    </Router>
  );
}

export default App;
