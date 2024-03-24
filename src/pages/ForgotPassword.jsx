import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import { ModeContext } from '../context/ModeContext'


const ForgotPassword = () => {

  const [fgemail, setFgemail] = useState("");

  const form = useRef();

  const notifyError = () => toast.error("This email is wrong!", {
    position: "top-center",
    autoClose: 3000,
  });
  const notifySuccess = () => toast.success("Please, check your email", {
    position: "top-center",
    autoClose: 3000,
  });

  const sendEmail = (e) => {
    e.preventDefault();
    if (fgemail === localStorage.getItem('email')) {
      emailjs
        .sendForm('service_q0vplzp', 'template_ws437es', form.current, {
          publicKey: 'wYb-eiZhMrk9OV0g9',
        })
        .then(
          () => {
            notifySuccess();
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    } else {
      notifyError();
    }
  };


  const { mode } = useContext(ModeContext)


  return (
    <div className={mode ? "light" : "dark"}>
      <div className="forgotpass d-flex align-items-center justify-content-center pb-5">
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
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-container py-3">
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                      <div className="form-group d-flex flex-column gap-2 p-2">
                        <input onChange={e => setFgemail(e.target.value)} type="email" placeholder="Email" />
                        <input name='fg_password' value={localStorage.getItem("password")} type="hidden" className="form-control" />
                        <input name='user_name' value={localStorage.getItem("fullname")} type="hidden" className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div className="form-footer p-4">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 d-flex gap-2">
                  <button to="/createaccount" className='fw-bold'>Submit</button>
                  <ToastContainer />
                  <Link to="/login" className='fw-bold'>Cancel</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword