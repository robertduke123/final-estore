import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

const Footer = () => {
  return (
    <Fragment>
        <Outlet/>
    <div>
      Footer
    </div>
    </Fragment>
  )
}

export default Footer
