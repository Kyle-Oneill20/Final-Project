import React from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import Home from './Components/Home.js'
import About from './Components/About.js'
import Page from './Components/page3.js'


export default function App() {
  return (
<Router>
   <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">Check in!</Link>
            </li>
            <li>
              <Link to="/page3">Check out!</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/page3">
            <Page/>
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}




