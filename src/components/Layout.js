import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

function Layout({ children }) {
    return (
        <div className='layout'>
            <Navbar />
            <div>
                {children}
            </div>
            <footer>
                copyright 2023, Gatsby Project
            </footer>
        </div>
    )
}

export default Layout