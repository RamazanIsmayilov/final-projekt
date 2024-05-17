import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LangContext } from '../context/LangContext'

const Footer = () => {

  const { lang } = useContext(LangContext)

  return (
    <>
      <div className="footers">
        <div className="container">
          <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 g-4">
            <div className="left col-12 col-sm-6 col-md-6 col-lg-5">
              <Link to="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                <img src="https://gaming-workdo.myshopify.com/cdn/shop/files/logo.png?v=1670901413" alt="logo" />
              </Link>
              <h3 className='fw-bold'>{lang ? "Uzadın və fikrinizi" : "Reach out & let your"} {lang ? <b>araşdırmağa icazə verin</b> : <b> mind explore </b>}  </h3>
              <p>{lang ? "Çətin oyunu məğlub etmək və ya yeni bir bacarıq mənimsəmək kimi çətinliyi də sevirəm." : "I also love the challenge of trying to beat a difficult game or master a new skill."}</p>
            </div>
            <div className="center col-12 col-sm-6 col-md-6 col-lg-3">
              <h4 className='fw-bold'>{lang ? "NAVİQASİYA:" : "NAVIGATION:"}</h4>
              <ul className="nav flex-column mt-3">
                <li className="nav-item mb-2"><Link to="/products" className="nav-link p-0">{lang ? "Axtar" : "Search"}</Link></li>
                <li className="nav-item mb-2"><Link to="/blog" className="nav-link p-0">{lang ? "Bütün Kolleksiyalar" : "All Collections"}</Link></li>
                <li className="nav-item mb-2"><Link to="/products" className="nav-link p-0">{lang ? "Bütün Məhsullar" : "All Products"}</Link></li>
                <li className="nav-item mb-2"><Link to="/products" className="nav-link p-0">{lang ? "Məqalə Səhifəsi" : "Article Page"}</Link></li>
                <li className="nav-item mb-2"><Link to="/blog" className="nav-link p-0">{lang ? "Bloq Səhifəsi" : "Blog Page"}</Link></li>
              </ul>
            </div>
            <div className="center col-12 col-sm-6 col-md-6 col-lg-2">
              <h4 className='fw-bold'>{lang ? "HAQQIMIZDA:" : "ABOUT US:"}</h4>
              <ul className="nav flex-column mt-3">
                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0">{lang ? "Haqqımızda" : "About Us"}</Link></li>
                <li className="nav-item mb-2"><Link to="/contact" className="nav-link p-0">{lang ? "Bizimlə əlaqə" : "Contact with us"}</Link></li>
                <li className="nav-item mb-2"><Link to="/faq" className="nav-link p-0">{lang ? "Tez-tez verilən suallar" : "FAQ's"}</Link></li>
                <li className="nav-item mb-2"><Link to="/faq" className="nav-link p-0">{lang ? "Gizlilik Siyasəti" : "Privacy Policy"}</Link></li>
                <li className="nav-item mb-2"><Link to="/faq" className="nav-link p-0">{lang ? "Çatdırılma və Göndərilmə" : "Shipping & Delivery"}</Link></li>
              </ul>
            </div>
            <div className="right col-12 col-sm-6 col-md-6 col-lg-2">
              <h4>{lang ? "PAYLAŞ:" : "SHARE:"}</h4>
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