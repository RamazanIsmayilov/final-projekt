import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Product from '../data/product.json'
import 'swiper/css';
const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="left mt-5 d-flex flex-column gap-3">
                <img width={63} height={61} src="https://gaming-workdo.myshopify.com/cdn/shop/files/main-conent-games.png?v=1671440689" alt="" />
                <div className="heading py-2 px-3 rounded-5">
                  <span className='py-1 px-2 rounded-5'>Featured</span>
                  <span> New featured collection <a href="/" className='fw-bold'> \ Gaming. Collector</a></span>
                </div>
                <h2 className='fw-bold'>Best <b> Pro Gaming</b> <br /> Accessories</h2>
                <p>Gaming accessories include gear such as headsets, extra controllers,<br />
                  charging stations, memory devices, carrying cases and much more.</p>
                <div className="buttons d-flex gap-4 flex-wrap">
                  <a className='one d-flex align-items-center gap-2' href="/">
                    Show products
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M11.0801 11.334L11.5042 11.9203C11.8709 12.4273 12.4637 12.7507 13.1277 12.7507C14.3316 12.7507 15.2631 11.6955 15.1137 10.5008L14.5652 6.11208C14.4322 5.04867 13.5283 4.25065 12.4566 4.25065H4.54294C3.47125 4.25065 2.56727 5.04867 2.43435 6.11208L1.88575 10.5008C1.73642 11.6955 2.66792 12.7507 3.87184 12.7507C4.53583 12.7507 5.12857 12.4273 5.49529 11.9203L5.91944 11.334H11.0801ZM10.3564 12.7507C10.9792 13.6116 11.9918 14.1673 13.1277 14.1673C15.1837 14.1673 16.7745 12.3653 16.5195 10.3251L15.9709 5.93636C15.7493 4.16401 14.2427 2.83398 12.4566 2.83398H4.54294C2.75679 2.83398 1.25016 4.16401 1.02862 5.93636L0.480024 10.3251C0.225003 12.3653 1.81579 14.1673 3.87184 14.1673C5.00767 14.1673 6.02032 13.6116 6.64311 12.7507H10.3564Z" fill="white"></path>
                      <path d="M5.66797 5.66602C5.27677 5.66602 4.95964 5.98315 4.95964 6.37435V7.08268H4.2513C3.8601 7.08268 3.54297 7.39981 3.54297 7.79102C3.54297 8.18222 3.8601 8.49935 4.2513 8.49935H4.95964V9.20768C4.95964 9.59888 5.27677 9.91601 5.66797 9.91601C6.05917 9.91601 6.3763 9.59888 6.3763 9.20768V8.49935H7.08464C7.47584 8.49935 7.79297 8.18222 7.79297 7.79102C7.79297 7.39981 7.47584 7.08268 7.08464 7.08268H6.3763V6.37435C6.3763 5.98315 6.05917 5.66602 5.66797 5.66602Z" fill="white"></path>
                      <path d="M12.75 7.08268C13.1412 7.08268 13.4583 6.76555 13.4583 6.37435C13.4583 5.98315 13.1412 5.66602 12.75 5.66602C12.3588 5.66602 12.0417 5.98315 12.0417 6.37435C12.0417 6.76555 12.3588 7.08268 12.75 7.08268Z" fill="white"></path>
                      <path d="M11.3333 9.91601C11.7245 9.91601 12.0417 9.59888 12.0417 9.20768C12.0417 8.81648 11.7245 8.49935 11.3333 8.49935C10.9421 8.49935 10.625 8.81648 10.625 9.20768C10.625 9.59888 10.9421 9.91601 11.3333 9.91601Z" fill="white"></path>
                    </svg>
                  </a>
                  <a className='two d-flex align-items-center gap-2' href="/">
                    Show Collections
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M11.0801 11.334L11.5042 11.9203C11.8709 12.4273 12.4637 12.7507 13.1277 12.7507C14.3316 12.7507 15.2631 11.6955 15.1137 10.5008L14.5652 6.11208C14.4322 5.04867 13.5283 4.25065 12.4566 4.25065H4.54294C3.47125 4.25065 2.56727 5.04867 2.43435 6.11208L1.88575 10.5008C1.73642 11.6955 2.66792 12.7507 3.87184 12.7507C4.53583 12.7507 5.12857 12.4273 5.49529 11.9203L5.91944 11.334H11.0801ZM10.3564 12.7507C10.9792 13.6116 11.9918 14.1673 13.1277 14.1673C15.1837 14.1673 16.7745 12.3653 16.5195 10.3251L15.9709 5.93636C15.7493 4.16401 14.2427 2.83398 12.4566 2.83398H4.54294C2.75679 2.83398 1.25016 4.16401 1.02862 5.93636L0.480024 10.3251C0.225003 12.3653 1.81579 14.1673 3.87184 14.1673C5.00767 14.1673 6.02032 13.6116 6.64311 12.7507H10.3564Z" fill="white"></path>
                      <path d="M5.66797 5.66602C5.27677 5.66602 4.95964 5.98315 4.95964 6.37435V7.08268H4.2513C3.8601 7.08268 3.54297 7.39981 3.54297 7.79102C3.54297 8.18222 3.8601 8.49935 4.2513 8.49935H4.95964V9.20768C4.95964 9.59888 5.27677 9.91601 5.66797 9.91601C6.05917 9.91601 6.3763 9.59888 6.3763 9.20768V8.49935H7.08464C7.47584 8.49935 7.79297 8.18222 7.79297 7.79102C7.79297 7.39981 7.47584 7.08268 7.08464 7.08268H6.3763V6.37435C6.3763 5.98315 6.05917 5.66602 5.66797 5.66602Z" fill="white"></path>
                      <path d="M12.75 7.08268C13.1412 7.08268 13.4583 6.76555 13.4583 6.37435C13.4583 5.98315 13.1412 5.66602 12.75 5.66602C12.3588 5.66602 12.0417 5.98315 12.0417 6.37435C12.0417 6.76555 12.3588 7.08268 12.75 7.08268Z" fill="white"></path>
                      <path d="M11.3333 9.91601C11.7245 9.91601 12.0417 9.59888 12.0417 9.20768C12.0417 8.81648 11.7245 8.49935 11.3333 8.49935C10.9421 8.49935 10.625 8.81648 10.625 9.20768C10.625 9.59888 10.9421 9.91601 11.3333 9.91601Z" fill="white"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="right">
                <img src="https://gaming-workdo.myshopify.com/cdn/shop/files/round-img-big.png?v=1671440773" alt="" />
                <img src="https://gaming-workdo.myshopify.com/cdn/shop/files/round-img-small.png?v=1671440815" alt="" />
                <img src="https://gaming-workdo.myshopify.com/cdn/shop/files/full-bluthooth.png?v=1671432444" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="slider py-5">
        <div className="container">
          <div className="heading d-flex align-items-center justify-content-between flex-wrap">
            <h2>Bestsellers of the week</h2>
            <a className='one d-flex align-items-center gap-2' href="/">
              Show products
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.0801 11.334L11.5042 11.9203C11.8709 12.4273 12.4637 12.7507 13.1277 12.7507C14.3316 12.7507 15.2631 11.6955 15.1137 10.5008L14.5652 6.11208C14.4322 5.04867 13.5283 4.25065 12.4566 4.25065H4.54294C3.47125 4.25065 2.56727 5.04867 2.43435 6.11208L1.88575 10.5008C1.73642 11.6955 2.66792 12.7507 3.87184 12.7507C4.53583 12.7507 5.12857 12.4273 5.49529 11.9203L5.91944 11.334H11.0801ZM10.3564 12.7507C10.9792 13.6116 11.9918 14.1673 13.1277 14.1673C15.1837 14.1673 16.7745 12.3653 16.5195 10.3251L15.9709 5.93636C15.7493 4.16401 14.2427 2.83398 12.4566 2.83398H4.54294C2.75679 2.83398 1.25016 4.16401 1.02862 5.93636L0.480024 10.3251C0.225003 12.3653 1.81579 14.1673 3.87184 14.1673C5.00767 14.1673 6.02032 13.6116 6.64311 12.7507H10.3564Z" fill="white"></path>
                <path d="M5.66797 5.66602C5.27677 5.66602 4.95964 5.98315 4.95964 6.37435V7.08268H4.2513C3.8601 7.08268 3.54297 7.39981 3.54297 7.79102C3.54297 8.18222 3.8601 8.49935 4.2513 8.49935H4.95964V9.20768C4.95964 9.59888 5.27677 9.91601 5.66797 9.91601C6.05917 9.91601 6.3763 9.59888 6.3763 9.20768V8.49935H7.08464C7.47584 8.49935 7.79297 8.18222 7.79297 7.79102C7.79297 7.39981 7.47584 7.08268 7.08464 7.08268H6.3763V6.37435C6.3763 5.98315 6.05917 5.66602 5.66797 5.66602Z" fill="white"></path>
                <path d="M12.75 7.08268C13.1412 7.08268 13.4583 6.76555 13.4583 6.37435C13.4583 5.98315 13.1412 5.66602 12.75 5.66602C12.3588 5.66602 12.0417 5.98315 12.0417 6.37435C12.0417 6.76555 12.3588 7.08268 12.75 7.08268Z" fill="white"></path>
                <path d="M11.3333 9.91601C11.7245 9.91601 12.0417 9.59888 12.0417 9.20768C12.0417 8.81648 11.7245 8.49935 11.3333 8.49935C10.9421 8.49935 10.625 8.81648 10.625 9.20768C10.625 9.59888 10.9421 9.91601 11.3333 9.91601Z" fill="white"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="carousel mt-5">
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 6
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 6
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 6
              },
              992: {
                slidesPerView: 4,
                spaceBetween: 6
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 6
              }
            }}
          >
            {Product.slice(3, 10).map(item => (
              <SwiperSlide key={item.id}>
                <div className="carousel-card px-2 py-3 d-flex flex-column gap-5">
                  <div className="title d-flex flex-column">
                    <a className='fw-bold' href="/">{item.title.slice(0, 19)}...</a>
                    <span>TYPE: {item.type}</span>
                  </div>
                  <span className='new px-1'>{item.new}</span>
                  <a href="/"><img className='mx-3' src={item.image} alt="image" /></a>
                  <div className="footer d-flex align-items-center justify-content-between">
                    <div className="price fw-bold">
                      <div className="newprice">{item.price}<sup className='fw-medium'>USD</sup></div>
                      <div className="oldprice text-decoration-line-through opacity-50">{item.oldprice}<sup>USD</sup></div>
                    </div>
                    <a href="/">Add to Cart</a>
                  </div>
                  <div className="action px-3 py-1 d-flex align-items-center gap-2">
                    <a href="/"><i className="fa-regular fa-heart"></i></a>
                    <span> | </span>
                    <a href="/"><i className="fa-regular fa-eye"></i></a>
                    <span> | </span>
                    <a href="/"><i className="fa-solid fa-code-compare"></i></a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="categories py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-5 col-lg-5">
              <div className="heading">
                <h2 className='fw-bold'>Best <b>Pro <br /> Gaming</b><br /> Categories</h2>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-7 col-lg-7"></div>
          </div>
        </div>
      </div>

      <div className="subscribe py-5">
        <div className="container">
          <div className="row d-flex">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 mt-5">
              <span className='rounded px-1 py-1'>Subscribe Us</span>
              <h2 className='mt-3 fw-bold'>Subscribe newsletter <br /> and <b>get -20% off</b></h2>
              <p>Almost three-quarters of dedicated PC gamers say their main motivation to <br />
                upgrade is improving gaming experiences.</p>
              <div className="input-group w-75">
                <input type="text" className='px-3 py-2 form-control' placeholder="Enter email address..." />
                <button className="btn btn-outline-secondary px-4" type="button">Subscribe</button>
              </div>

            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <img style={{ width: "100%" }} src="https://gaming-workdo.myshopify.com/cdn/shop/files/subscribe-img.png?v=1670903810" alt="" />
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}

export default Home