import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 mt-5 border-top text-light">
          <div className="left col-12 col-sm-12 col-md-6 col-lg-4">
            <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
              <img src="https://gaming-workdo.myshopify.com/cdn/shop/files/logo.png?v=1670901413" alt="logo" />
            </a>
            <h3>Reach out &amp; let your <b> mind explore </b> </h3>
            <p>I also love the challenge of trying to beat a difficult game or master a new skill.</p>
          </div>
          <div className="center col-12 col-sm-6 col-md-6 col-lg-3">
            <h5>NAVIGATION:</h5>
            <ul className="nav flex-column mt-3">
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">Search</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">All Collections</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">All Products</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">Article Page</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">Blog Page</a></li>
            </ul>
          </div>
          <div className="center col-12 col-sm-6 col-md-6 col-lg-3">
            <h5>ABOUT US:</h5>
            <ul className="nav flex-column mt-3">
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">About Us</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">Contact with us</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">FAQ's</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">Privacy Policy</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">Shipping & Delivery</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">Terms & Conditions</a></li>
            </ul>
          </div>
          <div className="right col-12 col-sm-6 col-md-6 col-lg-2">
            <h5>SHARE:</h5>
            <div className="icons d-flex gap-3">
                <a className='text-light' href="https://www.youtube.com/shopify" target='blank'><i className="fa-brands fa-square-youtube"></i></a>
                <a className='text-light' href="https://www.facebook.com/shopify" target='blank'><i className="fa-brands fa-facebook-f"></i></a>
                <a className='text-light' href="https://www.instagram.com/shopify/" target='blank'><i className="fa-brands fa-instagram"></i></a>
                <a className='text-light' href="https://twitter.com/shopify" target='blank'><i className="fa-brands fa-twitter"></i></a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer