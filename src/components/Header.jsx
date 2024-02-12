import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-dark'>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="https://gaming-workdo.myshopify.com/cdn/shop/files/logo_aceeaa59-f6d4-423f-86f0-8c025cf33812.png?v=1671601485" alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto gap-3 mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link text-light fw-medium" to="/">Home</NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link text-light fw-medium dropdown-toggle" href="/" data-bs-toggle="dropdown">Pages</NavLink>
                <ul className="dropdown-menu border-0">
                  <li><a className="dropdown-item" href="/">About Us</a></li>
                  <li><a className="dropdown-item" href="/">Contact with us</a></li>
                  <li><a className="dropdown-item" href="/">FAQ's</a></li>
                  <li><a className="dropdown-item" href="/">Privacy Policy</a></li>
                  <li><a className="dropdown-item" href="/">Shipping & Delivery</a></li>
                  <li><a className="dropdown-item" href="/">Terms & Conditions</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link text-light dropdown-toggle" href="/" data-bs-toggle="dropdown">Blog</NavLink>
                <ul className="dropdown-menu border-0">
                  <li><a className="dropdown-item" href="/">Blog Page</a></li>
                  <li><a className="dropdown-item" href="/">Article Page</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header