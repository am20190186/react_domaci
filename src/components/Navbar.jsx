import React from 'react'
import '../App'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div>
                <Link to="/">
                <h1>Explore podcasts</h1>
                </Link>
            </div>
            <div>
                 <Link to="/favorites"> 
                    <h3>Your favorites</h3>
                </Link>
            </div>
        </div>
    )
}

export default Navbar