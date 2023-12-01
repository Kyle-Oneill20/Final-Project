import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Components/Remove.js';


import Home from './Components/Home.js';
import About from './Components/About.js';
import Remove from './Components/Remove.js';
import Add from './Components/Add.js';
import Navbar from './Components/Navbar.js';

export default function App() {
  return (
    <>

      <Router>
        <div className='container-fluid justify-content'>
          <Navbar />
          <Switch>
            <Route path="/remove">
              <Remove />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/add">
              <Add />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}
