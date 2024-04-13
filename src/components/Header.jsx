import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from 'react-use-cart';
import { ProductContext } from '../context/ProductContext';
import { LangContext } from '../context/LangContext';
import { BsFillMoonFill } from "react-icons/bs";
import { RiSunLine } from "react-icons/ri";
import { TbDiscount2 } from "react-icons/tb";
import { BsCartX } from "react-icons/bs";

const Header = () => {

  const {
    isEmpty,
    items,
    removeItem,
    totalItems,
    cartTotal,
  } = useCart();

  const [product] = useContext(ProductContext)
  const [query, setQuery] = useState(null);
  const navigate = useNavigate();

  const menu = useRef();
  const openMenu = () => {
    menu.current.classList.add('open');
  }

  const closeMenu = () => {
    menu.current.classList.remove('open');
  }

  const cartMenu = useRef();
  const openCartMenu = () => {
    cartMenu.current.classList.add('open');
  }

  const closeCartMenu = () => {
    cartMenu.current.classList.remove('open');
  }

  const cartFunc = () => {
    localStorage.getItem("login") === 'true' ? navigate("/") : navigate("/login")
    openCartMenu();
  }

  const { lang, langModeFunc, langMode } = useContext(LangContext)

  const [mode, setMode] = useState(localStorage.getItem("myMode") == null ? "light" : localStorage.getItem("myMode"));

  useEffect(() => {

    if (localStorage.getItem("myMode") == null) {
      localStorage.setItem("myMode", "light");
    } else {
      localStorage.setItem("myMode", mode);
    }

    document.body.className = mode;

  }, [mode])

  const modeFunc = () => {
    if (mode == "light") {
      setMode("dark")
    } else {
      setMode("light")
    }
  }

  return (
    <>
      <header>
        <div className="container">
          <nav className="navbar py-3">
            <div className="navbar-left d-flex gap-4">
              <Link className="title" to="/">Home</Link>
              <Link className="title" to="/about">About</Link>
              <Link className="title" to="/contact">Contact</Link>
              <Link className="title" to="/products">Store</Link>
              <Link className="title" to="/blog">Blog</Link>
            </div>
            <div className="logo me-5">
              <Link to="/">
                <img src="https://gaming-workdo.myshopify.com/cdn/shop/files/logo_aceeaa59-f6d4-423f-86f0-8c025cf33812.png?v=1671601485" alt="logo" />
              </Link>
            </div>
            <div className="navbar-right d-flex align-items-center gap-3">
              <div className="admin">
                {localStorage.getItem('login') === 'true' ? <div className='d-flex justify-content-center align-items-center'>
                  <li><a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} viewBox="0 0 13 13" fill="white">
                      <path fillRule="evenodd" clipRule="evenodd" d="M6.5 7.04159C4.40592 7.04159 2.70833 8.73917 2.70833 10.8333V11.9166C2.70833 12.2157 2.46582 12.4583 2.16667 12.4583C1.86751 12.4583 1.625 12.2157 1.625 11.9166V10.8333C1.625 8.14086 3.80761 5.95825 6.5 5.95825C9.19239 5.95825 11.375 8.14086 11.375 10.8333V11.9166C11.375 12.2157 11.1325 12.4583 10.8333 12.4583C10.5342 12.4583 10.2917 12.2157 10.2917 11.9166V10.8333C10.2917 8.73917 8.59408 7.04159 6.5 7.04159Z" fill="white" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M6.5 5.95841C7.69662 5.95841 8.66667 4.98837 8.66667 3.79175C8.66667 2.59513 7.69662 1.62508 6.5 1.62508C5.30338 1.62508 4.33333 2.59513 4.33333 3.79175C4.33333 4.98837 5.30338 5.95841 6.5 5.95841ZM6.5 7.04175C8.29493 7.04175 9.75 5.58667 9.75 3.79175C9.75 1.99682 8.29493 0.541748 6.5 0.541748C4.70507 0.541748 3.25 1.99682 3.25 3.79175C3.25 5.58667 4.70507 7.04175 6.5 7.04175Z" fill="white" />
                    </svg>
                  </a>
                    <ul className="dropdown">
                      <li className='hello-user text-center'>{localStorage.getItem("firstName")}</li>
                      <li><button className='logoutbtn p-0' onClick={() => {
                        localStorage.setItem("login", 'false');
                        window.location.assign('/login');
                      }}>Log out</button></li>
                      <li><Link to="/login">Log in</Link></li>
                      <li><Link to="/createaccount">Create Account</Link></li>
                      <li><Link to="/wishlist">Wishlist</Link></li>
                    </ul>
                  </li>
                </div> : <li><a href="/">
                  <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} viewBox="0 0 13 13" fill="white">
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.5 7.04159C4.40592 7.04159 2.70833 8.73917 2.70833 10.8333V11.9166C2.70833 12.2157 2.46582 12.4583 2.16667 12.4583C1.86751 12.4583 1.625 12.2157 1.625 11.9166V10.8333C1.625 8.14086 3.80761 5.95825 6.5 5.95825C9.19239 5.95825 11.375 8.14086 11.375 10.8333V11.9166C11.375 12.2157 11.1325 12.4583 10.8333 12.4583C10.5342 12.4583 10.2917 12.2157 10.2917 11.9166V10.8333C10.2917 8.73917 8.59408 7.04159 6.5 7.04159Z" fill="white" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.5 5.95841C7.69662 5.95841 8.66667 4.98837 8.66667 3.79175C8.66667 2.59513 7.69662 1.62508 6.5 1.62508C5.30338 1.62508 4.33333 2.59513 4.33333 3.79175C4.33333 4.98837 5.30338 5.95841 6.5 5.95841ZM6.5 7.04175C8.29493 7.04175 9.75 5.58667 9.75 3.79175C9.75 1.99682 8.29493 0.541748 6.5 0.541748C4.70507 0.541748 3.25 1.99682 3.25 3.79175C3.25 5.58667 4.70507 7.04175 6.5 7.04175Z" fill="white" />
                  </svg>
                </a>
                  <ul className="dropdown">
                    <li><Link to="/login">Log in</Link></li>
                    <li><Link to="/createaccount">Create Account</Link></li>
                    <li><Link to="/wishlist">Wishlist</Link></li>
                  </ul>
                </li>}
              </div>
              <div className='language '>
                <button onClick={langModeFunc} className='btn p-0 text-light'>{langMode ? "Az" : "En"}</button>
              </div>
              <div className="mode">
                <button onClick={modeFunc} className='btn p-0 text-light'>{mode === "light" ? <BsFillMoonFill style={{ fontSize: "19px" }} /> : <RiSunLine style={{ fontSize: "19px" }} />}</button>
              </div>
              <div className="cart d-flex align-items-center gap-2">
                <div className='text-light fw-bold d-flex flex-column'>
                  <span>MyCart</span>
                  <span>{localStorage.getItem("login") === 'true' ? cartTotal : "0"}.00 USD</span>
                </div>
                <button onClick={cartFunc} className="btn position-relative p-0">
                  <svg width="23" height="23" viewBox="0 0 19 19" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.91797 15.834C7.91797 17.1457 6.85465 18.209 5.54297 18.209C4.23129 18.209 3.16797 17.1457 3.16797 15.834C3.16797 14.5223 4.23129 13.459 5.54297 13.459C6.85465 13.459 7.91797 14.5223 7.91797 15.834ZM6.33464 15.834C6.33464 16.2712 5.98019 16.6257 5.54297 16.6257C5.10574 16.6257 4.7513 16.2712 4.7513 15.834C4.7513 15.3968 5.10574 15.0423 5.54297 15.0423C5.98019 15.0423 6.33464 15.3968 6.33464 15.834Z" fill="white"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.8346 15.834C15.8346 17.1457 14.7713 18.209 13.4596 18.209C12.148 18.209 11.0846 17.1457 11.0846 15.834C11.0846 14.5223 12.148 13.459 13.4596 13.459C14.7713 13.459 15.8346 14.5223 15.8346 15.834ZM14.2513 15.834C14.2513 16.2712 13.8969 16.6257 13.4596 16.6257C13.0224 16.6257 12.668 16.2712 12.668 15.834C12.668 15.3968 13.0224 15.0423 13.4596 15.0423C13.8969 15.0423 14.2513 15.3968 14.2513 15.834Z" fill="white"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.66578 2.01983C1.86132 1.62876 2.33685 1.47025 2.72792 1.66578L3.52236 2.06301C4.25803 2.43084 4.75101 3.15312 4.82547 3.97225L4.86335 4.38888C4.88188 4.59276 5.05283 4.74887 5.25756 4.74887H15.702C17.0838 4.74887 18.0403 6.12909 17.5551 7.42297L16.1671 11.1245C15.8195 12.0514 14.9333 12.6655 13.9433 12.6655H6.19479C4.96644 12.6655 3.94076 11.7289 3.82955 10.5056L3.24864 4.1156C3.22382 3.84255 3.05949 3.60179 2.81427 3.47918L2.01983 3.08196C1.62876 2.88643 1.47025 2.41089 1.66578 2.01983ZM5.47346 6.3322C5.2407 6.3322 5.05818 6.53207 5.07926 6.76388L5.40638 10.3622C5.44345 10.77 5.78534 11.0822 6.19479 11.0822H13.9433C14.2733 11.0822 14.5687 10.8775 14.6845 10.5685L16.0726 6.86702C16.1696 6.60825 15.9783 6.3322 15.702 6.3322H5.47346Z" fill="white"></path>
                  </svg>
                  <span className="position-absolute top-0 start-10 translate-middle badge rounded-pill bg-primary">
                    {localStorage.getItem("login") === 'true' ? totalItems : "0"}
                  </span>
                </button>
                <div className="cart-menu" ref={cartMenu}>
                  <div className="heading d-flex align-items-center justify-content-between px-2 py-1">
                    <div className='d-flex align-items-center gap-2'>
                      <button onClick={closeCartMenu} className="close-btn fs-3 text-light">
                        <i className="fa-solid fa-xmark" />
                      </button>
                      <h4 className='text-light fw-bold mt-1'>My Cart</h4>
                    </div>
                    <span className='fw-bold text-light'>{totalItems} ITEMS</span>
                  </div>
                  <div className="body p-3">
                    {isEmpty ? <div className='text-center my-3'><BsCartX style={{ fontSize: "80px" }} /><p className='fw-bold mt-3 fs-6'>Your cart is empty
                    </p></div> : <div>
                      {items.map(item => (
                        <div className="products d-flex align-items-center gap-5 py-3">
                          <div className="image p-1">
                            <img width={90} src={item.image} alt="" />
                          </div>
                          <div className="content">
                            <h5>{item.title.slice(0, 25)}...</h5>
                            <p><span className='fw-bold'>Brand:</span> {item.brand}</p>
                            <div className='d-flex align-items-center justify-content-between'>
                              <span className='fw-bold'>{item.price}.00 USD</span>
                              <button onClick={() => removeItem(item.id)}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="dark">
                                <path d="M12.7589 7.24609C12.5002 7.24609 12.2905 7.45577 12.2905 7.71448V16.5669C12.2905 16.8255 12.5002 17.0353 12.7589 17.0353C13.0176 17.0353 13.2273 16.8255 13.2273 16.5669V7.71448C13.2273 7.45577 13.0176 7.24609 12.7589 7.24609Z" fill="dark"></path>
                                <path d="M7.23157 7.24609C6.97286 7.24609 6.76318 7.45577 6.76318 7.71448V16.5669C6.76318 16.8255 6.97286 17.0353 7.23157 17.0353C7.49028 17.0353 7.69995 16.8255 7.69995 16.5669V7.71448C7.69995 7.45577 7.49028 7.24609 7.23157 7.24609Z" fill="dark"></path>
                                <path d="M3.20333 5.95419V17.4942C3.20333 18.1762 3.45344 18.8168 3.89035 19.2764C4.32525 19.7373 4.93049 19.9989 5.56391 20H14.4259C15.0594 19.9989 15.6647 19.7373 16.0994 19.2764C16.5363 18.8168 16.7864 18.1762 16.7864 17.4942V5.95419C17.6549 5.72366 18.2177 4.8846 18.1016 3.99339C17.9852 3.10236 17.2261 2.43583 16.3274 2.43565H13.9293V1.85017C13.932 1.35782 13.7374 0.885049 13.3888 0.537238C13.0403 0.18961 12.5668 -0.00396362 12.0744 6.15416e-05H7.91533C7.42298 -0.00396362 6.94948 0.18961 6.60093 0.537238C6.25239 0.885049 6.05772 1.35782 6.06046 1.85017V2.43565H3.66238C2.76367 2.43583 2.00456 3.10236 1.8882 3.99339C1.77202 4.8846 2.33481 5.72366 3.20333 5.95419ZM14.4259 19.0632H5.56391C4.76308 19.0632 4.14009 18.3753 4.14009 17.4942V5.99536H15.8497V17.4942C15.8497 18.3753 15.2267 19.0632 14.4259 19.0632ZM6.99723 1.85017C6.99412 1.60628 7.08999 1.37154 7.26307 1.19938C7.43597 1.02721 7.67126 0.932619 7.91533 0.936827H12.0744C12.3185 0.932619 12.5538 1.02721 12.7267 1.19938C12.8998 1.37136 12.9956 1.60628 12.9925 1.85017V2.43565H6.99723V1.85017ZM3.66238 3.37242H16.3274C16.793 3.37242 17.1705 3.74987 17.1705 4.21551C17.1705 4.68114 16.793 5.05859 16.3274 5.05859H3.66238C3.19674 5.05859 2.81929 4.68114 2.81929 4.21551C2.81929 3.74987 3.19674 3.37242 3.66238 3.37242Z" fill="dark"></path>
                                <path d="M9.99523 7.24609C9.73653 7.24609 9.52686 7.45577 9.52686 7.71448V16.5669C9.52686 16.8255 9.73653 17.0353 9.99523 17.0353C10.2539 17.0353 10.4636 16.8255 10.4636 16.5669V7.71448C10.4636 7.45577 10.2539 7.24609 9.99523 7.24609Z" fill="dark"></path>
                                <defs><clipPath><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>}
                  </div>
                  <div className="footer">
                    <div className="container">
                      <div className="head d-flex align-items-center gap-2 mt-3">
                        <TbDiscount2 className='fs-4' />
                        <span>Add discount code</span>
                      </div>
                      <div className="input-group mt-4">
                        <input type="text" className="form-control py-2" placeholder="Promo code" />
                        <button className="btn btn-secondary px-4" type='button'>Apply</button>
                      </div>
                      <div className="subtotal d-flex align-items-center justify-content-between mt-3">
                        <h4 className='fw-bold'>Subtotal:</h4>
                        <h3 className='fw-bold'>{Math.round(cartTotal)}.00USD</h3>
                      </div>
                      <div className="footer mt-4">
                        <Link to="checkout" className='button gap-2 fw-bold d-flex align-items-center justify-content-center mx-5'>Proceed to checkout
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="white">
                            <path d="M9.99991 11.2133C9.077 11.2145 8.18225 10.8948 7.46802 10.3089C6.75378 9.72305 6.26423 8.90709 6.08273 8.00001C6.06826 7.90447 6.07469 7.80691 6.10157 7.7141C6.12845 7.62129 6.17514 7.53544 6.2384 7.46252C6.30166 7.38959 6.37998 7.33132 6.46794 7.29175C6.55589 7.25218 6.65138 7.23225 6.74778 7.23335C6.90622 7.23104 7.06027 7.28551 7.1822 7.38696C7.30413 7.4884 7.38592 7.63015 7.41284 7.78668C7.53809 8.38596 7.86526 8.92378 8.33939 9.3098C8.81351 9.69582 9.40572 9.90653 10.0165 9.90653C10.6273 9.90653 11.2196 9.69582 11.6937 9.3098C12.1678 8.92378 12.495 8.38596 12.6202 7.78668C12.6472 7.63015 12.7289 7.4884 12.8509 7.38696C12.9728 7.28551 13.1268 7.23104 13.2853 7.23335C13.3817 7.23225 13.4772 7.25218 13.5651 7.29175C13.6531 7.33132 13.7314 7.38959 13.7947 7.46252C13.8579 7.53544 13.9046 7.62129 13.9315 7.7141C13.9584 7.80691 13.9648 7.90447 13.9503 8.00001C13.7678 8.91273 13.2733 9.73303 12.5522 10.3196C11.8311 10.9061 10.9285 11.2222 9.99991 11.2133Z" fill="white"></path>
                            <path d="M15.9189 20H4.08092C3.8103 20.0003 3.54244 19.9455 3.29363 19.8388C3.04483 19.7321 2.82028 19.5758 2.63364 19.3793C2.44701 19.1829 2.30219 18.9504 2.208 18.6961C2.11381 18.4418 2.07222 18.1709 2.08575 17.9L2.62444 6.40663C2.64674 5.89136 2.86675 5.40464 3.23852 5.04811C3.6103 4.69158 4.10511 4.4928 4.61961 4.49329H15.3802C15.8947 4.4928 16.3895 4.69158 16.7613 5.04811C17.1331 5.40464 17.3531 5.89136 17.3754 6.40663L17.9141 17.9C17.9276 18.1709 17.886 18.4418 17.7918 18.6961C17.6976 18.9504 17.5528 19.1829 17.3662 19.3793C17.1796 19.5758 16.955 19.7321 16.7062 19.8388C16.4574 19.9455 16.1895 20.0003 15.9189 20ZM4.61961 5.83329C4.44323 5.83329 4.27407 5.90353 4.14935 6.02855C4.02462 6.15358 3.95456 6.32315 3.95456 6.49996L3.41586 17.9667C3.41135 18.057 3.42522 18.1473 3.45661 18.232C3.48801 18.3168 3.53628 18.3943 3.59849 18.4598C3.6607 18.5252 3.73555 18.5774 3.81849 18.6129C3.90142 18.6485 3.99071 18.6668 4.08092 18.6667H15.9189C16.0091 18.6668 16.0984 18.6485 16.1813 18.6129C16.2643 18.5774 16.3391 18.5252 16.4013 18.4598C16.4636 18.3943 16.5118 18.3168 16.5432 18.232C16.5746 18.1473 16.5885 18.057 16.584 17.9667L16.0453 6.47329C16.0453 6.29648 15.9752 6.12691 15.8505 6.00189C15.7258 5.87686 15.5566 5.80662 15.3802 5.80662L4.61961 5.83329Z" fill="white"></path>
                            <path d="M13.9902 5.16668H12.6601V4.00001C12.6601 3.29276 12.3798 2.61449 11.8809 2.11439C11.382 1.61429 10.7054 1.33334 9.99986 1.33334C9.29432 1.33334 8.61768 1.61429 8.11879 2.11439C7.61991 2.61449 7.33963 3.29276 7.33963 4.00001V5.16668H6.00952V4.00001C6.00952 2.93914 6.42993 1.92172 7.17826 1.17158C7.9266 0.421428 8.94155 0 9.99986 0C11.0582 0 12.0731 0.421428 12.8215 1.17158C13.5698 1.92172 13.9902 2.93914 13.9902 4.00001V5.16668Z" fill="white"></path>
                          </svg>
                        </Link>
                        <Link to="cart" className='text-dark gap-2 fw-bold d-flex align-items-center justify-content-center mx-5 mt-3'>View Cart
                          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="14" viewBox="0 0 35 14" fill="dark">
                            <path d="M25.0749 14L35 7L25.0805 0L29.12 6.06667H0V7.93333H29.12L25.0749 14Z"></path>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="menu">
              <div className='d-flex align-items-center gap-3'>
                <div className="mode">
                  <button onClick={modeFunc} className='btn p-0 text-light'>{mode ? <BsFillMoonFill style={{ fontSize: "19px" }} /> : <RiSunLine style={{ fontSize: "19px" }} />}</button>
                </div>
                <button onClick={openMenu} className="open-btn fs-4" href="/"><i className="fa-solid fa-bars" /></button>
              </div>
              <div ref={menu} className="offcanvas-menu">
                <div className="heading p-1">
                  <button onClick={closeMenu} className="close-btn fs-3 mx-3" href="/">
                    <i className="fa-solid fa-xmark" />
                  </button>
                </div>
                <div className="body">
                  <div className="nav-item d-flex flex-column gap-4 mx-4 py-4">
                    <Link className="title" to="/">Home</Link>
                    <Link className="title" to="/about">About</Link>
                    <Link className="title" to="/contact">Contact</Link>
                    <Link className="title" to="/products">Store</Link>
                    <Link className="title" to="/blog">Blog</Link>
                    <Link className="title" to="/wishlist">Wishlist</Link>
                  </div>
                  <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-controls="flush-collapseOne">
                          <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} viewBox="0 0 13 13" fill="black">
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.5 7.04159C4.40592 7.04159 2.70833 8.73917 2.70833 10.8333V11.9166C2.70833 12.2157 2.46582 12.4583 2.16667 12.4583C1.86751 12.4583 1.625 12.2157 1.625 11.9166V10.8333C1.625 8.14086 3.80761 5.95825 6.5 5.95825C9.19239 5.95825 11.375 8.14086 11.375 10.8333V11.9166C11.375 12.2157 11.1325 12.4583 10.8333 12.4583C10.5342 12.4583 10.2917 12.2157 10.2917 11.9166V10.8333C10.2917 8.73917 8.59408 7.04159 6.5 7.04159Z" fill="black" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.5 5.95841C7.69662 5.95841 8.66667 4.98837 8.66667 3.79175C8.66667 2.59513 7.69662 1.62508 6.5 1.62508C5.30338 1.62508 4.33333 2.59513 4.33333 3.79175C4.33333 4.98837 5.30338 5.95841 6.5 5.95841ZM6.5 7.04175C8.29493 7.04175 9.75 5.58667 9.75 3.79175C9.75 1.99682 8.29493 0.541748 6.5 0.541748C4.70507 0.541748 3.25 1.99682 3.25 3.79175C3.25 5.58667 4.70507 7.04175 6.5 7.04175Z" fill="black" />
                          </svg>
                        </button>
                      </h2>
                      <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="user accordion-body">
                          {localStorage.getItem('login') === 'true' ? <div className="links d-flex flex-column gap-2">
                            <p className='hello-user text-center'>Hi, {localStorage.getItem("firstName")}</p>
                            <button className='logoutbtn p-0 d-flex align-items-center justify-content-start' onClick={() => {
                              localStorage.setItem("login", 'false');
                              window.location.assign('/login');
                            }}>Log out</button>
                            <Link to="/login">Log in</Link>
                            <Link to="/createaccount">Create Account</Link>
                          </div> : <div className="links d-flex flex-column gap-2">
                            <Link to="/login">Log in</Link>
                            <Link to="/createaccount">Create Account</Link>
                          </div>}
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-controls="flush-collapseTwo">
                          <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} viewBox="0 0 11 11" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M5.5013 9.16602C7.52635 9.16602 9.16797 7.52439 9.16797 5.49935C9.16797 3.4743 7.52635 1.83268 5.5013 1.83268C3.47626 1.83268 1.83464 3.4743 1.83464 5.49935C1.83464 7.52439 3.47626 9.16602 5.5013 9.16602ZM5.5013 10.0827C8.03261 10.0827 10.0846 8.03065 10.0846 5.49935C10.0846 2.96804 8.03261 0.916016 5.5013 0.916016C2.97 0.916016 0.917969 2.96804 0.917969 5.49935C0.917969 8.03065 2.97 10.0827 5.5013 10.0827Z" fill="black" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.29926 8.33031C6.63783 7.65316 6.8737 6.65355 6.8737 5.49935C6.8737 4.34515 6.63783 3.34553 6.29926 2.66839C5.93327 1.93641 5.59727 1.83268 5.4987 1.83268C5.40013 1.83268 5.06412 1.93641 4.69814 2.66839C4.35956 3.34553 4.1237 4.34515 4.1237 5.49935C4.1237 6.65355 4.35956 7.65316 4.69814 8.33031C5.06412 9.06228 5.40013 9.16602 5.4987 9.16602C5.59727 9.16602 5.93327 9.06228 6.29926 8.33031ZM5.4987 10.0827C6.76435 10.0827 7.79036 8.03065 7.79036 5.49935C7.79036 2.96804 6.76435 0.916016 5.4987 0.916016C4.23305 0.916016 3.20703 2.96804 3.20703 5.49935C3.20703 8.03065 4.23305 10.0827 5.4987 10.0827Z" fill="black" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.062 5.95768C10.077 5.80693 10.0846 5.65404 10.0846 5.49935C10.0846 5.34466 10.077 5.19176 10.062 5.04102H0.940599C0.925632 5.19176 0.917969 5.34466 0.917969 5.49935C0.917969 5.65404 0.925632 5.80693 0.940599 5.95768H10.062Z" fill="black" />
                          </svg>
                        </button>
                      </h2>
                      <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="language accordion-body d-flex flex-column gap-2">
                          <button onClick={langModeFunc}>{`${langMode ? 'Azerbaijan' : 'Azerbaijan'}`}</button>
                          <button onClick={langModeFunc}>{`${langMode ? 'English' : 'English'}`}</button>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-controls="flush-collapseThree">
                          <svg width="23" height="23" viewBox="0 0 19 19" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.91797 15.834C7.91797 17.1457 6.85465 18.209 5.54297 18.209C4.23129 18.209 3.16797 17.1457 3.16797 15.834C3.16797 14.5223 4.23129 13.459 5.54297 13.459C6.85465 13.459 7.91797 14.5223 7.91797 15.834ZM6.33464 15.834C6.33464 16.2712 5.98019 16.6257 5.54297 16.6257C5.10574 16.6257 4.7513 16.2712 4.7513 15.834C4.7513 15.3968 5.10574 15.0423 5.54297 15.0423C5.98019 15.0423 6.33464 15.3968 6.33464 15.834Z" fill="black"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.8346 15.834C15.8346 17.1457 14.7713 18.209 13.4596 18.209C12.148 18.209 11.0846 17.1457 11.0846 15.834C11.0846 14.5223 12.148 13.459 13.4596 13.459C14.7713 13.459 15.8346 14.5223 15.8346 15.834ZM14.2513 15.834C14.2513 16.2712 13.8969 16.6257 13.4596 16.6257C13.0224 16.6257 12.668 16.2712 12.668 15.834C12.668 15.3968 13.0224 15.0423 13.4596 15.0423C13.8969 15.0423 14.2513 15.3968 14.2513 15.834Z" fill="black"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M1.66578 2.01983C1.86132 1.62876 2.33685 1.47025 2.72792 1.66578L3.52236 2.06301C4.25803 2.43084 4.75101 3.15312 4.82547 3.97225L4.86335 4.38888C4.88188 4.59276 5.05283 4.74887 5.25756 4.74887H15.702C17.0838 4.74887 18.0403 6.12909 17.5551 7.42297L16.1671 11.1245C15.8195 12.0514 14.9333 12.6655 13.9433 12.6655H6.19479C4.96644 12.6655 3.94076 11.7289 3.82955 10.5056L3.24864 4.1156C3.22382 3.84255 3.05949 3.60179 2.81427 3.47918L2.01983 3.08196C1.62876 2.88643 1.47025 2.41089 1.66578 2.01983ZM5.47346 6.3322C5.2407 6.3322 5.05818 6.53207 5.07926 6.76388L5.40638 10.3622C5.44345 10.77 5.78534 11.0822 6.19479 11.0822H13.9433C14.2733 11.0822 14.5687 10.8775 14.6845 10.5685L16.0726 6.86702C16.1696 6.60825 15.9783 6.3322 15.702 6.3322H5.47346Z" fill="black"></path>
                          </svg>
                        </button>
                      </h2>
                      <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="cart accordion-body">
                          <div className="cart d-flex align-items-center gap-4">
                            <div className='fw-bold d-flex flex-column'>
                              <span>MyCart</span>
                              <span>{localStorage.getItem("login") === 'true' ? cartTotal : "0"}.00 USD</span>
                            </div>
                            <button onClick={() => { localStorage.getItem("login") === 'true' ? navigate("/cart") : navigate("/login") }} className="btn position-relative p-0">
                              <svg width="23" height="23" viewBox="0 0 19 19" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.91797 15.834C7.91797 17.1457 6.85465 18.209 5.54297 18.209C4.23129 18.209 3.16797 17.1457 3.16797 15.834C3.16797 14.5223 4.23129 13.459 5.54297 13.459C6.85465 13.459 7.91797 14.5223 7.91797 15.834ZM6.33464 15.834C6.33464 16.2712 5.98019 16.6257 5.54297 16.6257C5.10574 16.6257 4.7513 16.2712 4.7513 15.834C4.7513 15.3968 5.10574 15.0423 5.54297 15.0423C5.98019 15.0423 6.33464 15.3968 6.33464 15.834Z" fill="black"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.8346 15.834C15.8346 17.1457 14.7713 18.209 13.4596 18.209C12.148 18.209 11.0846 17.1457 11.0846 15.834C11.0846 14.5223 12.148 13.459 13.4596 13.459C14.7713 13.459 15.8346 14.5223 15.8346 15.834ZM14.2513 15.834C14.2513 16.2712 13.8969 16.6257 13.4596 16.6257C13.0224 16.6257 12.668 16.2712 12.668 15.834C12.668 15.3968 13.0224 15.0423 13.4596 15.0423C13.8969 15.0423 14.2513 15.3968 14.2513 15.834Z" fill="black"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.66578 2.01983C1.86132 1.62876 2.33685 1.47025 2.72792 1.66578L3.52236 2.06301C4.25803 2.43084 4.75101 3.15312 4.82547 3.97225L4.86335 4.38888C4.88188 4.59276 5.05283 4.74887 5.25756 4.74887H15.702C17.0838 4.74887 18.0403 6.12909 17.5551 7.42297L16.1671 11.1245C15.8195 12.0514 14.9333 12.6655 13.9433 12.6655H6.19479C4.96644 12.6655 3.94076 11.7289 3.82955 10.5056L3.24864 4.1156C3.22382 3.84255 3.05949 3.60179 2.81427 3.47918L2.01983 3.08196C1.62876 2.88643 1.47025 2.41089 1.66578 2.01983ZM5.47346 6.3322C5.2407 6.3322 5.05818 6.53207 5.07926 6.76388L5.40638 10.3622C5.44345 10.77 5.78534 11.0822 6.19479 11.0822H13.9433C14.2733 11.0822 14.5687 10.8775 14.6845 10.5685L16.0726 6.86702C16.1696 6.60825 15.9783 6.3322 15.702 6.3322H5.47346Z" fill="black"></path>
                              </svg>
                              <span className="position-absolute top-0 start-10 translate-middle badge rounded-pill bg-primary">
                                {localStorage.getItem("login") === 'true' ? totalItems : "0"}
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* <div className="bottom-header py-3">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="left">
                <span className='fw-bold'>New Accessories -30 % Off. <Link to="/products">More</Link></span>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="search">
                <div className="input-group d-flex align-items-center justify-content-center">
                  <Link to='products' className="input-group-text"><i className="fa-solid fa-magnifying-glass"></i></Link>
                  <input onChange={e => setQuery(e.target.value)} type="text" placeholder="Search Product..." />
                </div>
                {product.filter(p => p.title.toLowerCase().includes(query)).map(item => (
                  <Link to={`/products/${slugify(item.title)}`}>
                    <li className="list-group-item d-flex align-items-center gap-2 py-2">
                      <div className="image">
                        <img width={100} src={item.image} alt='' />
                      </div>
                      <div className="content">
                        <h5>{item.title.slice(0, 19)}...</h5>
                        <span className='description'>{item.description.slice(0, 100)}...</span>
                        <p className='type'><i>{item.brand}</i></p>
                        <span className='price fw-bold'>{item.price} <sup>USD</sup></span>
                      </div>
                    </li>
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="right d-flex justify-content-end">
                <Link to="/products">New Collections</Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default Header