import { useState } from 'react'
import {useRef} from "react"
import {signup , logout, useAuth} from "./firebase-config"
import { Link } from 'react-router-dom'
import Topnav from '../../components/nav/Topnav'
import LoginImage from '../../asset/images/login.png'
import RegisterImage from '../../asset/images/register.png'
export default function Portal() {

const [loading, setLoading ] = useState(false);
const currentUser =useAuth();

const [login,setLogin]=useState(false)
const [logout,setLogout]= useState(false)
const emailRef=useRef();
const passwordRef=useRef();
//we use async because the handleSignup  should return a promise

async function handleSignup(){
            setLoading(true);   
    try{
        await signup(emailRef.current.value , passwordRef.current.value); 
    }
    catch{
         alert('error!') 
     }
     setLoading(false);
}

async function handleLogout(){
    setLoading(true)
     try{
     await logout()
    }
    catch {
        alert('error!')
    }
    setLoading(false)
}
  return (
    <div> 
    <Topnav>
       
    <li className="nav-item mr-2 mb-3 mb-lg-0">
       <Link className="btn btn-secondary" to="#" onClick={()=>setLogin(false)}>Sign up</Link>
    </li>
       {!currentUser && (<li className="nav-item">
            <Link className="btn btn-secondary" to="#" onClick={()=>setLogin(true)}>Log in</Link>
    </li>)}
    
     {currentUser && (<li className="nav-item ">
            <Link className="btn btn-secondary" to="#" onClick={handleLogout}>Log out </Link>
    </li>)}

    </Topnav>
     
    <div>Currently logged in as : { currentUser ?.email}</div>

{login &&(<main id="fields" className="page-auth">
        <div className="container">
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <section className="auth-wrapper">
                        <div className="row">
                           <div className="col-md-6 mb-4 mb-md-0">
                                <h2 className="auth-section-title">Log In</h2>
                                <p className="auth-section-subtitle">Sign in to your flight account to continue.</p>
                              
                                    <div className="form-group">
                                        <label htmlFor="email">Email <sup>*</sup></label>
                                        <input  type="email" className="form-control" id="email" name="email" placeholder="Email *"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password <sup>*</sup></label>
                                        <input type="password" className="form-control" id="password" name="password" placeholder="Password *"/>
                                    </div>
                                    <div className="form-actions-wrapper d-flex flex-wrap align-items-center justify-content-between">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="keepLogin"/>
                                            <label className="form-check-label" htmlFor="keepLogin">
                                                keep me login
                                            </label>
                                        </div>
                                        
                                        <a href="#!" className="forgot-password-link">Forgot password?</a>
                                    </div>
                                    <button className="btn btn-primary btn-auth-submit" type="submit">Submit</button>
                                <p className="mb-0">
                                    <Link to="" onClick={()=>setLogin(false)} className="text-dark font-weight-bold">New User? Sign Up</Link>
                                </p>
                            </div>
                            <div className="col-md-6 d-flex align-items-center">
                                <img src={LoginImage}  alt="portal-image" className="img-fluid"/>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </main>)}

    {!login &&(<main id="fields" className="page-auth">
        <div className="container">
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <section className="auth-wrapper">
                        <div className="row">
                            <div className="col-md-6 mb-4 mb-md-0">
                                <h2 className="auth-section-title">Register</h2>
                                <p className="auth-section-subtitle">Create your flight ccount to continue.</p>
                               
                                    <div className="form-group">
                                        <label htmlFor="email">Email <sup>*</sup></label>
                                        <input ref={emailRef} type="email" className="form-control" id="email" name="email" placeholder="Email"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password <sup>*</sup></label>
                                        <input ref={passwordRef} type="password" className="form-control" id="password" name="password" placeholder="Password"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="confirmPassword">Confirm Password <sup>*</sup></label>
                                        <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password"/>
                                    </div>
                                    <button disabled={loading}  onClick={handleSignup} className="btn btn-primary btn-auth-submit" type="submit">Create account</button>
                       
                                <p className="mb-0">
                                    <Link to="" onClick={()=>setLogin(true)} className="text-dark font-weight-bold">Already have an acocunt? Sign in</Link>
                                </p>
                            </div>
                            <div className="col-md-6 d-flex align-items-center">
                                <img src={RegisterImage} alt="login" className="img-fluid"/>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
     </main>)}

    
    </div>
  )
}
