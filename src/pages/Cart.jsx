import React from 'react'
import { IoArrowBackCircleOutline } from 'react-icons/io5'
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
    <div className='cartpage'>
      <div className="container">
        <div className="heading py-5">
          <Link to="/products" className='d-flex align-items-center gap-3'>
            <IoArrowBackCircleOutline className='icon fs-1' />
            <span>Continue shoppping</span>
          </Link>
          <p className='fs-1 fw-bold mt-3'>Your cart</p>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-8 col-lg-9">
            {isEmpty ? <div className='text-center'><img width={300} src="https://schoolville.com/assets/img/empty-cart-illustration.gif" alt='' /></div> :
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">IMAGE</th>
                    <th scope="col">NAME</th>
                    <th scope="col">PRICE</th>
                    <th scope="col">QUANTITY</th>
                    <th scope="col">TOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map(item => (
                    <tr>
                      <td><img width={80} src={item.image}  alt='' /></td>
                      <td><div className="title mt-4">{item.title}</div></td>
                      <td><div className="price mt-4">{item.price} USD</div></td>
                      <td>
                        <div className="quantity d-flex align-items-center justify-content-between mt-4 px-1">
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
                      <td><div className="total mt-4">{item.price * item.quantity}USD<button className='ms-1' onClick={() => removeItem(item.id)}>
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
              <span className='fw-bold'>{Math.round(cartTotal)} USD</span>
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