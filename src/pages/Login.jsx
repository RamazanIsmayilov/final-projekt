import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
// import '../assets/css/ReactToastify.css'


const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const notifyWarning = () => toast.warning("Please enter all required fields.", {
    autoClose: 3000,
  });
  const notifyError = () => toast.error("Please enter the information correctly", {
    autoClose: 3000,
  });

  const loginForm = (e) => {
    e.preventDefault();
    if (!email || !password) {
      notifyWarning();
    } else {
      if (email === localStorage.getItem("email") && password === localStorage.getItem("password")) {
        localStorage.setItem('login','true');
        navigate("/")  
      } else {
        notifyError();
      }
    }
  }

  return (
    <div className="login d-flex align-items-center justify-content-center mb-5">
      <div className="container">
        <div className="heading d-flex align-items-center justify-content-center mt-5">
          <h2 className='fw-bold'>Log In</h2>
        </div>
        <div className="login-form mt-5 rounded">
          <div className="head mt-2 p-2">
            <div className="container">
              <h4>Log In</h4>
            </div>
          </div>
          <form onSubmit={loginForm}>
            <div className="form-container pb-3">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                  <span className='p-2 py-3 d-block'>I am a returning customer</span>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="form-group d-flex flex-column gap-2 p-2">
                    <label className='fw-bold'>E-mail<sup className='text-danger'>*</sup>:</label>
                    <input onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" />
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="form-group d-flex flex-column gap-2 p-2">
                    <label className='fw-bold'>Password<sup className='text-danger'>*</sup>:</label>
                    <input onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
                  </div>
                </div>
              </div>
            </div>
            </div>
            
            <div className="form-bottom p-4">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 d-flex align-items-center justify-content-end gap-3">
                  <Link to="/forgotpassword">Forgot Password?</Link>
                  <button className='fw-bold d-flex align-items-center gap-2'>Login <svg xmlns="http://www.w3.org/2000/svg"
                    width="35" height="14" viewBox="0 0 35 14" fill="none">
                    <path d="M25.0749 14L35 7L25.0805 0L29.12 6.06667H0V7.93333H29.12L25.0749 14Z"></path>
                  </svg>
                  </button>
                  <ToastContainer />
                </div>
              </div>
            </div>
          </form>
          <div className="form-footer p-4">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 d-flex align-items-center justify-content-center gap-3">
                <span>If you dont have account</span>
                <Link to="/createaccount" className='fw-bold d-flex align-items-center gap-2'>Register <svg xmlns="http://www.w3.org/2000/svg"
                  width="35" height="14" viewBox="0 0 35 14" fill="none">
                  <path d="M25.0749 14L35 7L25.0805 0L29.12 6.06667H0V7.93333H29.12L25.0749 14Z"></path>
                </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login