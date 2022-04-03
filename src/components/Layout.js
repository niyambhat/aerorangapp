import React, { Fragment } from 'react'
import Navigation from './Navigation'

function Layout({children}) {
  return (
      <Fragment >
        <Navigation/>
          <div className="wrap">      
            {children}</div>
      </Fragment>
    
  )
}

export default Layout