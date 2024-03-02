import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';


const Cart = () => {

  const {
    isEmpty,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
  } = useCart();

  return (
    <div className='cartpage mb-5'>
      <div className="container">
        <div className="heading py-5">
          <Link to="/products" className='d-flex align-items-center gap-3'>
            <span class="svg-ic d-flex align-items-center justify-content-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="5" viewBox="0 0 11 5" fill="white">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5791 2.28954C10.5791 2.53299 10.3818 2.73035 10.1383 2.73035L1.52698 2.73048L2.5628 3.73673C2.73742 3.90636 2.74146 4.18544 2.57183 4.36005C2.40219 4.53467 2.12312 4.53871 1.9485 4.36908L0.133482 2.60587C0.0480403 2.52287 -0.000171489 2.40882 -0.000171488 2.2897C-0.000171486 2.17058 0.0480403 2.05653 0.133482 1.97353L1.9485 0.210321C2.12312 0.0406877 2.40219 0.044729 2.57183 0.219347C2.74146 0.393966 2.73742 0.673036 2.5628 0.842669L1.52702 1.84888L10.1383 1.84875C10.3817 1.84874 10.5791 2.04609 10.5791 2.28954Z" fill="white"></path>
              </svg>
            </span>
            <span className='fw-bold'>Continue Shopping</span>
          </Link>
          <p className='fs-1 fw-bold mt-3'>Your cart</p>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-8 col-lg-9">
            {isEmpty ? <div className='text-center'><img width={300} src="https://schoolville.com/assets/img/empty-cart-illustration.gif" alt='' /></div> :
              <table className="table">
                <thead>
                  <tr>
                    <th className='text-center' scope="col">IMAGE</th>
                    <th className='text-center' scope="col">NAME</th>
                    <th className='text-center' scope="col">PRICE</th>
                    <th className='text-center' scope="col">QUANTITY</th>
                    <th className='text-center' scope="col">TOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map(item => (
                    <tr>
                      <td className='text-center'><img width={80} src={item.image} alt='' /></td>
                      <td className='text-center'><div className="title mt-4">{item.title}</div></td>
                      <td className='text-center'><div className="price mt-4">{item.price}.00 USD</div></td>
                      <td>
                        <div className="quantity d-flex align-items-center justify-content-between mt-4 ">
                          <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                            <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0 0.251343V1.74871H12V0.251343H0Z" fill="#61AFB3"></path>
                            </svg>
                          </button>
                          <span className='mx-2'>{item.quantity}</span>
                          <button variant='success' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.74868 5.25132V0H5.25132V5.25132H0V6.74868H5.25132V12H6.74868V6.74868H12V5.25132H6.74868Z" fill="#61AFB3"></path>
                            </svg>
                          </button>
                        </div>
                      </td>
                      <td className='text-center'><div className="total mt-4">{item.price * item.quantity}USD<button className='ms-1' onClick={() => removeItem(item.id)}>
                        <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" role="presentation" class="icon icon-remove">
                          <path d="M14 3h-3.53a3.07 3.07 0 00-.6-1.65C9.44.82 8.8.5 8 .5s-1.44.32-1.87.85A3.06 3.06 0 005.53 3H2a.5.5 0 000 1h1.25v10c0 .28.22.5.5.5h8.5a.5.5 0 00.5-.5V4H14a.5.5 0 000-1zM6.91 1.98c.23-.29.58-.48 1.09-.48s.85.19 1.09.48c.2.24.3.6.36 1.02h-2.9c.05-.42.17-.78.36-1.02zm4.84 11.52h-7.5V4h7.5v9.5z" fill="currentColor"></path>
                          <path d="M6.55 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5zM9.45 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5z" fill="currentColor"></path>
                        </svg></button></div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>}
          </div>

          <div className="col-12 col-sm-12 col-md-4 col-lg-3">
            <div className="border d-flex flex-column align-items-center gap-1">
              <h3 className='fw-bold'>Subtotal</h3>
              <span className='fw-bold'>{Math.round(cartTotal)}.00 USD</span>
              <p className="text-center">Taxes and shipping calculated at checkout</p>
              <button type='button'>Proceed to checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart