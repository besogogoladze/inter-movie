import React from 'react'
import { NavLink } from 'react-router-dom';
import './style.css'

function NavBar() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink className="mr-15" exact to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="mr-15" exact to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink className="mr-15" exact to="/user">User</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar;
