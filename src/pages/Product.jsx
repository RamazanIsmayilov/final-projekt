import React, { useContext, useState } from 'react'
import SingleCard from '../components/SingleCard'
import { ProductContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';
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

  const [typeProduct, setTypeProduct] = useState([]);
  const [brandProduct, setBrandProduct] = useState([]);
  const [priceProduct, setPriceProduct] = useState([]);
  const [inputValue, setInputValue] = useState(375.00);

  const filterType = (type) => {
    const typeData = productdata.filter(p => p.type === type);
    setTypeProduct(typeData);
  }

  const filterBrand = (type) => {
    const brandData = productdata.filter(p => p.brand === type);
    setBrandProduct(brandData);
  }

  const filterPrice = () => {
    const priceData = productdata.filter(p => p.price <= inputValue)
    setPriceProduct(priceData);
  }


  return (
    <>
      <div className="productpage mb-5">
        <div className="heading p-5">
          <div className="container d-flex flex-column gap-4">
            <Link to="/" className='d-flex align-items-center gap-3'>
              <span className="svg-ic d-flex align-items-center justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="5" viewBox="0 0 11 5" fill="white">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10.5791 2.28954C10.5791 2.53299 10.3818 2.73035 10.1383 2.73035L1.52698 2.73048L2.5628 3.73673C2.73742 3.90636 2.74146 4.18544 2.57183 4.36005C2.40219 4.53467 2.12312 4.53871 1.9485 4.36908L0.133482 2.60587C0.0480403 2.52287 -0.000171489 2.40882 -0.000171488 2.2897C-0.000171486 2.17058 0.0480403 2.05653 0.133482 1.97353L1.9485 0.210321C2.12312 0.0406877 2.40219 0.044729 2.57183 0.219347C2.74146 0.393966 2.73742 0.673036 2.5628 0.842669L1.52702 1.84888L10.1383 1.84875C10.3817 1.84874 10.5791 2.04609 10.5791 2.28954Z" fill="white"></path>
                </svg>
              </span>
              <span className='fw-bold'>Back to home</span>
            </Link>
            <p className='fs-1 fw-bold'>Products</p>
          </div>
        </div>

        <div className="products mt-5">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                <div className="filter">
                  <h4 className='fw-bold'>Filters</h4>
                  <div className="availability mt-5">
                    <h6 className='fw-bold'>AVAILABILITY</h6>
                    <div className="caption d-flex align-items-center justify-content-between">
                      <span>0 selected</span>
                      <a href="/">Reset</a>
                    </div>
                    <div className="select d-flex align-items-center justify-content-between mt-4">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">In stock</label>
                      </div>
                      <span className='number'>(19)</span>
                    </div>
                    <div className="select d-flex align-items-center justify-content-between">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">Out of stock</label>
                      </div>
                      <span className='number'>(7)</span>
                    </div>
                  </div>
                  <div className="price mt-5">
                    <h6 className='fw-bold'>PRICE</h6>
                    <div className="caption d-flex align-items-center justify-content-between">
                      <span>Price: {inputValue}.00 USD</span>
                      <a href="/">Reset</a>
                    </div>
                    <div className="range d-flex align-items-center justify-content-between mt-3">
                      <input onChange={(e) => {
                        setInputValue(e.target.value)
                        filterPrice();
                      }} className="range" min={375.00} max={940.00} defaultValue={375.00} type="range" />
                    </div>
                  </div>
                  <div className="producttype mt-5">
                    <h6 className='fw-bold'>PRODUCT TYPE</h6>
                    <div className="caption d-flex align-items-center justify-content-between">
                      <span>0 selected</span>
                      <a href="/">Reset</a>
                    </div>
                    <div className="select d-flex align-items-center justify-content-between mt-4">
                      <div className="form-check">
                        <input onClick={() => { filterType("Cards") }} className="form-check-input" type="checkbox" />
                        <label className="form-check-label">Cards</label>
                      </div>
                      <span className='number'>(5)</span>
                    </div>
                    <div className="select d-flex align-items-center justify-content-between mt-1">
                      <div className="form-check">
                        <input onClick={() => { filterType("Chair") }} className="form-check-input" type="checkbox" />
                        <label className="form-check-label">Chair</label>
                      </div>
                      <span className='number'>(3)</span>
                    </div>
                    <div className="select d-flex align-items-center justify-content-between mt-1">
                      <div className="form-check">
                        <input onClick={() => { filterType("Chairs") }} className="form-check-input" type="checkbox" />
                        <label className="form-check-label">Chairs</label>
                      </div>
                      <span className='number'>(1)</span>
                    </div>
                    <div className="select d-flex align-items-center justify-content-between mt-1">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">Console</label>
                      </div>
                      <span className='number'>(4)</span>
                    </div>
                    <div className="select d-flex align-items-center justify-content-between mt-1">
                      <div className="form-check">
                        <input onClick={() => { filterType("Game PCs") }} className="form-check-input" type="checkbox" />
                        <label className="form-check-label">Game PCs</label>
                      </div>
                      <span className='number'>(3)</span>
                    </div>
                    <div className="select d-flex align-items-center justify-content-between mt-1">
                      <div className="form-check">
                        <input onClick={() => { filterType("Headset") }} className="form-check-input" type="checkbox" />
                        <label className="form-check-label">Headset</label>
                      </div>
                      <span className='number'>(1)</span>
                    </div>
                    <div className="select d-flex align-items-center justify-content-between mt-1">
                      <div className="form-check">
                        <input onClick={() => { filterType("Keycaps") }} className="form-check-input" type="checkbox" />
                        <label className="form-check-label">Keycaps</label>
                      </div>
                      <span className='number'>(1)</span>
                    </div>
                    <div className="select d-flex align-items-center justify-content-between mt-1">
                      <div className="form-check">
                        <input onClick={() => { filterType("Monitors") }} className="form-check-input" type="checkbox" />
                        <label className="form-check-label">Monitors</label>
                      </div>
                      <span className='number'>(4)</span>
                    </div>
                    <div className="select d-flex align-items-center justify-content-between mt-1">
                      <div className="form-check">
                        <input onClick={() => { filterType("Remote") }} className="form-check-input" type="checkbox" />
                        <label className="form-check-label">Remote</label>
                      </div>
                      <span className='number'>(2)</span>
                    </div>
                  </div>
                  <div className="brand mt-5">
                    <h6 className='fw-bold'>Brand</h6>
                    <div className="caption d-flex align-items-center justify-content-between">
                      <span>0 selected</span>
                      <a href="/">Reset</a>
                    </div>
                    <div className="select d-flex align-items-center justify-content-between mt-4">
                      <div className="form-check">
                        <input onClick={() => { filterBrand("Acer") }} className="form-check-input" type="checkbox" />
                        <label className="form-check-label">Acer</label>
                      </div>
                      <span className='number'>(1)</span>
                    </div>
                    <div className="select d-flex align-items-center justify-content-between mt-1">
                      <div className="form-check">
                        <input onClick={() => { filterBrand("Electrobot") }} className="form-check-input" type="checkbox" />
                        <label className="form-check-label">Electrobot</label>
                      </div>
                      <span className='number'>(2)</span>
                    </div>
                    <div className="select d-flex align-items-center justify-content-between mt-1">
                      <div className="form-check">
                        <input onClick={() => { filterBrand("HyperX") }} className="form-check-input" type="checkbox" />
                        <label className="form-check-label">HyperX</label>
                      </div>
                      <span className='number'>(1)</span>
                    </div>
                    <div className="select d-flex align-items-center justify-content-between mt-1">
                      <div className="form-check">
                        <input onClick={() => { filterBrand("KandE") }} className="form-check-input" type="checkbox" />
                        <label className="form-check-label">KandE</label>
                      </div>
                      <span className='number'>(1)</span>
                    </div>
                    <div className="select d-flex align-items-center justify-content-between mt-1">
                      <div className="form-check">
                        <input onClick={() => { filterBrand("Kepler Brooks") }} className="form-check-input" type="checkbox" />
                        <label className="form-check-label">Kepler Brooks</label>
                      </div>
                      <span className='number'>(4)</span>
                    </div>
                    <div className="select d-flex align-items-center justify-content-between mt-1">
                      <div className="form-check">
                        <input onClick={() => { filterBrand("Lenova") }} className="form-check-input" type="checkbox" />
                        <label className="form-check-label">Lenova</label>
                      </div>
                      <span className='number'>(1)</span>
                    </div>
                    <div className="select d-flex align-items-center justify-content-between mt-1">
                      <div className="form-check">
                        <input onClick={() => { filterBrand("LG") }} className="form-check-input" type="checkbox" />
                        <label className="form-check-label">LG</label>
                      </div>
                      <span className='number'>(1)</span>
                    </div>
                    <div className="select d-flex align-items-center justify-content-between mt-1">
                      <div className="form-check">
                        <input onClick={() => { filterBrand("Samsung") }} className="form-check-input" type="checkbox" />
                        <label className="form-check-label">Samsung</label>
                      </div>
                      <span className='number'>(1)</span>
                    </div>
                    <div className="select d-flex align-items-center justify-content-between mt-1">
                      <div className="form-check">
                        <input onClick={() => { filterBrand("Sony PS5") }} className="form-check-input" type="checkbox" />
                        <label className="form-check-label">Sony PS5</label>
                      </div>
                      <span className='number'>(2)</span>
                    </div>
                    <div className="select d-flex align-items-center justify-content-between mt-1">
                      <div className="form-check">
                        <input onClick={() => { filterBrand("Vulture") }} className="form-check-input" type="checkbox" />
                        <label className="form-check-label">Vulture</label>
                      </div>
                      <span className='number'>(1)</span>
                    </div>
                    <div className="select d-flex align-items-center justify-content-between mt-1">
                      <div className="form-check">
                        <input onClick={() => { filterBrand("XFX") }} className="form-check-input" type="checkbox" />
                        <label className="form-check-label">XFX</label>
                      </div>
                      <span className='number'>(9)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-9 col-lg-9">
                <div className="row">
                  {inputValue === 375 ? records.map(item => (
                    <SingleCard
                      key={item}
                      id={item.id}
                      title={item.title}
                      type={item.type}
                      brand={item.brand}
                      neew={item.neew}
                      image={item.image}
                      price={item.price}
                      oldprice={item.oldprice}
                      alldata={item}
                    />
                  )) : priceProduct.map(item => (
                    <SingleCard
                      key={item}
                      id={item.id}
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
                <nav className='d-flex align-items-center justify-content-center mt-5'>
                  <ul className='pagination d-flex gap-1'>
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
    </>
  )
}

export default Product