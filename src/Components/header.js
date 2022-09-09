import './header.css';
import {Outlet} from 'react-router-dom'


function Header(){
    return(
        <header>
            <div className="container">
                <div className="wrapper">
                    <div className="logo">
                        <h2>SWIGGY</h2>
                    </div>
                    <div className="nav-bar">
                        <a href='' className='nav'>Home</a>
                        <a href='' className='nav'>About</a>
                        <a href='' className='nav'>Help</a>
                        <a href='' className='nav'>Sign-in</a>
                        <a href='' className='nav'>Cart</a>
                    </div>
                </div>
            </div>
            <Outlet></Outlet>

        </header>
    )
}

export default Header;