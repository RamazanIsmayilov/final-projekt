import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LangContext } from '../context/LangContext'
import { ModeContext } from '../context/ModeContext'



const Faq = () => {
    const { lang } = useContext(LangContext)
    const { mode } = useContext(ModeContext)


    return (
        <div className={`${mode ? "light" : "dark"}`}>
            <div className='faqpage'>
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
                        <h5 className='fs-1 fw-bold'>{lang ? "Tez-tez verilən suallar" : "Faq's"}</h5>
                        <p>{lang ? "İnsanlar həmişə kömək və məsləhət axtaracaqlar. Onlar telefonu götürmək, mağazaya girmək və məlumatın və ya məlumatın olması üçün saatlarla (hətta dəqiqələr) gözləmək istəmirlər."
                            : "People will always seek help and advice. They are unwilling to pick up the phone, walk into a store, or wait hours (even minutes) for that information or insight to become accessible."}</p>
                    </div>
                </div>

                <div className="faq py-5">
                    <div className="container">
                        <div className="row g-3">
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="accordion rounded-1">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            {lang ? "Fərdi sahələrlə səhifəni necə qurmaq olar?" : "How to setup a page with custom fields?"}
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse">
                                        <div className="accordion-body">{lang ? "Hesab yaratmaqla siz daha sürətli alış-veriş edə, sifarişin statusundan xəbərdar ola və əvvəllər etdiyiniz sifarişləri izləyə biləcəksiniz. Sifarişin statusu və əvvəllər etdiyiniz sifarişləri izləyin." :
                                            "By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made."}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="accordion rounded-1">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            {lang ? "Fərdi sahələrlə səhifəni necə qurmaq olar?" : "How to setup a page with custom fields?"}
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse">
                                        <div className="accordion-body">{lang ? "Hesab yaratmaqla siz daha sürətli alış-veriş edə, sifarişin statusundan xəbərdar ola və əvvəllər etdiyiniz sifarişləri izləyə biləcəksiniz. Sifarişin statusu və əvvəllər etdiyiniz sifarişləri izləyin." :
                                            "By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made."}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="accordion rounded-1">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            {lang ? "Fərdi sahələrlə səhifəni necə qurmaq olar?" : "How to setup a page with custom fields?"}
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse">
                                        <div className="accordion-body">{lang ? "Hesab yaratmaqla siz daha sürətli alış-veriş edə, sifarişin statusundan xəbərdar ola və əvvəllər etdiyiniz sifarişləri izləyə biləcəksiniz. Sifarişin statusu və əvvəllər etdiyiniz sifarişləri izləyin." :
                                            "By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made."}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4 g-3">
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="accordion rounded-1">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                            {lang ? "Fərdi sahələrlə səhifəni necə qurmaq olar?" : "How to setup a page with custom fields?"}
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFour" className="accordion-collapse collapse">
                                        <div className="accordion-body">{lang ? "Hesab yaratmaqla siz daha sürətli alış-veriş edə, sifarişin statusundan xəbərdar ola və əvvəllər etdiyiniz sifarişləri izləyə biləcəksiniz. Sifarişin statusu və əvvəllər etdiyiniz sifarişləri izləyin." :
                                            "By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made."}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="accordion rounded-1">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                            {lang ? "Fərdi sahələrlə səhifəni necə qurmaq olar?" : "How to setup a page with custom fields?"}
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFive" className="accordion-collapse collapse">
                                        <div className="accordion-body">{lang ? "Hesab yaratmaqla siz daha sürətli alış-veriş edə, sifarişin statusundan xəbərdar ola və əvvəllər etdiyiniz sifarişləri izləyə biləcəksiniz. Sifarişin statusu və əvvəllər etdiyiniz sifarişləri izləyin." :
                                            "By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made."}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="accordion rounded-1">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                            {lang ? "Fərdi sahələrlə səhifəni necə qurmaq olar?" : "How to setup a page with custom fields?"}
                                        </button>
                                    </h2>
                                    <div id="flush-collapseSix" className="accordion-collapse collapse">
                                        <div className="accordion-body">{lang ? "Hesab yaratmaqla siz daha sürətli alış-veriş edə, sifarişin statusundan xəbərdar ola və əvvəllər etdiyiniz sifarişləri izləyə biləcəksiniz. Sifarişin statusu və əvvəllər etdiyiniz sifarişləri izləyin." :
                                            "By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made."}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4 g-3">
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="accordion rounded-1">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                                            {lang ? "Fərdi sahələrlə səhifəni necə qurmaq olar?" : "How to setup a page with custom fields?"}
                                        </button>
                                    </h2>
                                    <div id="flush-collapseSeven" className="accordion-collapse collapse">
                                        <div className="accordion-body">{lang ? "Hesab yaratmaqla siz daha sürətli alış-veriş edə, sifarişin statusundan xəbərdar ola və əvvəllər etdiyiniz sifarişləri izləyə biləcəksiniz. Sifarişin statusu və əvvəllər etdiyiniz sifarişləri izləyin." :
                                            "By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made."}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="accordion rounded-1">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                                            {lang ? "Fərdi sahələrlə səhifəni necə qurmaq olar?" : "How to setup a page with custom fields?"}
                                        </button>
                                    </h2>
                                    <div id="flush-collapseEight" className="accordion-collapse collapse">
                                        <div className="accordion-body">{lang ? "Hesab yaratmaqla siz daha sürətli alış-veriş edə, sifarişin statusundan xəbərdar ola və əvvəllər etdiyiniz sifarişləri izləyə biləcəksiniz. Sifarişin statusu və əvvəllər etdiyiniz sifarişləri izləyin." :
                                            "By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made."}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="accordion rounded-1">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
                                            {lang ? "Fərdi sahələrlə səhifəni necə qurmaq olar?" : "How to setup a page with custom fields?"}
                                        </button>
                                    </h2>
                                    <div id="flush-collapseNine" className="accordion-collapse collapse">
                                        <div className="accordion-body">{lang ? "Hesab yaratmaqla siz daha sürətli alış-veriş edə, sifarişin statusundan xəbərdar ola və əvvəllər etdiyiniz sifarişləri izləyə biləcəksiniz. Sifarişin statusu və əvvəllər etdiyiniz sifarişləri izləyin." :
                                            "By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made."}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4 g-3">
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="accordion rounded-1">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
                                            {lang ? "Fərdi sahələrlə səhifəni necə qurmaq olar?" : "How to setup a page with custom fields?"}
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTen" className="accordion-collapse collapse">
                                        <div className="accordion-body">{lang ? "Hesab yaratmaqla siz daha sürətli alış-veriş edə, sifarişin statusundan xəbərdar ola və əvvəllər etdiyiniz sifarişləri izləyə biləcəksiniz. Sifarişin statusu və əvvəllər etdiyiniz sifarişləri izləyin." :
                                            "By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made."}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="accordion rounded-1">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseX" aria-expanded="false" aria-controls="flush-collapseX">
                                            {lang ? "Fərdi sahələrlə səhifəni necə qurmaq olar?" : "How to setup a page with custom fields?"}
                                        </button>
                                    </h2>
                                    <div id="flush-collapseX" className="accordion-collapse collapse">
                                        <div className="accordion-body">{lang ? "Hesab yaratmaqla siz daha sürətli alış-veriş edə, sifarişin statusundan xəbərdar ola və əvvəllər etdiyiniz sifarişləri izləyə biləcəksiniz. Sifarişin statusu və əvvəllər etdiyiniz sifarişləri izləyin." :
                                            "By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made."}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="accordion rounded-1">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseY" aria-expanded="false" aria-controls="flush-collapseY">
                                            {lang ? "Fərdi sahələrlə səhifəni necə qurmaq olar?" : "How to setup a page with custom fields?"}
                                        </button>
                                    </h2>
                                    <div id="flush-collapseY" className="accordion-collapse collapse">
                                        <div className="accordion-body">{lang ? "Hesab yaratmaqla siz daha sürətli alış-veriş edə, sifarişin statusundan xəbərdar ola və əvvəllər etdiyiniz sifarişləri izləyə biləcəksiniz. Sifarişin statusu və əvvəllər etdiyiniz sifarişləri izləyin." :
                                            "By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made."}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4 g-3">
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="accordion rounded-1">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseZ" aria-expanded="false" aria-controls="flush-collapseZ">
                                            {lang ? "Fərdi sahələrlə səhifəni necə qurmaq olar?" : "How to setup a page with custom fields?"}
                                        </button>
                                    </h2>
                                    <div id="flush-collapseZ" className="accordion-collapse collapse">
                                        <div className="accordion-body">{lang ? "Hesab yaratmaqla siz daha sürətli alış-veriş edə, sifarişin statusundan xəbərdar ola və əvvəllər etdiyiniz sifarişləri izləyə biləcəksiniz. Sifarişin statusu və əvvəllər etdiyiniz sifarişləri izləyin." :
                                            "By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made."}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="accordion rounded-1">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseA" aria-expanded="false" aria-controls="flush-collapseA">
                                            {lang ? "Fərdi sahələrlə səhifəni necə qurmaq olar?" : "How to setup a page with custom fields?"}
                                        </button>
                                    </h2>
                                    <div id="flush-collapseA" className="accordion-collapse collapse">
                                        <div className="accordion-body">{lang ? "Hesab yaratmaqla siz daha sürətli alış-veriş edə, sifarişin statusundan xəbərdar ola və əvvəllər etdiyiniz sifarişləri izləyə biləcəksiniz. Sifarişin statusu və əvvəllər etdiyiniz sifarişləri izləyin." :
                                            "By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made."}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="accordion rounded-1">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseC" aria-expanded="false" aria-controls="flush-collapseC">
                                            {lang ? "Fərdi sahələrlə səhifəni necə qurmaq olar?" : "How to setup a page with custom fields?"}
                                        </button>
                                    </h2>
                                    <div id="flush-collapseC" className="accordion-collapse collapse">
                                        <div className="accordion-body">{lang ? "Hesab yaratmaqla siz daha sürətli alış-veriş edə, sifarişin statusundan xəbərdar ola və əvvəllər etdiyiniz sifarişləri izləyə biləcəksiniz. Sifarişin statusu və əvvəllər etdiyiniz sifarişləri izləyin." :
                                            "By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made."}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq