import React, { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './navigation.styles.scss'

const Navigation = () => {
  return (
    <Fragment>
    <div className='navigation-container'>
      <div className="logo-container">LOGO</div>
      <div className="navigation-links">
        <Link to='/shop'>
            <span className="nav-link">SHOP</span>
        </Link>
        
        <span className="nav-link">SIGN IN</span>
      </div>
    </div>
    <Outlet/>
    </Fragment>
  )
}

export default Navigation
