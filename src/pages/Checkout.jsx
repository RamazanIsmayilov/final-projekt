import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";
import { IoBagHandleOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { PiLockKeyThin } from "react-icons/pi";
import { VscQuestion } from "react-icons/vsc";
import { TiDeleteOutline } from "react-icons/ti";
import { useCart } from 'react-use-cart';

const Checkout = () => {

    const {
        isEmpty,
        items,
        updateItemQuantity,
        cartTotal,
    } = useCart();

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Checkout-Gaming WorkDo</title>
            </Helmet>

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
                                    <div className="account">
                                        <span>Account</span> <br />
                                        <input type="text" />
                                        <div className="form-check mt-4">
                                            <input className="form-check-input" type="checkbox" />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">Email me with news and offers</label>
                                        </div>
                                    </div>
                                    <div className="delivery mt-4">
                                        <h2 className='fw-bold'>Delivery</h2>
                                        <div className="row">
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                                <select className="form-select form-select-lg mt-3">
                                                    <option selected>United States</option>
                                                    <option value={1}>Australia</option>
                                                    <option value={2}>Canada</option>
                                                    <option value={3}>India</option>
                                                    <option value={3}>Japan</option>
                                                    <option value={3}>Malaysia</option>
                                                    <option value={3}>United Kingdom</option>
                                                </select>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                                <div className="input-group mt-3">
                                                    <input type="text" className="form-control" placeholder="First Name(optional)" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                                <div className="input-group mt-3">
                                                    <input type="text" className="form-control" placeholder="Last Name" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                                <div className="input-group mt-3">
                                                    <input type="text" className="form-control" placeholder="Address" />
                                                    <span class="input-group-text border-start-0" style={{ background: "white" }}><CiSearch /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="shipping mt-5">
                                        <h2 className='fw-bold'>Shipping method</h2>
                                        <div className="alert" role="alert">
                                            Enter your shipping address to view available shipping methods.
                                        </div>
                                    </div>
                                    <div className="payment mt-5">
                                        <h2 className='fw-bold'>Payment</h2>
                                        <p>All transactions are secure and encrypted.</p>
                                        <div className="pay-card rounded-2">
                                            <div className="heading rounded-top">
                                                <div className="container d-flex alig-items-center justify-content-between py-3">
                                                    <span>Credit card</span>
                                                    <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/f9cb6714da64e73281df.svg" alt="" />
                                                </div>
                                            </div>
                                            <div className="body py-4">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                                            <div className="input-group">
                                                                <input type="text" className="form-control" placeholder="Card number" />
                                                                <span class="input-group-text border-start-0" style={{ backgroundColor: "white" }}><PiLockKeyThin /></span>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                                            <div className="input-group mt-3">
                                                                <input type="text" className="form-control" placeholder="Expiration date (MM / YY)" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                                            <div className="input-group mt-3">
                                                                <input type="text" className="form-control" placeholder="Security code" />
                                                                <span class="input-group-text border-start-0" style={{ backgroundColor: "white" }}><VscQuestion /></span>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                                            <div className="input-group mt-3">
                                                                <input type="text" className="form-control" placeholder="Name on card" />
                                                                <span class="input-group-text border-start-0" style={{ backgroundColor: "white" }}><TiDeleteOutline /></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-check mt-3">
                                                        <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
                                                        <label className="form-check-label" for="flexCheckChecked">Use shipping address as billing address</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="button mt-4">
                                            <button className='rounded-2'>Pay now</button>
                                        </div>
                                    </div>
                                    <div className="footer">
                                        <span>All rights reserved Gaming WorkDo</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                {isEmpty ? <div className='text-center'><img width={300} src="https://squeezo.in/assets/images/empty-cart.png" alt='' /></div> :
                                    <div className="right">
                                        {items.map(item => (
                                            <div className="products d-flex align-items-center justify-content-between">
                                                <div className="d-flex align-items-center gap-4">
                                                    <div className="image mb-3">
                                                        <button type="button" className="btn btn-light p-1 position-relative border border-secondary-subtle">
                                                            <img src={item.image} alt="" />
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
                                                    <span>${item.price}.00 USD</span>
                                                </div>
                                            </div>
                                        ))}
                                        <div className="total d-flex align-items-center justify-content-between mt-3">
                                            <h5 className='fw-bold'>Total</h5>
                                            <h4 className='fw-bold'>{Math.round(cartTotal)}.00 USD</h4>
                                        </div>
                                    </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout