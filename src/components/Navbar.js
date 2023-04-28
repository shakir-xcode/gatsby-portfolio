import React from 'react'
import { Link } from 'gatsby'

function Navbar() {
    return (
        <nav className='navbar'>
            <div>
                <Link to='/' ><h1>The Gatsby</h1></Link>
            </div>
            <div className='link-container'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects/">Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>

        </nav>
    )
}

export default Navbar