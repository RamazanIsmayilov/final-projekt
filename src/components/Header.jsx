import React from 'react'

const Header = () => {
  return (
    <header className='bg-dark'>
      <div className='container'>
        <div className="row">
          <div className='col-12 col-sm-3 col-md-4'>
            <nav className='d-flex'>
              <ul>
                <li className='heading d-flex align-items-center gap-2'>
                  <a href="/" className='fw-medium'><span>Gaming Accessories</span></a>
                  <img src="https://gaming-workdo.myshopify.com/cdn/shop/t/3/assets/dropdown.png" alt="chevron_arrow" />
                </li>
                <div className="row dropdown bg-light">
                  <li className='col-12 col-sm-12 col-md-3 dropdown-content d-flex flex-column gap-2'>
                    <span className='fw-medium mb-2'>Pro Gaming</span>
                    <span><a href="/" className='fw-medium'>Game Console</a></span>
                    <span><a href="/" className='fw-medium'>Game Remote</a></span>
                    <span><a href="/" className='fw-medium'>Gaming Cards</a></span>
                    <span><a href="/" className='fw-medium'>Gaming Chairs</a></span>
                    <span><a href="/" className='fw-medium'>Gaming Moniter</a></span>
                    <span><a href="/" className='fw-medium'>Gaming PCs</a></span>
                  </li>
                  <li className='col-12 col-sm-12 col-md-3 dropdown-content d-flex flex-column gap-2'>
                    <span className='fw-medium mb-2'>New Accessories</span>
                    <span><a href="/" className='fw-medium'>Alien ware Monitor</a></span>
                    <span><a href="/" className='fw-medium'>G-Series Curved VA Monitor</a></span>
                    <span><a href="/" className='fw-medium'>Cloud Alpha Gaming Headset</a></span>
                    <span><a href="/" className='fw-medium'>DualSense Wireless Controllers</a></span>
                    <span><a href="/" className='fw-medium'>Raptor Gameing Z95</a></span>
                    <span><a href="/" className='fw-medium'>KD DMTR Gaming Desktop PC</a></span>
                  </li>
                  <li className='col-12 col-sm-12 col-md-3 dropdown-content d-flex flex-column gap-2'>
                    <span className='fw-medium mb-2'>Master Game</span>
                    <span><a href="/" className='fw-medium'>Gaming Office Chair</a></span>
                    <span><a href="/" className='fw-medium'>Gaming Chair for Gamers with Lumbar</a></span>
                    <span><a href="/" className='fw-medium'>HTC Vive Tracker (3.0) - PC</a></span>
                    <span><a href="/" className='fw-medium'>VR Headset with Headphones</a></span>
                    <span><a href="/" className='fw-medium'>RX 590 GTS Graphics Card</a></span>
                    <span><a href="/" className='fw-medium'>RX 680 GTS Graphics Card</a></span>
                  </li>
                  <li className='col-12 col-sm-12 col-md-3 dropdown-content'>
                    <a href="/">
                      <img width={270} height={143} src="https://gaming-workdo.myshopify.com/cdn/shop/files/navbar.png?v=1672026462" alt="nav_image" />
                    </a>
                  </li>
                </div>
              </ul>
              <ul>
                <li className='heading d-flex align-items-center gap-2'>
                  <a href="/" className='fw-medium'><span>Pages</span></a>
                  <img src="https://gaming-workdo.myshopify.com/cdn/shop/t/3/assets/dropdown.png" alt="chevron_arrow" />
                </li>
                <div className="row dropdown bg-light">
                  <li className='col-12 col-sm-12 col-md-3 dropdown-content d-flex flex-column gap-2'>
                    <span><a href="/" className='fw-medium'>About Us</a></span>
                    <span><a href="/" className='fw-medium'>Contact with us</a></span>
                    <span><a href="/" className='fw-medium'>FAQ's</a></span>
                    <span><a href="/" className='fw-medium'>Privacy Policy</a></span>
                    <span><a href="/" className='fw-medium'>Shipping & Delivery</a></span>
                    <span><a href="/" className='fw-medium'>Terms & Conditions</a></span>
                  </li>
                </div>
              </ul>
              <ul>
                <li className='heading d-flex align-items-center gap-2'>
                  <a href="/" className='fw-medium'><span>Blog</span></a>
                  <img src="https://gaming-workdo.myshopify.com/cdn/shop/t/3/assets/dropdown.png" alt="chevron_arrow" />
                </li>
                <div className="row dropdown bg-light">
                  <li className='col-12 col-sm-12 col-md-3 dropdown-content d-flex flex-column gap-2'>
                    <span><a href="/" className='fw-medium'>Blog Page</a></span>
                    <span><a href="/" className='fw-medium'>Article Page</a></span>
                  </li>
                </div>
              </ul>
            </nav>
          </div>

          <div className='col-12 col-sm-3 col-md-4'>
            <div className="logo mx-5">
              <img src="https://gaming-workdo.myshopify.com/cdn/shop/files/logo_aceeaa59-f6d4-423f-86f0-8c025cf33812.png?v=1671601485" alt="logo" />
            </div>
          </div>

          <div className='col-12 col-sm-3 col-md-4'>
            <div className="action">
              <img src="https://gaming-workdo.myshopify.com/cdn/shop/files/logo_aceeaa59-f6d4-423f-86f0-8c025cf33812.png?v=1671601485" alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header