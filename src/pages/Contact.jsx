import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import { ModeContext } from '../context/ModeContext'
import { LangContext } from '../context/LangContext'

const Contact = () => {

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [description, setDescription] = useState();

  const form = useRef();

  const notifySuccess = () => toast.success("Please, check your email", {
    position: "top-center",
    autoClose: 3000,
  });
  const notifyWarning = () => toast.warning("Please enter all required fields.", {
    position: "top-center",
    autoClose: 3000,
  });


  const contactForm = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !phoneNumber || !description) {
      notifyWarning();
    } else {
      localStorage.setItem('Name', firstName)
      localStorage.setItem('Surname', lastName)
      localStorage.setItem('E-mail', email)
      localStorage.setItem('phoneNumber', phoneNumber)
      localStorage.setItem('description', description)

      emailjs
        .sendForm('service_e1qa4yg', 'template_etoglcm', form.current, {
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
    }
  }



  const { mode } = useContext(ModeContext)
  const { lang } = useContext(LangContext)


  return (
    <div className={mode ? "light" : "dark"}>
      <div className="contactus">
        <div className="heading py-5">
          <div className="container d-flex flex-column gap-4">
            <Link to="/" className='d-flex align-items-center gap-3'>
              <span className="svg-ic d-flex align-items-center justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="5" viewBox="0 0 11 5" fill="white">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10.5791 2.28954C10.5791 2.53299 10.3818 2.73035 10.1383 2.73035L1.52698 2.73048L2.5628 3.73673C2.73742 3.90636 2.74146 4.18544 2.57183 4.36005C2.40219 4.53467 2.12312 4.53871 1.9485 4.36908L0.133482 2.60587C0.0480403 2.52287 -0.000171489 2.40882 -0.000171488 2.2897C-0.000171486 2.17058 0.0480403 2.05653 0.133482 1.97353L1.9485 0.210321C2.12312 0.0406877 2.40219 0.044729 2.57183 0.219347C2.74146 0.393966 2.73742 0.673036 2.5628 0.842669L1.52702 1.84888L10.1383 1.84875C10.3817 1.84874 10.5791 2.04609 10.5791 2.28954Z" fill="white"></path>
                </svg>
              </span>
              <span className='fw-bold'>{lang ? "Geriyə qayıt" : "Back to home"}</span>
            </Link>
            <h5 className='fs-1 fw-bold'>{lang ? "Bizimlə əlaqə" : "Contact with us"}</h5>
            <p>{lang ? "Bunu nəzərə alaraq, istifadəçilərimizə dəqiq, etibarlı və cəlbedici məzmun təqdim etməyə çalışırıq. Mütəxəssislər, tədqiqatçılar və yazıçılardan ibarət komandamız texnologiya, elm, səhiyyə, biznes və s. kimi müxtəlif sahələri əhatə edən yüksək keyfiyyətli məqalələr, bələdçilər və resursları hazırlamaq üçün yorulmadan çalışır."
              : "With that in mind, we strive to deliver accurate, trustworthy, and engaging content to our users. Our team of experts, researchers, and writers work tirelessly to curate high-quality articles, guides, and resources that cover various domains such as technology, science, health, business, and more."}</p>
          </div>
        </div>

        <div className="contact py-5">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-5">
                <div className="content py-5">
                  <div className="row g-4">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                      <div className="call">
                        <h4 className='fw-bold'>{lang ? "Bizə zəng" : "Call US"}</h4>
                        <span>+48 0021-32-12</span>
                      </div>
                      <div className="email pt-4">
                        <h4 className='fw-bold'>{lang ? "E-poçt:" : "EMAIL:"}</h4>
                        <span><a href="mailto:shop@company.com">shop@company.com</a></span>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                      <div className="adress">
                        <h4 className='fw-bold'>{lang ? "ÜNVAN:" : "ADDRESS:"}</h4>
                        <span>1093 Marigold Lane, <br />Coral Way, Miami, <br />Florida, 33169</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-7">
                <div className="contact-form">
                  <div className="container">
                    <h2 className='title fw-bold'>{lang ? "Əlaqə Forması" : "Contact form"}</h2>
                  </div>
                  <form ref={form} onSubmit={contactForm} className='rounded mt-4'>
                    <div className="container">
                      <div className="row mt-1 mb-4 px-2 g-3">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                          <div className="form-group d-flex flex-column gap-2">
                            <label className='fw-bold'>{lang ? "Ad" : "First Name"}<sup className='text-danger'>*</sup>:</label>
                            <input onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="First name" />
                            <input name='user_name' value={localStorage.getItem("Name")} type="hidden" className="form-control" />
                          </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                          <div className="form-group d-flex flex-column gap-2">
                            <label className='fw-bold'>{lang ? "Soyad" : "Last Name"}<sup className='text-danger'>*</sup>:</label>
                            <input onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Last name" />
                          </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                          <div className="form-group d-flex flex-column gap-2 mt-2">
                            <label className='fw-bold'>{lang ? "E-poçt" : "Email"}<sup className='text-danger'>*</sup>:</label>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="shop@company.com" />
                          </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                          <div className="form-group d-flex flex-column gap-2 mt-2">
                            <label className='fw-bold'>{lang ? "Telefon nömrəsi" : "Phone Number"}<sup className='text-danger'>*</sup>:</label>
                            <input onChange={(e) => setPhoneNumber(e.target.value)} type="text" placeholder="Phone Number" />
                            <input name='phone_number' value={localStorage.getItem("phoneNumber")} type="hidden" className="form-control" />
                          </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                          <div className="form-group d-flex flex-column gap-2 mt-2">
                            <label className='fw-bold'>{lang ? "Təsvir" : "Description"}<sup className='text-danger'>*</sup>:</label>
                            <textarea onChange={(e) => setDescription(e.target.value)} cols="30" rows="7" placeholder="How Can We Help?"></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="btn pb-4">
                        <button type="submit" className='fw-bold d-flex align-items-center gap-2'>{lang ? "Mesaj Göndər" : "Send Message"}
                          <svg xmlns="http://www.w3.org/2000/svg"
                            width="35" height="14" viewBox="0 0 35 14" fill="none">
                            <path d="M25.0749 14L35 7L25.0805 0L29.12 6.06667H0V7.93333H29.12L25.0749 14Z"></path>
                          </svg>
                        </button>
                        <ToastContainer theme="dark" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact