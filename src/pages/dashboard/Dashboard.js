import React from 'react'
import './css/Dashnav.css'
import './css/Dashboard.css'
import Topnav from '../../components/nav/Topnav'
import { Link } from 'react-router-dom'
import Dashnav from './Dashnav'
export default function Dashboard() {
  return (
    <div className='dashboard'>
      
      <input type="checkbox" id="nav-toggle" />
    <Dashnav/>

    <div className='main-content'>
              <header>
              <div> <h3>
                <label for='nav-toggle'><span className='las la-bars'> </span></label>  
                  Dashboard
                </h3>    
                 </div>
                
                <div className='search-wrapper'>
                  <span class='las la-search'></span>
                  <input type='search' placeholder='Search Country'/>
                </div>
                <div className='user-wrapper'>
                  <img src='https://developers.tech2biz.net/images/frontend/default-user-male.png' width='40px' height='40px' alt=''/>
                  <div>

                  <h5>John</h5>
                <small>Tourist Account</small>
                  </div>
                </div>
               
              </header>

              <main className='main'>
                  <div className='cards'>
                  
                    <div className='card-single'>
                      <div>
                        <h1>54</h1>
                        <span>Flights Arriving</span>
                      </div>
                      <div>
                        <span className='las la-plane'></span>
                      </div>
                    </div>
                  
                    <div className='card-single'>
                      <div>
                        <h1>54</h1>
                        <span>Flights Departing</span>
                      </div>
                      <div>
                        <span className='las la-plane'></span>
                      </div>
                    </div>

                    <div className='card-single'>
                      <div>
                        <h1>54</h1>
                        <span>Total Flights</span>
                      </div>
                      <div>
                        <span className='las la-plane'></span>
                      </div>
                    </div>
                       


                  </div>
                </main>
          

        </div>
         
    </div>
  )
}
