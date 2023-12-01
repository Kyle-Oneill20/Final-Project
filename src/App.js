import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './Components/Comp.css';
 import './Components/Remove.js';


import Home from './Components/Home.js';
import About from './Components/About.js';
 import Remove from './Components/Remove.js';
import Add from './Components/Add.js';

export default function App() {
  return(
    <Home></Home>,
<Router>
   <div className= 'container-fluid justify-content'>
        <nav className='navbar navbar-inverse text-center'>
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <Link to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">About Us!</Link>
            </li>
            <li className="nav-item">
              <Link to="/add">Check Your Pet In!</Link>
            </li>

            <li className="nav-item">
              <Link to="/remove">Check Your Pet Out!</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          { <Route path="/remove">
            <Remove />
          </Route> }

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
  )
  }
