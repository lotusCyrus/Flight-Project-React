import React from 'react'
import { Link } from 'react-router-dom'


export default function Topnav({children}) {
    return (
          <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light foi-navbar">
                  <Link className="navbar-brand" to="/"> <img  src='https://th.bing.com/th/id/OIP.e7g6qIw6lwS8Pt75ZdL7IgHaEe?pid=ImgDet&rs=1' style={{ width:'35px'}} alt='logo'/>
                      <b  style={{marginLeft:'5px',lineHeight:'20px',fontSize:'15px' }}>
  
                      Flight <br/>Speed </b>
                  </Link>
                  
                  <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="collapsibleNavId">
                      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                          <li className="nav-item active">
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="#">About</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="#">Features</Link>
                          </li>
                          <li className="nav-item dropdown">
                              <Link className="nav-link dropdown-toggle" to="#" id="pagesMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</Link>
                              <div className="dropdown-menu" aria-labelledby="pagesMenu">
                                  <Link className="dropdown-item" to="#">Blog</Link>
                                  <Link className="dropdown-item" to="#">Careers</Link>
                                 
                              </div>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="#">contact</Link>
                          </li>
                      </ul>
                      <ul className="navbar-nav mt-2 mt-lg-0">
                          {children}
                      </ul>
                  </div>
              </nav>
  
          </div>
    )
  }
  