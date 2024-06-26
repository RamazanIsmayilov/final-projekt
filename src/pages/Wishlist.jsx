import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Helmet } from "react-helmet";
import { useCart } from 'react-use-cart';
import { useWishlist } from "react-use-wishlist";
import { ToastContainer, toast } from 'react-toastify';
import { ModeContext } from '../context/ModeContext';
import { LangContext } from '../context/LangContext';

const Wishlist = ({ alldata }) => {

  const navigate = useNavigate()
  const { addItem } = useCart();

  const {
    isWishlistEmpty,
    totalWishlistItems,
    items,
    removeWishlistItem,
  } = useWishlist();

  const notifyCart = () => toast.success("Item add to your cart", {
    autoClose: 3000,
  });

  const addCart = (myalldata) => {
    addItem(myalldata)
    notifyCart();
  }

  const { mode } = useContext(ModeContext)
  const { lang } = useContext(LangContext)

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Wishlist-Gaming WorkDo</title>
      </Helmet>

      <div className={mode ? "light" : "dark"}>
        <div className="wishlistpage">
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
              <h5 className='fs-1 fw-bold'>{lang ? "İstək siyahısı" : "Wishlist"}</h5>
              <p>{lang ? "İstədiyiniz əşyalar və təcrübələr üçün fərdiləşdirilmiş kolleksiyanızı tərtib edə biləcəyiniz İstək Siyahısı xüsusiyyətimizə xoş gəlmisiniz." :
                "Welcome to our Wishlist feature, where you can curate your personalized collection of desired items and experiences."}</p>
            </div>
          </div>
          <div className="wishlist pb-4">
            <div className="container">
              <div className="title">
                <h2 className='d-flex align-items-center justify-content-center pt-5 pb-3 fw-bold'>{lang ? "İstək siyahısı" : "Wishlist"}({totalWishlistItems})</h2>
              </div>
              {isWishlistEmpty ?
                <div className='empty-laptop'>
                  <table>
                    <thead>
                      <tr>
                        <th className='text-center py-2' scope="col">{lang ? "Məhsul" : "Product"}</th>
                        <th className='text-center py-2' scope="col">{lang ? "Təfərrüatlar" : "Details"}</th>
                        <th className='text-center py-2' scope="col">{lang ? "Səbət düyməsi" : "Cart Button"}</th>
                        <th className='text-center py-2' scope="col">{lang ? "Sil" : "Delete"}</th>
                      </tr>
                    </thead>
                  </table>
                </div> :
                <div className='laptop'>
                  <table>
                    <thead>
                      <tr>
                        <th className='text-center py-2' scope="col">{lang ? "Məhsul" : "Product"}</th>
                        <th className='text-center py-2' scope="col">{lang ? "Təfərrüatlar" : "Details"}</th>
                        <th className='text-center py-2' scope="col">{lang ? "Səbət düyməsi" : "Cart Button"}</th>
                        <th className='text-center py-2' scope="col">{lang ? "Sil" : "Delete"}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map(item => (
                        <tr>
                          <td className='text-center'><img width={160} src={item.image} alt='' /></td>
                          <td className='text-center'>
                            <div className="brand mt-4">{item.brand}</div>
                            <div className="title fw-bold mt-4">{item.title}</div>
                            <div className="price mt-4">{item.price}.00USD</div>
                          </td>
                          <td className='text-center'>
                            <button className='addbtn mt-5' onClick={() => {localStorage.getItem("login") === "true" ? addCart(item) : navigate("/login")}}>{lang ? "Səbətə əlavə et" : "Add to Cart"}</button>
                          </td>
                          <td className='text-center'>
                            <button className='ms-1 removebtn mt-5' onClick={() => removeWishlistItem(item.id)}>
                              <svg width="28" height="28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" role="presentation" class="icon icon-remove">
                                <path d="M14 3h-3.53a3.07 3.07 0 00-.6-1.65C9.44.82 8.8.5 8 .5s-1.44.32-1.87.85A3.06 3.06 0 005.53 3H2a.5.5 0 000 1h1.25v10c0 .28.22.5.5.5h8.5a.5.5 0 00.5-.5V4H14a.5.5 0 000-1zM6.91 1.98c.23-.29.58-.48 1.09-.48s.85.19 1.09.48c.2.24.3.6.36 1.02h-2.9c.05-.42.17-.78.36-1.02zm4.84 11.52h-7.5V4h7.5v9.5z" fill="currentColor"></path>
                                <path d="M6.55 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5zM9.45 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5z" fill="currentColor"></path>
                              </svg>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              }
              {isWishlistEmpty ?
                <div className="empty-mobile">
                  <p className='border fw-bold text-center'>Wishlist is empty</p>
                </div> :
                <div className="mobile">
                  {items.map(item => (
                    <div className='content text-center'>
                      <div className="product">
                        <h3 className='fw-bold'>Product</h3>
                        <img width={200} src={item.image} alt="" />
                      </div>
                      <div className="details">
                        <h3 className='fw-bold'>Details</h3>
                        <p className='mt-4'>{item.brand}</p>
                        <h2>{item.title}</h2>
                        <span>{item.price}</span>
                      </div>
                      <div className="add-product mt-4">
                        <h3 className='fw-bold'>ADD PRODUCT</h3>
                        <button className='mt-3' onClick={addCart}>{lang ? "Səbətə əlavə et" : "Add to Cart"}</button>
                        < ToastContainer />
                      </div>
                      <div className="delete mt-4">
                        <h3 className='fw-bold'>DELETE</h3>
                        <button className='ms-1 removebtn mt-3' onClick={() => removeWishlistItem(item.id)}>
                          <svg width="28" height="28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" role="presentation" class="icon icon-remove">
                            <path d="M14 3h-3.53a3.07 3.07 0 00-.6-1.65C9.44.82 8.8.5 8 .5s-1.44.32-1.87.85A3.06 3.06 0 005.53 3H2a.5.5 0 000 1h1.25v10c0 .28.22.5.5.5h8.5a.5.5 0 00.5-.5V4H14a.5.5 0 000-1zM6.91 1.98c.23-.29.58-.48 1.09-.48s.85.19 1.09.48c.2.24.3.6.36 1.02h-2.9c.05-.42.17-.78.36-1.02zm4.84 11.52h-7.5V4h7.5v9.5z" fill="currentColor"></path>
                            <path d="M6.55 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5zM9.45 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5z" fill="currentColor"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Wishlist