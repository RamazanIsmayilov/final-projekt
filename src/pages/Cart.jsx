import React, { useContext } from 'react'
import { IoArrowBackCircleOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { ProductContext } from '../context/ProductContext';


const Cart = () => {
  const [productdata] = useContext(ProductContext);


  const {
    isEmpty,
    emptyCart,
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
        {isEmpty ? <div className='text-center'><img width={300} src="https://schoolville.com/assets/img/empty-cart-illustration.gif" /></div> :
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
              {productdata.map(item => (
                <tr>
                  <td><img src={item.image} /></td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>a</td>
                  <td>@mdo</td>
                </tr>
              ))}
            </tbody>
          </table>}
      </div>
    </div>
  )
}

export default Cart