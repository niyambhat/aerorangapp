import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <div>
        <header>
            <div className="row">
                <div className="col-2">
                  <NavLink to='/'><img src="https://images.squarespace-cdn.com/content/v1/5ed90db2cfff4044ce404d4b/1618794602344-7FTDDC2UN5W224FLMQLP/aeroranger_logo_text_and_com.png?format=1500w" alt="" /></NavLink>            
                </div>
                <div className="col-10"><NavLink to='/dashboard' className='text-md'>ANPR Dashboard</NavLink></div>
            </div>
        </header>
    </div>
  )
}

export default Navigation