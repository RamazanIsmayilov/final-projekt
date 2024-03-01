import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="footers">
        <div className="container">
          <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 g-4">
            <div className="left col-12 col-sm-6 col-md-6 col-lg-5">
              <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                <img src="https://gaming-workdo.myshopify.com/cdn/shop/files/logo.png?v=1670901413" alt="logo" />
              </a>
              <h3 className='fw-bold'>Reach out &amp; let your <b> mind <br /> explore </b> </h3>
              <p>I also love the challenge of trying to beat a difficult game or <br /> master a new skill.</p>
            </div>
            <div className="center col-12 col-sm-6 col-md-6 col-lg-3">
              <h4 className='fw-bold'>NAVIGATION:</h4>
              <ul className="nav flex-column mt-3">
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0">Search</a></li>
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0">All Collections</a></li>
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0">All Products</a></li>
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0">Article Page</a></li>
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0">Blog Page</a></li>
              </ul>
            </div>
            <div className="center col-12 col-sm-6 col-md-6 col-lg-2">
              <h4 className='fw-bold'>ABOUT US:</h4>
              <ul className="nav flex-column mt-3">
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0">About Us</a></li>
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0">Contact with us</a></li>
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0">FAQ's</a></li>
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0">Privacy Policy</a></li>
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0">Shipping & Delivery</a></li>
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0">Terms & Conditions</a></li>
              </ul>
            </div>
            <div className="right col-12 col-sm-6 col-md-6 col-lg-2">
              <h4>SHARE:</h4>
              <div className="icons d-flex gap-3 mt-3">
                <a className='px-2 py-1 rounded' href="https://www.youtube.com/shopify" target='blank'><i className="fa-brands fa-square-youtube"></i></a>
                <a className='px-2 py-1 rounded' href="https://www.facebook.com/shopify" target='blank'><i className="fa-brands fa-facebook-f"></i></a>
                <a className='px-2 py-1 rounded' href="https://www.instagram.com/shopify/" target='blank'><i className="fa-brands fa-instagram"></i></a>
                <a className='px-2 py-1 rounded' href="https://twitter.com/shopify" target='blank'><i className="fa-brands fa-twitter"></i></a>
              </div>
            </div>
          </footer>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container py-2">
            <p>© {new Date().getFullYear()}, Gaming WorkDo, Powered by Shopify</p>
        </div>
      </div>
    </>
  )
}

export default Footer