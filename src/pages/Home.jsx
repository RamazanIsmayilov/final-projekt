import React from 'react'
import SingleCard from '../components/SingleCard';
import Slider from "react-slick";
import { NavLink } from 'react-router-dom';
import '../assets/css/slick.css';
import '../assets/css/slick-theme.css';
import { ProductContext } from '../context/ProductContext';
import { useContext } from 'react'


const Home = () => {
  const [productdata] = useContext(ProductContext);

  const centerMode = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const unevenSetsInfinite = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          // slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const multipleitems = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const autoplay = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 5000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    spaceBetween: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


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
        <div className="slider-container mx-2">
          <Slider {...centerMode}>
            {productdata.slice(1, 8).map(item => (
              <SingleCard
                id={item.id}
                title={item.title}
                type={item.type}
                neew={item.neew}
                image={item.image}
                price={item.price}
                oldprice={item.oldprice}
              />
            ))}
          </Slider>
        </div>
      </div>

      <div className="categories mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-5 col-lg-4">
              <div className="heading">
                <h2 className='fw-bold'>Best <b>Pro Gaming</b> Categories</h2>
              </div>
              <div className="buttons d-flex flex-column gap-3 mt-5">
                <NavLink className='d-flex align-items-center justify-content-center gap-2'>
                  <img src="https://gaming-workdo.myshopify.com/cdn/shop/files/1_4e117171-0b63-4d80-b3fa-1ebc70c0f76e_18x17.png?v=1671615056" />
                  <span className='fw-bold'>Gaming peripherals</span>
                </NavLink>
                <NavLink className='d-flex align-items-center justify-content-center gap-2'>
                  <img src="https://gaming-workdo.myshopify.com/cdn/shop/files/2_226ba59a-8c4d-48fd-9928-e32ed3555f5b_18x17.png?v=1671615074" />
                  <span className='fw-bold'>Speakers & Headphones</span>
                </NavLink>
                <NavLink className='d-flex align-items-center justify-content-center gap-2'>
                  <img src="https://gaming-workdo.myshopify.com/cdn/shop/files/3_ae3d1802-51fa-4ec7-9b73-1279de22395f_18x17.png?v=1671615083" />
                  <span className='fw-bold'>Power Supplies</span>
                </NavLink>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-7 col-lg-8">
              <div className="slider-container">
                <Slider {...unevenSetsInfinite}>
                  {productdata.map(item => (
                    <SingleCard
                      id={item.id}
                      title={item.title}
                      type={item.type}
                      neew={item.neew}
                      image={item.image}
                      price={item.price}
                      oldprice={item.oldprice}
                    />
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="subscribe mt-5">
        <div className="container">
          <div className="row g-3">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 mt-5">
              <span className='rounded px-1 py-1'>Subscribe Us</span>
              <h2 className='mt-3 fw-bold'>Subscribe newsletter <br /> and <b>get -20% off</b></h2>
              <p>Almost three-quarters of dedicated PC gamers say their main motivation to <br />
                upgrade is improving gaming experiences.</p>
              <div className="input-group">
                <input type="email" className='px-3 py-2 form-control' placeholder="Enter email address..." />
                <button className="btn btn-outline-secondary px-4" type="button">Subscribe</button>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <img style={{ width: "100%" }} src="https://gaming-workdo.myshopify.com/cdn/shop/files/subscribe-img.png?v=1670903810" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="about-shop mt-5">
        <div className="container">
          <div className="heading">
            <h2 className='fw-bold'>About our shop</h2>
            <p>Gaming can help to improve cognitive skills such as problem-solving, memory, and attention.</p>
          </div>
          <div className="cards">
            <div className="row g-2">
              <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                <div className="borders p-3">
                  <h2 className='fw-bold'>01</h2>
                  <h4 className='fw-bold'>Gift boxes</h4>
                  <span>Finished products products <br /> and gift wrapping</span>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                <div className="borders p-3">
                  <h2 className='fw-bold'>02</h2>
                  <h4 className='fw-bold'>Promotions</h4>
                  <span>Large promotions with <br /> numerous discounts</span>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                <div className="borders p-3">
                  <h2 className='fw-bold'>03</h2>
                  <h4 className='fw-bold'>Shipping</h4>
                  <span>Free shipping on any order <br /> from $ 150</span>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                <div className="borders p-3">
                  <h2 className='fw-bold'>04</h2>
                  <h4 className='fw-bold'>Quality</h4>
                  <span>All products are made by <br /> engineers from India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="products mt-5 py-3">
        <div className="container">
          <div className="heading d-flex align-items-center justify-content-between flex-wrap">
            <h2 className='fw-bold'>Best Pro Gaming <br /> Products</h2>
            <p>With hardware, tools are what enable a person to install, remove, or <br />
              perform other actions on the components within their computer.</p>
            <a href="/" className='d-flex align-items-center gap-2'>
              show products
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="rgba(131, 131, 131, 1)">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.0801 11.334L11.5042 11.9203C11.8709 12.4273 12.4637 12.7507 13.1277 12.7507C14.3316 12.7507 15.2631 11.6955 15.1137 10.5008L14.5652 6.11208C14.4322 5.04867 13.5283 4.25065 12.4566 4.25065H4.54294C3.47125 4.25065 2.56727 5.04867 2.43435 6.11208L1.88575 10.5008C1.73642 11.6955 2.66792 12.7507 3.87184 12.7507C4.53583 12.7507 5.12857 12.4273 5.49529 11.9203L5.91944 11.334H11.0801ZM10.3564 12.7507C10.9792 13.6116 11.9918 14.1673 13.1277 14.1673C15.1837 14.1673 16.7745 12.3653 16.5195 10.3251L15.9709 5.93636C15.7493 4.16401 14.2427 2.83398 12.4566 2.83398H4.54294C2.75679 2.83398 1.25016 4.16401 1.02862 5.93636L0.480024 10.3251C0.225003 12.3653 1.81579 14.1673 3.87184 14.1673C5.00767 14.1673 6.02032 13.6116 6.64311 12.7507H10.3564Z" fill="rgba(131, 131, 131, 1)"></path>
                <path d="M5.66797 5.66602C5.27677 5.66602 4.95964 5.98315 4.95964 6.37435V7.08268H4.2513C3.8601 7.08268 3.54297 7.39981 3.54297 7.79102C3.54297 8.18222 3.8601 8.49935 4.2513 8.49935H4.95964V9.20768C4.95964 9.59888 5.27677 9.91601 5.66797 9.91601C6.05917 9.91601 6.3763 9.59888 6.3763 9.20768V8.49935H7.08464C7.47584 8.49935 7.79297 8.18222 7.79297 7.79102C7.79297 7.39981 7.47584 7.08268 7.08464 7.08268H6.3763V6.37435C6.3763 5.98315 6.05917 5.66602 5.66797 5.66602Z" fill="rgba(131, 131, 131, 1)"></path>
                <path d="M12.75 7.08268C13.1412 7.08268 13.4583 6.76555 13.4583 6.37435C13.4583 5.98315 13.1412 5.66602 12.75 5.66602C12.3588 5.66602 12.0417 5.98315 12.0417 6.37435C12.0417 6.76555 12.3588 7.08268 12.75 7.08268Z" fill="rgba(131, 131, 131, 1)"></path>
                <path d="M11.3333 9.91601C11.7245 9.91601 12.0417 9.59888 12.0417 9.20768C12.0417 8.81648 11.7245 8.49935 11.3333 8.49935C10.9421 8.49935 10.625 8.81648 10.625 9.20768C10.625 9.59888 10.9421 9.91601 11.3333 9.91601Z" fill="rgba(131, 131, 131, 1)"></path>
              </svg>
            </a>
          </div>
          <div className="slider-container">
            <Slider {...multipleitems}>
              {productdata.slice(8, 16).map(item => (
                <SingleCard
                  id={item.id}
                  title={item.title}
                  type={item.type}
                  neew={item.neew}
                  image={item.image}
                  price={item.price}
                  oldprice={item.oldprice}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <div className="testimonials mt-5">
        <div className="container">
          <div className="heading">
            <h2 className='fw-bold'>Testimonials</h2>
          </div>
          <div className="slider-container">
            <Slider {...autoplay}>
              <div className='cards d-flex align-items-center gap-3 p-2 flex-wrap'>
                <div className="img">
                  <img height={148} src="https://gaming-workdo.myshopify.com/cdn/shop/products/1_892117ef-00bc-43f7-8789-c8a6a7c180ee_306x203.png?v=1671449791" />
                </div>
                <div className="content">
                  <h3 className='fw-bold'>Escaping Reality!</h3>
                  <p>"I've been gaming for as long as I can remember, and I've <br />
                    always loved the sense of escape and adventure sd that it <br /> provides.</p>
                  <div className="content-bottom d-flex align-items-center justify-content-between">
                    <div className="info d-flex align-items-center gap-2">
                      <img src="https://gaming-workdo.myshopify.com/cdn/shop/files/client-img.png?v=1670904971" />
                      <h6 className='mt-2'><b className='fw-bold'>Sarah Johnson,</b> <br /> Client</h6>
                    </div>
                    <div className="star d-flex align-items-center gap-2 flex-wrap">
                      <img src="https://gaming-workdo.myshopify.com/cdn/shop/files/star.png?v=1670905123" />
                      <span><b>4.5 </b>/ 5.0</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='cards d-flex align-items-center gap-3 p-2 flex-wrap'>
                <div className="img">
                  <img height={148} src="https://gaming-workdo.myshopify.com/cdn/shop/files/testi-2.png?v=1670904959" />
                </div>
                <div className="content">
                  <h3 className='fw-bold'>One Level Time!</h3>
                  <p>I also love the challenge of trying to beat a difficult game or <br /> master a new skill.
                    Gaming   perseverance and determination, <br />
                    develop.</p>
                  <div className="content-bottom d-flex align-items-center justify-content-between">
                    <div className="info d-flex align-items-center gap-2">
                      <img src="https://gaming-workdo.myshopify.com/cdn/shop/files/client-img.png?v=1670904971" />
                      <h6 className='mt-2'><b className='fw-bold'>Alex Thompson,</b> <br /> Client</h6>
                    </div>
                    <div className="star d-flex align-items-center gap-2 flex-wrap">
                      <img src="https://gaming-workdo.myshopify.com/cdn/shop/files/star.png?v=1670905123" />
                      <span><b>4.5 </b>/ 5.0</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='cards d-flex align-items-center gap-3 p-2 flex-wrap'>
                <div className="img">
                  <img height={148} src="https://gaming-workdo.myshopify.com/cdn/shop/files/testi-1.png?v=1670904860" />
                </div>
                <div className="content">
                  <h3 className='fw-bold'>Gamer's Journey!</h3>
                  <p>Gaming has had a positive impact on my life in so many ways, <br />
                    and  I'm so glad that I'm able to share my love of gaming with <br /> others.</p>
                  <div className="content-bottom d-flex align-items-center justify-content-between">
                    <div className="info d-flex align-items-center gap-2">
                      <img src="https://gaming-workdo.myshopify.com/cdn/shop/files/client-img.png?v=1670904971" />
                      <h6 className='mt-2'><b className='fw-bold'>David Rodriguez,</b> <br /> Client</h6>
                    </div>
                    <div className="star d-flex align-items-center gap-2 flex-wrap">
                      <img src="https://gaming-workdo.myshopify.com/cdn/shop/files/star.png?v=1670905123" />
                      <span><b>4.5 </b>/ 5.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home