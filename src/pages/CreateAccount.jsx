import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import '../assets/css/ReactToastify.css'

const CreateAccount = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [againPassword, setAgainPassword] = useState("");
  const navigate = useNavigate();


  const notifyWarning = () => toast.warning("Please enter all required fields.", {
    autoClose: 3000,
  });
  const notifyError = () => toast.error("Please enter the information correctly", {
    autoClose: 3000,
  });

  const registerForm = e => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password || !againPassword) {
      notifyWarning()
    } else {
      if(password === againPassword){
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        localStorage.setItem("login", false);
        navigate("/login")
      }
      else{
        notifyError();
      }
    }
  };

  return (
    <div className="createaccount d-flex align-items-center justify-content-center mb-5">
      <div className="container">
        <div className="heading d-flex align-items-center justify-content-center mt-5">
          <h2 className='fw-bold'>Register</h2>
        </div>
        <div className="login-form mt-5 rounded">
          <div className="head mt-2 p-2">
            <div className="container">
              <h4>Your Personal Details</h4>
            </div>
          </div>
          <form onSubmit={registerForm} >
            <div className="form-container py-3">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="form-group d-flex flex-column gap-2 p-2">
                      <label className='fw-bold'>First Name<sup className='text-danger'>*</sup>:</label>
                      <input onChange={e => { setFirstName(e.target.value) }} type="text" placeholder="First name" />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="form-group d-flex flex-column gap-2 p-2">
                      <label className='fw-bold'>Last Name<sup className='text-danger'>*</sup>:</label>
                      <input onChange={e => { setLastName(e.target.value) }} type="text" placeholder="Last name" />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="form-group d-flex flex-column gap-2 p-2">
                      <label className='fw-bold'>E-mail<sup className='text-danger'>*</sup>:</label>
                      <input onChange={e => { setEmail(e.target.value) }} type="email" placeholder="Email" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-bottom p-4">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                  <span className='fs-6'>Your <b>Password</b></span>
                  <div className="form-group d-flex flex-column gap-2 p-2">
                    <label className='fw-bold'>Password<sup className='text-danger'>*</sup>:</label>
                    <input onChange={e => { setPassword(e.target.value) }} type="password" placeholder="Password" />
                  </div>
                  <div className="form-group d-flex flex-column gap-2 p-2">
                    <label className='fw-bold'>Again Password<sup className='text-danger'>*</sup>:</label>
                    <input onChange={e => { setAgainPassword(e.target.value) }} type="password" placeholder="Password" />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-footer p-3 mx-3">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 d-flex align-items-center justify-content-between">
                  <Link to="/login" className='text-decoration-underline'>Already have an account?</Link>
                  <button  type="submit" className='fw-bold d-flex align-items-center gap-2'>Create Account <svg xmlns="http://www.w3.org/2000/svg"
                    width="35" height="14" viewBox="0 0 35 14" fill="none">
                    <path d="M25.0749 14L35 7L25.0805 0L29.12 6.06667H0V7.93333H29.12L25.0749 14Z"></path>
                  </svg>
                  </button>
                  <ToastContainer />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
