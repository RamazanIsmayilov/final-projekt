import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  return (

    <>
      <header>
        <div className="container">
          <nav className="navbar">
            <ul className="navbar-left d-flex gap-4 mt-3">
              <li><Link className="title fw-medium" to="/">Gaming Accessories</Link>
                <img src="https://gaming-workdo.myshopify.com/cdn/shop/t/3/assets/dropdown.png" alt="dropend" />
                <ul className="dropdown one d-flex flex-column gap-2 mt-4">
                  <li><Link to="/">Game Console</Link></li>
                  <li><Link to="/">Game Remote</Link></li>
                  <li><Link to="/">Gaming Cards</Link></li>
                  <li><Link to="/">Gaming Chairs</Link></li>
                  <li><Link to="/">Gaming Moniter</Link></li>
                  <li><Link to="/">Gaming PCs</Link></li>
                </ul>
              </li>
              <li><a className="title fw-medium" href="/">Pages</a>
                <img src="https://gaming-workdo.myshopify.com/cdn/shop/t/3/assets/dropdown.png" alt="dropend" />
                <ul className="dropdown two d-flex flex-column gap-2 mt-4">
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="contact">Contact with us</Link></li>
                  <li><Link to="/products">Products</Link></li>
                </ul>
              </li>
              <li><a className="title fw-medium" href="/blog">Blog Page</a>
                <img src="https://gaming-workdo.myshopify.com/cdn/shop/t/3/assets/dropdown.png" alt="dropend" />
                <ul className="dropdown three d-flex flex-column gap-2 mt-4">
                  <li><Link to="/blog">Blog Page</Link></li>
                  <li><Link to="/articleblog">Article Page</Link></li>
                </ul>
              </li>
            </ul>
            <div className="logo">
              <Link to="/">
                <img src="https://gaming-workdo.myshopify.com/cdn/shop/files/logo_aceeaa59-f6d4-423f-86f0-8c025cf33812.png?v=1671601485" alt="logo" />
              </Link>
            </div>
            <div className="navbar-right d-flex align-items-center gap-4">
              <ul className="mt-3 d-flex gap-4">
                <li><a className="title fw-medium" href="/">
                  <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} viewBox="0 0 13 13" fill="white">
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.5 7.04159C4.40592 7.04159 2.70833 8.73917 2.70833 10.8333V11.9166C2.70833 12.2157 2.46582 12.4583 2.16667 12.4583C1.86751 12.4583 1.625 12.2157 1.625 11.9166V10.8333C1.625 8.14086 3.80761 5.95825 6.5 5.95825C9.19239 5.95825 11.375 8.14086 11.375 10.8333V11.9166C11.375 12.2157 11.1325 12.4583 10.8333 12.4583C10.5342 12.4583 10.2917 12.2157 10.2917 11.9166V10.8333C10.2917 8.73917 8.59408 7.04159 6.5 7.04159Z" fill="white" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.5 5.95841C7.69662 5.95841 8.66667 4.98837 8.66667 3.79175C8.66667 2.59513 7.69662 1.62508 6.5 1.62508C5.30338 1.62508 4.33333 2.59513 4.33333 3.79175C4.33333 4.98837 5.30338 5.95841 6.5 5.95841ZM6.5 7.04175C8.29493 7.04175 9.75 5.58667 9.75 3.79175C9.75 1.99682 8.29493 0.541748 6.5 0.541748C4.70507 0.541748 3.25 1.99682 3.25 3.79175C3.25 5.58667 4.70507 7.04175 6.5 7.04175Z" fill="white" />
                  </svg>
                </a>
                  <ul className="dropdown one mt-4">
                    <li><Link to="/login">Log in</Link></li>
                    <li><Link to="/createaccount">Create Account</Link></li>
                    <li><Link to="/wishlist">Wishlist (0)</Link></li>
                    <li><Link to="/compare">Compare (0)</Link></li>
                  </ul>
                </li>
                <li><a className="title fw-medium" href="/">
                  <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} viewBox="0 0 11 11" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.5013 9.16602C7.52635 9.16602 9.16797 7.52439 9.16797 5.49935C9.16797 3.4743 7.52635 1.83268 5.5013 1.83268C3.47626 1.83268 1.83464 3.4743 1.83464 5.49935C1.83464 7.52439 3.47626 9.16602 5.5013 9.16602ZM5.5013 10.0827C8.03261 10.0827 10.0846 8.03065 10.0846 5.49935C10.0846 2.96804 8.03261 0.916016 5.5013 0.916016C2.97 0.916016 0.917969 2.96804 0.917969 5.49935C0.917969 8.03065 2.97 10.0827 5.5013 10.0827Z" fill="white" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.29926 8.33031C6.63783 7.65316 6.8737 6.65355 6.8737 5.49935C6.8737 4.34515 6.63783 3.34553 6.29926 2.66839C5.93327 1.93641 5.59727 1.83268 5.4987 1.83268C5.40013 1.83268 5.06412 1.93641 4.69814 2.66839C4.35956 3.34553 4.1237 4.34515 4.1237 5.49935C4.1237 6.65355 4.35956 7.65316 4.69814 8.33031C5.06412 9.06228 5.40013 9.16602 5.4987 9.16602C5.59727 9.16602 5.93327 9.06228 6.29926 8.33031ZM5.4987 10.0827C6.76435 10.0827 7.79036 8.03065 7.79036 5.49935C7.79036 2.96804 6.76435 0.916016 5.4987 0.916016C4.23305 0.916016 3.20703 2.96804 3.20703 5.49935C3.20703 8.03065 4.23305 10.0827 5.4987 10.0827Z" fill="white" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.062 5.95768C10.077 5.80693 10.0846 5.65404 10.0846 5.49935C10.0846 5.34466 10.077 5.19176 10.062 5.04102H0.940599C0.925632 5.19176 0.917969 5.34466 0.917969 5.49935C0.917969 5.65404 0.925632 5.80693 0.940599 5.95768H10.062Z" fill="white" />
                  </svg>
                </a>
                  <ul className="dropdown two mt-4">
                    <li><a href="/">Azerbaijan</a></li>
                    <li><a href="/">English</a></li>
                  </ul>
                </li>
              </ul>
              <div className="cart d-flex flex-column fw-bold">
                <span>MyCart</span>
                <span>0.00USD</span>
              </div>
              <Link to='/cart' className="btn position-relative">
                <i className="fa-solid fa-cart-shopping" />
                <span className="position-absolute top-0 start-10 translate-middle badge rounded-pill bg-primary">0</span>
              </Link>
            </div>
            <div className="menu">
              <a className="open-btn fs-4" href="/"><i className="fa-solid fa-bars" /></a>
              <div className="offcanvas-menu">
                <div className="heading p-1">
                  <a className="close-btn fs-3 mx-3" href="/">
                    <i className="fa-solid fa-xmark" />
                  </a>
                </div>
                <div className="body">
                  <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                          Shop All
                        </button>
                      </h2>
                      <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                          <ul className="d-flex flex-column gap-2">
                            <li><Link to="/">Gaming PCs</Link></li>
                            <li><Link to="/">Game Remote</Link></li>
                            <li><Link to="/">Gaming Cards</Link></li>
                            <li><Link to="/">Gaming Chairs</Link></li>
                            <li><Link to="/">Gaming Moniter</Link></li>
                            <li><Link to="/">Gaming Console</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                          Pages
                        </button>
                      </h2>
                      <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                          <ul className="d-flex flex-column gap-2">
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="contact">Contact with us</Link></li>
                            <li><Link to="/products">Products</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                          Blog
                        </button>
                      </h2>
                      <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                          <ul className="d-flex flex-column gap-2">
                            <li><Link to="/blog">Blog Page</Link></li>
                            <li><Link to="/articleblog">Article Page</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div className="action d-flex align-items-center gap-4">
                        <ul className="mt-3 d-flex gap-4">
                          <li><a className="title fw-medium" href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} viewBox="0 0 13 13" fill="white">
                              <path fillRule="evenodd" clipRule="evenodd" d="M6.5 7.04159C4.40592 7.04159 2.70833 8.73917 2.70833 10.8333V11.9166C2.70833 12.2157 2.46582 12.4583 2.16667 12.4583C1.86751 12.4583 1.625 12.2157 1.625 11.9166V10.8333C1.625 8.14086 3.80761 5.95825 6.5 5.95825C9.19239 5.95825 11.375 8.14086 11.375 10.8333V11.9166C11.375 12.2157 11.1325 12.4583 10.8333 12.4583C10.5342 12.4583 10.2917 12.2157 10.2917 11.9166V10.8333C10.2917 8.73917 8.59408 7.04159 6.5 7.04159Z" fill="white" />
                              <path fillRule="evenodd" clipRule="evenodd" d="M6.5 5.95841C7.69662 5.95841 8.66667 4.98837 8.66667 3.79175C8.66667 2.59513 7.69662 1.62508 6.5 1.62508C5.30338 1.62508 4.33333 2.59513 4.33333 3.79175C4.33333 4.98837 5.30338 5.95841 6.5 5.95841ZM6.5 7.04175C8.29493 7.04175 9.75 5.58667 9.75 3.79175C9.75 1.99682 8.29493 0.541748 6.5 0.541748C4.70507 0.541748 3.25 1.99682 3.25 3.79175C3.25 5.58667 4.70507 7.04175 6.5 7.04175Z" fill="white" />
                            </svg>
                          </a>
                            <ul className="dropdown one mt-3">
                              <li><Link to="/login">Log in</Link></li>
                              <li><Link to="/createaccount">Create Account</Link></li>
                              <li><Link to="/wishlist">Wishlist (0)</Link></li>
                              <li><Link to="/compare">Compare (0)</Link></li>
                            </ul>
                          </li>
                          <li><a className="title fw-medium" href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} viewBox="0 0 11 11" fill="none">
                              <path fillRule="evenodd" clipRule="evenodd" d="M5.5013 9.16602C7.52635 9.16602 9.16797 7.52439 9.16797 5.49935C9.16797 3.4743 7.52635 1.83268 5.5013 1.83268C3.47626 1.83268 1.83464 3.4743 1.83464 5.49935C1.83464 7.52439 3.47626 9.16602 5.5013 9.16602ZM5.5013 10.0827C8.03261 10.0827 10.0846 8.03065 10.0846 5.49935C10.0846 2.96804 8.03261 0.916016 5.5013 0.916016C2.97 0.916016 0.917969 2.96804 0.917969 5.49935C0.917969 8.03065 2.97 10.0827 5.5013 10.0827Z" fill="white" />
                              <path fillRule="evenodd" clipRule="evenodd" d="M6.29926 8.33031C6.63783 7.65316 6.8737 6.65355 6.8737 5.49935C6.8737 4.34515 6.63783 3.34553 6.29926 2.66839C5.93327 1.93641 5.59727 1.83268 5.4987 1.83268C5.40013 1.83268 5.06412 1.93641 4.69814 2.66839C4.35956 3.34553 4.1237 4.34515 4.1237 5.49935C4.1237 6.65355 4.35956 7.65316 4.69814 8.33031C5.06412 9.06228 5.40013 9.16602 5.4987 9.16602C5.59727 9.16602 5.93327 9.06228 6.29926 8.33031ZM5.4987 10.0827C6.76435 10.0827 7.79036 8.03065 7.79036 5.49935C7.79036 2.96804 6.76435 0.916016 5.4987 0.916016C4.23305 0.916016 3.20703 2.96804 3.20703 5.49935C3.20703 8.03065 4.23305 10.0827 5.4987 10.0827Z" fill="white" />
                              <path fillRule="evenodd" clipRule="evenodd" d="M10.062 5.95768C10.077 5.80693 10.0846 5.65404 10.0846 5.49935C10.0846 5.34466 10.077 5.19176 10.062 5.04102H0.940599C0.925632 5.19176 0.917969 5.34466 0.917969 5.49935C0.917969 5.65404 0.925632 5.80693 0.940599 5.95768H10.062Z" fill="white" />
                            </svg>
                          </a>
                            <ul className="dropdown two mt-3">
                              <li><a href="/">Azerbaijan</a></li>
                              <li><a href="/">English</a></li>
                            </ul>
                          </li>
                        </ul>
                        <div className="cart d-flex flex-column fw-bold">
                          <span>MyCart</span>
                          <span>0.00USD</span>
                        </div>
                        <button type="button" className="btn position-relative">
                          <i className="fa-solid fa-cart-shopping" />
                          <span className="position-absolute top-0 start-10 translate-middle badge rounded-pill bg-primary">0</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div className="header-bottom p-3">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="left mt-2">
                <a href="/"><b>New Accessories -30 % Off.</b><span>More</span></a>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="search">
                <div className="input-group flex-nowrap">
                  <span className="input-group-text background-none"><i className="fa-solid fa-magnifying-glass"></i></span>
                  <input type="text" className='py-2' placeholder="Search Product..." />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="right mt-2">
                <a className='d-flex align-items-center justify-content-end text-decoration-underline' href="/">New Collections</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Header