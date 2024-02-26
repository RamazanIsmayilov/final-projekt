import React from 'react'
import { Link } from 'react-router-dom'


const ForgotPassword = () => {
  return (
    <div className="login d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="heading d-flex align-items-center justify-content-center mt-5">
          <h2 className='fw-bold'>Reset your password</h2>
        </div>
        <div className="login-form mt-5 rounded">
          <div className="head mt-2 p-2">
            <div className="container">
              <h4>We will send you an email to reset your password</h4>
            </div>
          </div>
          <div className="form-container py-3">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="form-group d-flex flex-column gap-2 p-2">
                    <input type="email" placeholder="Email" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-footer p-4">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 d-flex gap-3">
                <button to="/createaccount" className='fw-bold'>Submit</button>
                <Link to="/login" className='fw-bold'>Cancel</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword