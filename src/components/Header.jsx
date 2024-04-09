import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from 'react-use-cart';
import { ProductContext } from '../context/ProductContext';
import slugify from 'react-slugify';
import { ModeContext } from '../context/ModeContext';
import { LangContext } from '../context/LangContext';
import { BsFillMoonFill } from "react-icons/bs";
import { RiSunLine } from "react-icons/ri";

const Header = () => {

  const { totalItems } = useCart();
  const { cartTotal } = useCart();
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
        if(mode == "light") {
          setMode("dark")
        }else{
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
                <li><a className="title" href="/">
                  <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} viewBox="0 0 11 11" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.5013 9.16602C7.52635 9.16602 9.16797 7.52439 9.16797 5.49935C9.16797 3.4743 7.52635 1.83268 5.5013 1.83268C3.47626 1.83268 1.83464 3.4743 1.83464 5.49935C1.83464 7.52439 3.47626 9.16602 5.5013 9.16602ZM5.5013 10.0827C8.03261 10.0827 10.0846 8.03065 10.0846 5.49935C10.0846 2.96804 8.03261 0.916016 5.5013 0.916016C2.97 0.916016 0.917969 2.96804 0.917969 5.49935C0.917969 8.03065 2.97 10.0827 5.5013 10.0827Z" fill="white" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.29926 8.33031C6.63783 7.65316 6.8737 6.65355 6.8737 5.49935C6.8737 4.34515 6.63783 3.34553 6.29926 2.66839C5.93327 1.93641 5.59727 1.83268 5.4987 1.83268C5.40013 1.83268 5.06412 1.93641 4.69814 2.66839C4.35956 3.34553 4.1237 4.34515 4.1237 5.49935C4.1237 6.65355 4.35956 7.65316 4.69814 8.33031C5.06412 9.06228 5.40013 9.16602 5.4987 9.16602C5.59727 9.16602 5.93327 9.06228 6.29926 8.33031ZM5.4987 10.0827C6.76435 10.0827 7.79036 8.03065 7.79036 5.49935C7.79036 2.96804 6.76435 0.916016 5.4987 0.916016C4.23305 0.916016 3.20703 2.96804 3.20703 5.49935C3.20703 8.03065 4.23305 10.0827 5.4987 10.0827Z" fill="white" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.062 5.95768C10.077 5.80693 10.0846 5.65404 10.0846 5.49935C10.0846 5.34466 10.077 5.19176 10.062 5.04102H0.940599C0.925632 5.19176 0.917969 5.34466 0.917969 5.49935C0.917969 5.65404 0.925632 5.80693 0.940599 5.95768H10.062Z" fill="white" />
                  </svg>
                </a>
                  <ul className="dropdown d-flex flex-column">
                    <button onClick={langModeFunc}>{`${langMode ? 'Azerbaijan' : 'Azerbaijan'}`}</button>
                    <button onClick={langModeFunc}>{`${langMode ? 'English' : 'English'}`}</button>
                  </ul>
                </li>
              </div>
              <div className="mode">
                <button onClick={modeFunc} className='btn p-0 text-light'>{mode === "light" ? <BsFillMoonFill style={{ fontSize: "19px" }} /> : <RiSunLine style={{ fontSize: "19px" }} />}</button>
              </div>
              <div className="cart d-flex align-items-center gap-2">
                <div className='text-light fw-bold d-flex flex-column'>
                  <span>MyCart</span>
                  <span>{localStorage.getItem("login") === 'true' ? cartTotal : "0"}.00 USD</span>
                </div>
                <button onClick={() => { localStorage.getItem("login") === 'true' ? navigate("/cart") : navigate("/login") }} className="btn position-relative p-0">
                  <svg width="23" height="23" viewBox="0 0 19 19" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.91797 15.834C7.91797 17.1457 6.85465 18.209 5.54297 18.209C4.23129 18.209 3.16797 17.1457 3.16797 15.834C3.16797 14.5223 4.23129 13.459 5.54297 13.459C6.85465 13.459 7.91797 14.5223 7.91797 15.834ZM6.33464 15.834C6.33464 16.2712 5.98019 16.6257 5.54297 16.6257C5.10574 16.6257 4.7513 16.2712 4.7513 15.834C4.7513 15.3968 5.10574 15.0423 5.54297 15.0423C5.98019 15.0423 6.33464 15.3968 6.33464 15.834Z" fill="white"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.8346 15.834C15.8346 17.1457 14.7713 18.209 13.4596 18.209C12.148 18.209 11.0846 17.1457 11.0846 15.834C11.0846 14.5223 12.148 13.459 13.4596 13.459C14.7713 13.459 15.8346 14.5223 15.8346 15.834ZM14.2513 15.834C14.2513 16.2712 13.8969 16.6257 13.4596 16.6257C13.0224 16.6257 12.668 16.2712 12.668 15.834C12.668 15.3968 13.0224 15.0423 13.4596 15.0423C13.8969 15.0423 14.2513 15.3968 14.2513 15.834Z" fill="white"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.66578 2.01983C1.86132 1.62876 2.33685 1.47025 2.72792 1.66578L3.52236 2.06301C4.25803 2.43084 4.75101 3.15312 4.82547 3.97225L4.86335 4.38888C4.88188 4.59276 5.05283 4.74887 5.25756 4.74887H15.702C17.0838 4.74887 18.0403 6.12909 17.5551 7.42297L16.1671 11.1245C15.8195 12.0514 14.9333 12.6655 13.9433 12.6655H6.19479C4.96644 12.6655 3.94076 11.7289 3.82955 10.5056L3.24864 4.1156C3.22382 3.84255 3.05949 3.60179 2.81427 3.47918L2.01983 3.08196C1.62876 2.88643 1.47025 2.41089 1.66578 2.01983ZM5.47346 6.3322C5.2407 6.3322 5.05818 6.53207 5.07926 6.76388L5.40638 10.3622C5.44345 10.77 5.78534 11.0822 6.19479 11.0822H13.9433C14.2733 11.0822 14.5687 10.8775 14.6845 10.5685L16.0726 6.86702C16.1696 6.60825 15.9783 6.3322 15.702 6.3322H5.47346Z" fill="white"></path>
                  </svg>
                  <span className="position-absolute top-0 start-10 translate-middle badge rounded-pill bg-primary">
                    {localStorage.getItem("login") === 'true' ? totalItems : "0"}
                  </span>
                </button>
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

      {/* <div className="bottom-header py-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="left">
                <span className='fw-bold'>New Accessories -30 % Off. <Link to="/products">More</Link></span>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="search">
                <div className="input-group d-flex align-items-center justify-content-center mb-2">
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