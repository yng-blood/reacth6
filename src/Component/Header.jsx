import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='Nav_bar'>
    <Link className='navbr' to='./' >Home</Link>
   <Link className='navbr' to='./Contactus' >Contactus</Link>
   <Link className='navbr' to='./Student' >Student</Link>
    </div>
  )
}

export default Header