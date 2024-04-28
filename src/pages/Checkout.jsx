import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Helmet } from "react-helmet";
import { IoBagHandleOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { PiLockKeyThin } from "react-icons/pi";
import { VscQuestion } from "react-icons/vsc";
import { TiDeleteOutline } from "react-icons/ti";
import { TbDiscount2 } from "react-icons/tb";
import { useCart } from 'react-use-cart';
import { ToastContainer, toast } from 'react-toastify';
import { ModeContext } from '../context/ModeContext';
import { LangContext } from '../context/LangContext';

const Checkout = () => {

    const {
        isEmpty,
        items,
        cartTotal,
    } = useCart();

    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [date, setDate] = useState("");
    const [securityCode, setSecurityCode] = useState("");
    const [nameCard, setNameCard] = useState("");
    const [code, setCode] = useState("");
    const [discount, setDiscount] = useState("");
    const [total, setTotal] = useState("");

    const notifyError = () => toast.error("Not a valid code", {
        autoClose: 3000,
    });

    const notifyWarning = () => toast.warning("Please enter a valid input", {
        autoClose: 3000,
    });

    const notifySuccess = () => toast.success("Checkout completed successfully,thanks", {
        autoClose: 3000,
    });

    const navigate = useNavigate();

    const formSubmit = (e) => {
        e.preventDefault();
        if (localStorage.getItem("login") === 'true') {
            if (!email || !firstName || !lastName || !address || !cardNumber || !date || !securityCode || !nameCard) {
                notifyWarning();
            } else {
                if (code <= 50) {
                    setDiscount((cartTotal * code) / 100)
                    setTotal(cartTotal - ((cartTotal * code) / 100));
                    notifySuccess();
                    // navigate("/")
                } else if (code > 50) {
                    notifyError();
                }
            }
        } else {
            navigate("/login")
        }
    }

    const { mode } = useContext(ModeContext)
    const { lang } = useContext(LangContext)

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Checkout-Gaming WorkDo</title>
            </Helmet>

            <div className={`${mode ? "light" : "dark"}`}>
                <div className='checkoutpage mb-5'>
                    <div className="header py-4">
                        <div className="container d-flex align-items-center justify-content-between">
                            <div className='logo'><Link to="/" className='text-dark fw-bold'>Gaming WorkDo</Link></div>
                            <div className="icon">
                                <Link to="/cart">
                                    <IoBagHandleOutline />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="checkout mt-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                    <div className="left">
                                        <form onSubmit={formSubmit}>
                                            <div className="account">
                                                <span>{lang ? "Hesab" : "Account"}</span> <br />
                                                <input onChange={(e) => setEmail(e.target.value)} type="text" />
                                                <div className="form-check mt-4">
                                                    <input className="form-check-input" type="checkbox" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">{lang ? "Xəbərlər və təkliflər ilə mənə e-poçt göndərin" : "Email me with news and offers"}</label>
                                                </div>
                                            </div>
                                            <div className="delivery mt-4">
                                                <h2 className='fw-bold'>{lang ? "Çatdırılma" : "Delivery"}</h2>
                                                <div className="row">
                                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                                        <select defaultValue={"1"} className="form-select form-select-lg mt-3">
                                                            <option value="1" selected>{lang ? "Amerika Birləşmiş Ştatları" : "United States"}</option>
                                                            <option value="2">{lang ? "Avstraliya" : "Australia"}</option>
                                                            <option value="3">{lang ? "Kanada" : "Canada"}</option>
                                                            <option value="4">{lang ? "Hindistan" : "India"}</option>
                                                            <option value="5">{lang ? "Yaponiya" : "Japan"}</option>
                                                            <option value="6">{lang ? "Malayziya" : "Malaysia"}</option>
                                                            <option value="7">{lang ? "Birləşmiş Krallıq" : "United Kingdom"}</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                                        <div className="input-group mt-3">
                                                            <input onChange={(e) => setFirstName(e.target.value)} type="text" className="form-control" placeholder={`${lang ? "Ad (istəyə görə)" : "First Name(optional)"}`} />
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                                        <div className="input-group mt-3">
                                                            <input onChange={(e) => setLastName(e.target.value)} type="text" className="form-control" placeholder={`${lang ? "Soyad" : "Last Name"}`} />
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                                        <div className="input-group mt-3">
                                                            <input onChange={(e) => setAddress(e.target.value)} type="text" className="form-control" placeholder={`${lang ? "Ünvan" : "Address"}`} />
                                                            <span className="input-group-text border-start-0" style={{ background: "white" }}><CiSearch /></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="promo-code mt-5">
                                                <h2 className='fw-bold'>{lang ? "Promo Kodu" : "Promo Code"}</h2>
                                                <div className="code d-flex align-items-center gap-2 mt-3">
                                                    <TbDiscount2 className='icon fs-4' />
                                                    <span>{lang ? "Endirim kodu əlavə edin" : "Add discount code"}</span>
                                                </div>
                                                <div className="input-group mt-4">
                                                    <input onChange={(e) => setCode(e.target.value)} type="text" className="form-control py-2" placeholder={`${lang ? "Promo Kodu" : "Promo Code"}`} />
                                                    <button className="btn btn-secondary rounded-end-3 px-4" type='button'>{lang ? "Müraciət edin" : "Apply"}</button>
                                                    <ToastContainer />
                                                </div>
                                            </div>
                                            <div className="payment mt-5">
                                                <h2 className='fw-bold'>{lang ? "Ödəniş" : "Payment"}</h2>
                                                <p>{lang ? "Bütün əməliyyatlar təhlükəsiz və şifrələnmişdir." : "All transactions are secure and encrypted."}</p>
                                                <div className="pay-card rounded-2">
                                                    <div className="heading rounded-top">
                                                        <div className="container d-flex alig-items-center justify-content-between py-3">
                                                            <span>{lang ? "Kredit kartı" : "Credit card"}</span>
                                                            <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/f9cb6714da64e73281df.svg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="body py-4">
                                                        <div className="container">
                                                            <div className="row">
                                                                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                                                    <div className="input-group">
                                                                        <input onChange={(e) => setCardNumber(e.target.value)} type="text" className="form-control" placeholder={`${lang ? "Kartı nömrəsi" : "Card number"}`} />
                                                                        <span className="input-group-text border-start-0" style={{ backgroundColor: "white" }}><PiLockKeyThin /></span>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                                                    <div className="input-group mt-3">
                                                                        <input onChange={(e) => setDate(e.target.value)} type="text" className="form-control" placeholder={`${lang ? "Son istifadə tarixi (MM / YY)" : "Expiration date (MM / YY)"}`} />
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                                                    <div className="input-group mt-3">
                                                                        <input onChange={(e) => setSecurityCode(e.target.value)} type="text" className="form-control" placeholder={`${lang ? "Təhlükəsizlik kodu" : "Security code"}`} />
                                                                        <span className="input-group-text border-start-0" style={{ backgroundColor: "white" }}><VscQuestion /></span>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                                                    <div className="input-group mt-3">
                                                                        <input onChange={(e) => setNameCard(e.target.value)} type="text" className="form-control" placeholder={`${lang ? "Kart üzərindəki ad" : "Name on card"}`} />
                                                                        <span className="input-group-text border-start-0" style={{ backgroundColor: "white" }}><TiDeleteOutline /></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="form-check mt-3">
                                                                <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
                                                                <label className="form-check-label" htmlFor="flexCheckChecked">{lang ? "Göndərmə ünvanını faktura ünvanı kimi istifadə edin" : "Use shipping address as billing address"}</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="button mt-4">
                                                    <button className='rounded-2'>{lang ? "İndi ödə" : "Pay now"}</button>
                                                </div>
                                            </div>
                                        </form>
                                        <div className="footer">
                                            <span>{lang ? "Bütün hüquqlar Gaming WorkDo tərəfindən qorunur" : "All rights reserved Gaming WorkDo"}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                    {isEmpty ? <div className='text-center'><img width={300} src="https://squeezo.in/assets/images/empty-cart.png" alt='' /></div> :
                                        <div className="right mt-4">
                                            {items.map(item => (
                                                <div className="products d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center gap-4">
                                                        <div className="image mb-3">
                                                            <button type="button" className="btn btn-light p-1 position-relative border border-secondary-subtle">
                                                                <img width={70} src={item.image} alt="" />
                                                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                                                                    1
                                                                </span>
                                                            </button>
                                                        </div>
                                                        <div className="desc d-flex flex-column">
                                                            <span>{item.title}</span>
                                                            <span>{item.type}</span>
                                                        </div>
                                                    </div>
                                                    <div className="price">
                                                        <span>${item.price}.00</span>
                                                    </div>
                                                </div>
                                            ))}
                                            <div className="subtotal d-flex align-items-center justify-content-between mt-3">
                                                <p>{lang ? "Cəmi" : "Subtotal"}</p>
                                                <span className='fw-bold'>${Math.round(cartTotal)}.00</span>
                                            </div>
                                            {!discount ? <div className="discount d-flex align-items-center justify-content-between mt-3">
                                                <p>{lang ? "Endirim" : "Discount"}</p>
                                                <span className='fw-bold'>$0</span>
                                            </div> : <div className="discount d-flex align-items-center justify-content-between mt-3">
                                                <p>{lang ? "Endirim" : "Discount"}</p>
                                                <span className='fw-bold'>${discount}</span>
                                            </div>
                                            }
                                            {!total ? <div className="total d-flex align-items-center justify-content-between mt-3">
                                                <p className='fw-bold'>{lang ? "Ümumi" : "Total"}</p>
                                                <h4 className='fw-bold'>${Math.round(cartTotal)}.00</h4>
                                            </div> : <div className="total d-flex align-items-center justify-content-between mt-3">
                                                <p className='fw-bold'>{lang ? "Ümumi" : "Total"}</p>
                                                <h4 className='fw-bold'>${total}</h4>
                                            </div>}
                                        </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout