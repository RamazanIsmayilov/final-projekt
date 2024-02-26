import React from 'react'
import { Link } from 'react-router-dom'


const CreateAccount = () => {
  return (
    <div className="createaccount d-flex align-items-center justify-content-center">
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
          <div className="form-container py-3">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="form-group d-flex flex-column gap-2 p-2">
                    <label className='fw-bold'>First Name<sup className='text-danger'>*</sup>:</label>
                    <input type="text" placeholder="First name" />
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="form-group d-flex flex-column gap-2 p-2">
                    <label className='fw-bold'>Last Name<sup className='text-danger'>*</sup>:</label>
                    <input type="text" placeholder="Last name" />
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="form-group d-flex flex-column gap-2 p-2">
                    <label className='fw-bold'>E-mail<sup className='text-danger'>*</sup>:</label>
                    <input type="email" placeholder="Email" />
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
                  <input type="password" placeholder="Password" />
                </div>
                <div className="form-group d-flex flex-column gap-2 p-2">
                  <label className='fw-bold'>Again Password<sup className='text-danger'>*</sup>:</label>
                  <input type="password" placeholder="Password" />
                </div>
              </div>
            </div>
          </div>
          <div className="form-footer p-3">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 d-flex align-items-center justify-content-between">
                <Link to="/login" className='text-decoration-underline'>Already have an account?</Link>
                <button to="/createaccount" className='fw-bold d-flex align-items-center gap-2'>Create Account <svg xmlns="http://www.w3.org/2000/svg"
                  width="35" height="14" viewBox="0 0 35 14" fill="none">
                  <path d="M25.0749 14L35 7L25.0805 0L29.12 6.06667H0V7.93333H29.12L25.0749 14Z"></path>
                </svg>
                </button>
              </div>
            </div>
          </div>



        </div>
      </div>
    </div>
  )
}

export default CreateAccount