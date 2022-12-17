import React from 'react'
import './LeftSideBar.css'
import {NavLink} from 'react-router-dom'
import Globe from '../../assets/Globe.svg'

const LeftSideBar = () => {
  return (
    <div className="left-sidebar">
      <nav className="side-nav">
        <NavLink to='/' className="side-nav-links home"  >
          <p className='para'>Home</p>
        </NavLink>
        <div>&emsp;</div>
        <div className="side-nav-div">
          <div className='public'><p>PUBLIC</p></div>
          <NavLink to='/Questions'className="side-nav-links" >
            <img className = "globe-img"src={Globe} alt="Globe" />
            <p style={{paddingLeft : "10px"}}>Questions</p>
          </NavLink>
          <div></div>
          <NavLink to='/Tags'className="side-nav-links"  >
            <p className='para'>Tags</p>
          </NavLink>
          <div></div>
          <NavLink to='/Users'className="side-nav-links" >
            <p className='para'>Users</p>
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default LeftSideBar