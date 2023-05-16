import React from 'react'
import logoWhite from '../../asset/images/logo-white.svg'
import iosImage from '../../asset/images/ios.svg'
import facebookImage from '../../asset/images/facebook.svg'
import instagramImage from '../../asset/images/instagram.svg'
import twitterImage from '../../asset/images/twitter.svg'
import youtubeImage from '../../asset/images/youtube.svg'
export default function Footer() {
    
  return (
   <footer className="foi-footer text-white">
        <div className="container">
            <div className="row footer-content">
                <div className="col-xl-6 col-lg-7 col-md-8">
                    <h2 className="mb-0">Do you want to know more or just have a question? write to us.</h2>
                </div>
                <div className="col-md-4 col-lg-5 col-xl-6 py-3 py-md-0 d-md-flex align-items-center justify-content-end">
                    <a href="contact.html" className="btn btn-danger btn-lg">Contact form</a>
                </div>
            </div>
            <div className="row footer-widget-area">
                <div className="col-md-3">
                    <div className="py-3">
                        <img src={logoWhite} alt="Flight Speed"/>
                    </div>

                    <p className="font-os font-weight-semibold mb3">Get our mobile app</p>
                    <div>
                        <button className="btn btn-app-download mr-2"><img src={iosImage} alt="App store"/></button>
                    </div>
                </div>

                <div className="col-md-3 mt-3 mt-md-0">
                    <p>
                      Account
                    </p>
                    <p>Tickets</p>
                    <p>Upcoming Trips</p>
                    <p>Track Flight</p>

                   
                </div>
            
        
                  
              
                <div className="col-md-3 mt-3 mt-md-0">
                    <p>
                        &copy; Flight Speed 2023
                    </p>
                    <p>All rights reserved.</p>
                    <nav className="social-menu">
                        <a href="#!"><img src={facebookImage} alt="facebook"/></a>
                        <a href="#!"><img src={instagramImage} alt="instagram"/></a>
                        <a href="#!"><img src={twitterImage} alt="twitter"/></a>
                        <a href="#!"><img src={youtubeImage} alt="youtube"/></a>
                    </nav>
                </div>
            </div>
        </div>
    </footer>
  )
}
