import {Link} from 'react-router-dom'


export default function Navbar(){
    return (
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
    )
}