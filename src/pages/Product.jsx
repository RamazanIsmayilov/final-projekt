import React, { useContext } from 'react'
import SingleCard from '../components/SingleCard'
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
              <span class="svg-ic d-flex align-items-center justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="5" viewBox="0 0 11 5" fill="white">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5791 2.28954C10.5791 2.53299 10.3818 2.73035 10.1383 2.73035L1.52698 2.73048L2.5628 3.73673C2.73742 3.90636 2.74146 4.18544 2.57183 4.36005C2.40219 4.53467 2.12312 4.53871 1.9485 4.36908L0.133482 2.60587C0.0480403 2.52287 -0.000171489 2.40882 -0.000171488 2.2897C-0.000171486 2.17058 0.0480403 2.05653 0.133482 1.97353L1.9485 0.210321C2.12312 0.0406877 2.40219 0.044729 2.57183 0.219347C2.74146 0.393966 2.73742 0.673036 2.5628 0.842669L1.52702 1.84888L10.1383 1.84875C10.3817 1.84874 10.5791 2.04609 10.5791 2.28954Z" fill="white"></path>
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