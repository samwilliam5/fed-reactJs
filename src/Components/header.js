import './header.css';
import {Outlet} from 'react-router-dom'
import { Link } from "react-router-dom";


function Header(){
    return(
        <header>
            <div className="container">
                <div className="wrapper">
                    <div className="logo">
                        <h2>SWIGGY</h2>
                    </div>
                    <div className="nav-bar">
                        <ul>
                        <a href='#' className='nav'><li> Home</li></a>
                        <a href='#' className='nav'><li>About</li></a>
                       <a href='#' className='nav'><li>Help</li></a>
                        <a href='#' className='nav'><li>Sign-in</li></a>
                        <a href='#' className='nav'><li>Cart</li></a>
                        </ul>
                    </div>
                </div>
            </div>
            <Outlet></Outlet>

        </header>
    )
}

export default Header;