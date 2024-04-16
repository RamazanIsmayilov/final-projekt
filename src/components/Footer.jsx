import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className="footers">
        <div className="container">
          <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 g-4">
            <div className="left col-12 col-sm-6 col-md-6 col-lg-5">
              <Link to="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                <img src="https://gaming-workdo.myshopify.com/cdn/shop/files/logo.png?v=1670901413" alt="logo" />
              </Link>
              <h3 className='fw-bold'>Reach out & let your <b> mind explore </b> </h3>
              <p>I also love the challenge of trying to beat a difficult game or master a new skill.</p>
            </div>
            <div className="center col-12 col-sm-6 col-md-6 col-lg-3">
              <h4 className='fw-bold'>NAVIGATION:</h4>
              <ul className="nav flex-column mt-3">
                <li className="nav-item mb-2"><Link to="*" className="nav-link p-0">Search</Link></li>
                <li className="nav-item mb-2"><Link to="/blog" className="nav-link p-0">All Collections</Link></li>
                <li className="nav-item mb-2"><Link to="/products" className="nav-link p-0">All Products</Link></li>
                <li className="nav-item mb-2"><Link to="*" className="nav-link p-0">Article Page</Link></li>
                <li className="nav-item mb-2"><Link to="/blog" className="nav-link p-0">Blog Page</Link></li>
              </ul>
            </div>
            <div className="center col-12 col-sm-6 col-md-6 col-lg-2">
              <h4 className='fw-bold'>ABOUT US:</h4>
              <ul className="nav flex-column mt-3">
                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0">About Us</Link></li>
                <li className="nav-item mb-2"><Link to="/contact" className="nav-link p-0">Contact with us</Link></li>
                <li className="nav-item mb-2"><Link to="*" className="nav-link p-0">FAQ's</Link></li>
                <li className="nav-item mb-2"><Link to="*" className="nav-link p-0">Privacy Policy</Link></li>
                <li className="nav-item mb-2"><Link to="*" className="nav-link p-0">Shipping & Delivery</Link></li>
              </ul>
            </div>
            <div className="right col-12 col-sm-6 col-md-6 col-lg-2">
              <h4>SHARE:</h4>
              <div className="icons d-flex gap-3 mt-3">
                <Link className='px-2 py-1 rounded' to="https://www.youtube.com/shopify" target='blank'><i className="fa-brands fa-square-youtube"></i></Link>
                <Link className='px-2 py-1 rounded' to="https://www.facebook.com/shopify" target='blank'><i className="fa-brands fa-facebook-f"></i></Link>
                <Link className='px-2 py-1 rounded' to="https://www.instagram.com/shopify/" target='blank'><i className="fa-brands fa-instagram"></i></Link>
                <Link className='px-2 py-1 rounded' to="https://twitter.com/shopify" target='blank'><i className="fa-brands fa-twitter"></i></Link>
              </div>
            </div>
          </footer>
          <div className="footer-bottom py-2">
            <p>© {new Date().getFullYear()}, Gaming WorkDo, Powered by Shopify</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default Footer