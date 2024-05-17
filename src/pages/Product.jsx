import React, { useContext, useState } from 'react'
import SingleCard from '../components/SingleCard';
import { ProductContext } from '../context/ProductContext';
import { ModeContext } from '../context/ModeContext';
import { LangContext } from '../context/LangContext';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";


const Product = () => {
  const [productdata] = useContext(ProductContext);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 8;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = productdata.slice(firstIndex, lastIndex);
  const npage = Math.ceil(productdata.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const changePage = (id) => {
    setCurrentPage(id)
  }

  const nextPage = () => {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1)
    }
  }

  const [brand, setBrand] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(940.00);


  const filterFunc = () => {
    let filteredProducts = productdata;
    console.log(filteredProducts.filter(p => p.brand === brand));

    if (brand != "") {
      filteredProducts = filteredProducts.filter(p => p.brand === brand);
    }

    filteredProducts = filteredProducts.filter(p => p.price >= minPrice && p.price <= maxPrice);

    return filteredProducts;
  };
  const filterBrand = (brand) => {
    setBrand(brand);
  };

  const MinPriceChange = (e) => {
    setMinPrice(parseInt(e.target.value));
  };

  const MaxPriceChange = (e) => {
    setMaxPrice(parseInt(e.target.value));
  };

  const { mode } = useContext(ModeContext)
  const { lang } = useContext(LangContext)

  const [showProductList, setShowProductList] = useState(productdata);

  const setLowToHigh = () => {
    const sortedProducts = productdata.sort((a, b) => a.price - b.price);
    setShowProductList([...sortedProducts]);
  };
  const setHighToLow = () => {
    const reverseSortedProducts = productdata.sort((a, b) => b.price - a.price);
    setShowProductList([...reverseSortedProducts]);
  };
  const setza = () => {
    const Sortedaz = productdata.sort((a, b) => a.title < b.title ? 1 : -1);
    setShowProductList([...Sortedaz]);
  };
  const setaz = () => {
    const Sortedza = productdata.sort((a, b) => a.title > b.title ? 1 : -1);
    setShowProductList([...Sortedza]);
  };

  const options = [
    {
      label: 'Price,low to high',
      value: 1
    },
    {
      label: 'Price,hight to low',
      value: 2
    },
    {
      label: 'Alphabetically,A-Z',
      value: 3
    },
    {
      label: 'Alphabetically,Z-A',
      value: 4
    },
  ]

  const formChange = (event) => {
    const value = parseInt(event.target.value, 10);
    switch (value) {
      case 1:
        setLowToHigh();
        break;
      case 2:
        setHighToLow();
        break;
      case 3:
        setaz();
        break;
      case 4:
        setza();
        break;
      default:
        break;
    }
  };


  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Products-Gaming WorkDo</title>
      </Helmet>

      <div className={mode ? "light" : "dark"}>
        <div className="productpage">
          <div className="heading py-5">
            <div className="container d-flex flex-column gap-4">
              <Link to="/" className='d-flex align-items-center gap-3'>
                <span className="svg-ic d-flex align-items-center justify-content-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="5" viewBox="0 0 11 5" fill="white">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.5791 2.28954C10.5791 2.53299 10.3818 2.73035 10.1383 2.73035L1.52698 2.73048L2.5628 3.73673C2.73742 3.90636 2.74146 4.18544 2.57183 4.36005C2.40219 4.53467 2.12312 4.53871 1.9485 4.36908L0.133482 2.60587C0.0480403 2.52287 -0.000171489 2.40882 -0.000171488 2.2897C-0.000171486 2.17058 0.0480403 2.05653 0.133482 1.97353L1.9485 0.210321C2.12312 0.0406877 2.40219 0.044729 2.57183 0.219347C2.74146 0.393966 2.73742 0.673036 2.5628 0.842669L1.52702 1.84888L10.1383 1.84875C10.3817 1.84874 10.5791 2.04609 10.5791 2.28954Z" fill="white"></path>
                  </svg>
                </span>
                <span className='fw-bold'>{lang ? "Geriyə qayıt" : "Back to home"}</span>
              </Link>
              <p className='fs-1 fw-bold'>{lang ? "Məhsullar" : "Products"}</p>
            </div>
          </div>

          <div className="laptop">
            <div className="products mt-5">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                    <div className="filter">
                      <h4 className='fw-bold'>{lang ? "Filtrlər" : "Filters"}</h4>
                      <div className="price mt-5">
                        <h6 className='fw-bold'>{lang ? "QİYMƏT" : "PRICE"}</h6>
                        <div className="range mt-3">
                          <input type="range" min="0" max="940.00" value={minPrice}
                            onChange={MinPriceChange} className="slider slider1" />
                          <input type="range" min="0" max="940.00" value={maxPrice}
                            onChange={MaxPriceChange} className="slider slider2" />
                          <p className='mt-3'>{minPrice}$ - {maxPrice}$</p>
                        </div>
                      </div>
                      <div className="brand mt-5">
                        <h6 className='fw-bold'>{lang ? "Brend" : "Brand"}</h6>
                        <div className="select d-flex align-items-center justify-content-between mt-3">
                          <button onClick={() => { filterBrand("Acer") }}>Acer</button>
                          <span className='number'>(1)</span>
                        </div>
                        <div className="select d-flex align-items-center justify-content-between mt-1">
                          <button onClick={() => { filterBrand("Electrobot") }}>Electrobot</button>
                          <span className='number'>(2)</span>
                        </div>
                        <div className="select d-flex align-items-center justify-content-between mt-1">
                          <button onClick={() => { filterBrand("HyperX") }}>HyperX</button>
                          <span className='number'>(1)</span>
                        </div>
                        <div className="select d-flex align-items-center justify-content-between mt-1">
                          <button onClick={() => { filterBrand("KandE") }}>KandE</button>
                          <span className='number'>(1)</span>
                        </div>
                        <div className="select d-flex align-items-center justify-content-between mt-1">
                          <button onClick={() => { filterBrand("Kepler Brooks") }}>Kepler Brooks</button>
                          <span className='number'>(4)</span>
                        </div>
                        <div className="select d-flex align-items-center justify-content-between mt-1">
                          <button onClick={() => { filterBrand("Lenova") }}>Lenova</button>
                          <span className='number'>(1)</span>
                        </div>
                        <div className="select d-flex align-items-center justify-content-between mt-1">
                          <button onClick={() => { filterBrand("LG") }}>LG</button>
                          <span className='number'>(1)</span>
                        </div>
                        <div className="select d-flex align-items-center justify-content-between mt-1">
                          <button onClick={() => { filterBrand("Samsung") }}>Samsung</button>
                          <span className='number'>(1)</span>
                        </div>
                        <div className="select d-flex align-items-center justify-content-between mt-1">
                          <button onClick={() => { filterBrand("Sony PS5") }}>Sony PS5</button>
                          <span className='number'>(2)</span>
                        </div>
                        <div className="select d-flex align-items-center justify-content-between mt-1">
                          <button onClick={() => { filterBrand("XFX") }}>XFX</button>
                          <span className='number'>(9)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-9 col-lg-9">
                    <div className="product">
                      <div className="header d-flex align-items-center justify-content-between">
                        <div className="left d-flex align-items-center  gap-2">
                          <Link to='/'>Home</Link>
                          <span>/</span>
                          <Link to='/products'>Products</Link>
                        </div>
                        <div className="right">
                          <span className='mx-2'>Sort by:</span>
                          <select onChange={formChange}>
                            {options.map(option => (
                              <option value={option.value}>{option.label}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="row">
                        {brand.length == '' ? records.map(item => (
                          <SingleCard
                            id={item.id}
                            description={item.description}
                            title={item.title}
                            type={item.type}
                            brand={item.brand}
                            neew={item.neew}
                            image={item.image}
                            price={item.price}
                            oldprice={item.oldprice}
                            alldata={item}
                          />
                        )) : filterFunc().map(item => (
                          <SingleCard
                            id={item.id}
                            description={item.description}
                            title={item.title}
                            type={item.type}
                            brand={item.brand}
                            neew={item.neew}
                            image={item.image}
                            price={item.price}
                            oldprice={item.oldprice}
                            alldata={item}
                          />
                        ))}
                      </div>
                    </div>
                    <nav className='d-flex align-items-center justify-content-center mt-5'>
                      <ul className='pagination d-flex gap-2'>
                        <li className='page-item'>
                          <a onClick={prePage} href="#" className='page-link'><FaChevronLeft /></a>
                        </li>
                        {
                          numbers.map((n, i) => (
                            <li className={`page-item ${currentPage === n ? `active` : ''}`} key={i}>
                              <a onClick={(e) => changePage(n)} href="#" className='page-link'>{n}</a>
                            </li>
                          ))
                        }
                        <li className='page-item'>
                          <a onClick={nextPage} href="#" className='page-link'><FaChevronRight /></a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mobile">
            <div className="products mt-5">
              <div className="container">
                <div className="row d-flex gap-5">
                  <div className="col-12 col-sm-12 col-md-12  col-lg-10">
                    <div className="filter">
                      <h4 className='fw-bold'>{lang ? "Filtrlər" : "Filters"}</h4>
                      <div className="price mt-5">
                        <h6 className='fw-bold'>{lang ? "QİYMƏT" : "PRICE"}</h6>
                        <div className="range mt-3">
                          <input type="range" min="0" max="940.00" value={minPrice}
                            onChange={MinPriceChange} className="slider slider1" />
                          <input type="range" min="0" max="940.00" value={maxPrice}
                            onChange={MaxPriceChange} className="slider slider2" />
                          <p className='mt-3'>{minPrice}$ - {maxPrice}$</p>
                        </div>
                      </div>
                      <div className="brand mt-5">
                        <h6 className='fw-bold'>{lang ? "Brend" : "Brand"}</h6>
                        <div className="select d-flex align-items-center justify-content-between mt-3">
                          <button onClick={() => { filterBrand("Acer") }}>Acer</button>
                          <span className='number'>(1)</span>
                        </div>
                        <div className="select d-flex align-items-center justify-content-between mt-1">
                          <button onClick={() => { filterBrand("Electrobot") }}>Electrobot</button>
                          <span className='number'>(2)</span>
                        </div>
                        <div className="select d-flex align-items-center justify-content-between mt-1">
                          <button onClick={() => { filterBrand("HyperX") }}>HyperX</button>
                          <span className='number'>(1)</span>
                        </div>
                        <div className="select d-flex align-items-center justify-content-between mt-1">
                          <button onClick={() => { filterBrand("KandE") }}>KandE</button>
                          <span className='number'>(1)</span>
                        </div>
                        <div className="select d-flex align-items-center justify-content-between mt-1">
                          <button onClick={() => { filterBrand("Kepler Brooks") }}>Kepler Brooks</button>
                          <span className='number'>(4)</span>
                        </div>
                        <div className="select d-flex align-items-center justify-content-between mt-1">
                          <button onClick={() => { filterBrand("Lenova") }}>Lenova</button>
                          <span className='number'>(1)</span>
                        </div>
                        <div className="select d-flex align-items-center justify-content-between mt-1">
                          <button onClick={() => { filterBrand("LG") }}>LG</button>
                          <span className='number'>(1)</span>
                        </div>
                        <div className="select d-flex align-items-center justify-content-between mt-1">
                          <button onClick={() => { filterBrand("Samsung") }}>Samsung</button>
                          <span className='number'>(1)</span>
                        </div>
                        <div className="select d-flex align-items-center justify-content-between mt-1">
                          <button onClick={() => { filterBrand("Sony PS5") }}>Sony PS5</button>
                          <span className='number'>(2)</span>
                        </div>
                        <div className="select d-flex align-items-center justify-content-between mt-1">
                          <button onClick={() => { filterBrand("XFX") }}>XFX</button>
                          <span className='number'>(9)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                    <div className="product">
                      <div className="header d-flex align-items-center justify-content-between flex-wrap">
                        <div className="left d-flex align-items-center gap-2">
                          <Link to='/'>Home</Link>
                          <span>/</span>
                          <Link to='/products'>Products</Link>
                        </div>
                        <div className="right">
                          <span>Sort by:</span>
                          <select onChange={formChange}>
                            {options.map(option => (
                              <option value={option.value}>{option.label}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="row">
                        {brand.length == '' ? records.map(item => (
                          <SingleCard
                            id={item.id}
                            description={item.description}
                            title={item.title}
                            type={item.type}
                            brand={item.brand}
                            neew={item.neew}
                            image={item.image}
                            price={item.price}
                            oldprice={item.oldprice}
                            alldata={item}
                          />
                        )) : filterFunc().map(item => (
                          <SingleCard
                            id={item.id}
                            description={item.description}
                            title={item.title}
                            type={item.type}
                            brand={item.brand}
                            neew={item.neew}
                            image={item.image}
                            price={item.price}
                            oldprice={item.oldprice}
                            alldata={item}
                          />
                        ))}
                      </div>
                    </div>
                    <nav className='d-flex align-items-center justify-content-center mt-5'>
                      <ul className='pagination d-flex gap-2'>
                        <li className='page-item'>
                          <a onClick={prePage} href="#" className='page-link'><FaChevronLeft /></a>
                        </li>
                        {
                          numbers.map((n, i) => (
                            <li className={`page-item ${currentPage === n ? `active` : ''}`} key={i}>
                              <a onClick={(e) => changePage(n)} href="#" className='page-link'>{n}</a>
                            </li>
                          ))
                        }
                        <li className='page-item'>
                          <a onClick={nextPage} href="#" className='page-link'><FaChevronRight /></a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product