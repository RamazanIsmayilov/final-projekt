import React, { useContext } from 'react'
import SingleCard from '../components/SingleCard'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { ProductContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';

const Product = () => {

  const [productdata] = useContext(ProductContext);


  return (
    <>
      <div className="productpage">
        <div className="heading p-5">
          <div className="container d-flex flex-column gap-4">
            <Link to="/" className='d-flex align-items-center gap-3'>
              <IoArrowBackCircleOutline className='icon fs-3' />
              <span>Back to home</span>
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
                      <span>The highest price is 940.00USD</span>
                      <a href="/">Reset</a>
                    </div>
                    <div className="range d-flex align-items-center justify-content-between mt-3">
                      <input className="range" type="range" />
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
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">Cards</label>
                      </div>
                      <span className='number'>(5)</span>
                    </div>
                    <div className="select d-flex align-items-center justify-content-between mt-1">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">Chairs</label>
                      </div>
                      <span className='number'>(3)</span>
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
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">Game PCs</label>
                      </div>
                      <span className='number'>(3)</span>
                    </div>
                    <div className="select d-flex align-items-center justify-content-between mt-1">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">Headset</label>
                      </div>
                      <span className='number'>(1)</span>
                    </div>
                    <div className="select d-flex align-items-center justify-content-between mt-1">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">Keycaps</label>
                      </div>
                      <span className='number'>(1)</span>
                    </div>
                    <div className="select d-flex align-items-center justify-content-between mt-1">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">Monitors</label>
                      </div>
                      <span className='number'>(4)</span>
                    </div>
                    <div className="select d-flex align-items-center justify-content-between mt-1">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" />
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
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">Acer</label>
                      </div>
                      <span className='number'>(1)</span>
                    </div>
                    <div className="select d-flex align-items-center justify-content-between mt-1">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">Electrobot</label>
                      </div>
                      <span className='number'>(2)</span>
                    </div>
                    <div className="select d-flex align-items-center justify-content-between mt-1">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">HyperX</label>
                      </div>
                      <span className='number'>(1)</span>
                    </div>
                    <div className="select d-flex align-items-center justify-content-between mt-1">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">KandE</label>
                      </div>
                      <span className='number'>(1)</span>
                    </div>
                    <div className="select d-flex align-items-center justify-content-between mt-1">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">Kepler Brooks</label>
                      </div>
                      <span className='number'>(4)</span>
                    </div>
                    <div className="select d-flex align-items-center justify-content-between mt-1">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">Lenova</label>
                      </div>
                      <span className='number'>(1)</span>
                    </div>
                    <div className="select d-flex align-items-center justify-content-between mt-1">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">LG</label>
                      </div>
                      <span className='number'>(1)</span>
                    </div>
                    <div className="select d-flex align-items-center justify-content-between mt-1">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">Samsung</label>
                      </div>
                      <span className='number'>(1)</span>
                    </div>
                    <div className="select d-flex align-items-center justify-content-between mt-1">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">Sony PS5</label>
                      </div>
                      <span className='number'>(2)</span>
                    </div>
                    <div className="select d-flex align-items-center justify-content-between mt-1">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">Vulture</label>
                      </div>
                      <span className='number'>(1)</span>
                    </div>
                    <div className="select d-flex align-items-center justify-content-between mt-1">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">XFX</label>
                      </div>
                      <span className='number'>(9)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-9 col-lg-9">
                <div className="row">
                  {productdata.map(item => (
                    <SingleCard
                      id={item.id}
                      title={item.title}
                      type={item.type}
                      neew={item.neew}
                      image={item.image}
                      price={item.price}
                      oldprice={item.oldprice}
                      alldata={item}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Product