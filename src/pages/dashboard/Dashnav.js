import React from 'react'
import {span} from 'react-router-dom'
import {Link} from 'react-router-dom'
export default function Dashnav() {
  return (
      <div className='sidebar'>

        <div className='sidebar-brand'>
            <h2><span className='lab la-accusoft'> </span> <span> Flight <br/> Speed</span></h2>
        </div>
        <br/>     <br/>

        <div className='sidebar-menu'> 
           <ul>
            <li>
              <Link className='active'> <span className='las la-igloo'></span> <span>Dashboard</span></Link>
            </li>
         
            <li>
              <Link ><span className='las la-user '></span> <span>Track Flight</span></Link>
            </li>
            <li>
              <Link><span className='las la-igloo'></span> <span> Future Trips</span></Link>
            </li>
            <li>
              <Link><span className='las la-igloo'></span> <span>Your Tickets</span></Link>
            </li>
           </ul>
        </div>

      </div>
      
    
  
  )}
