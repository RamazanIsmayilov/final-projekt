import React, { useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { CiHeart } from "react-icons/ci";
import { ProductContext } from '../context/ProductContext';
import slugify from 'react-slugify';
import { useCart } from 'react-use-cart';

const ProductDetails = () => {

    const { slug } = useParams();
    const [product] = useContext(ProductContext);
    const productDetails = product.filter(p => slugify(p.title) === slug);
    const { addItem } = useCart();
    const navigate = useNavigate();

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{productDetails[0].title}-Gaming WorkDo</title>
            </Helmet>

            <div className='productdetails py-5'>
                <div className="heading ">
                    <div className="container">
                        <Link to="/products" className='d-flex align-items-center gap-3'>
                            <span class="svg-ic d-flex align-items-center justify-content-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="5" viewBox="0 0 11 5" fill="white">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5791 2.28954C10.5791 2.53299 10.3818 2.73035 10.1383 2.73035L1.52698 2.73048L2.5628 3.73673C2.73742 3.90636 2.74146 4.18544 2.57183 4.36005C2.40219 4.53467 2.12312 4.53871 1.9485 4.36908L0.133482 2.60587C0.0480403 2.52287 -0.000171489 2.40882 -0.000171488 2.2897C-0.000171486 2.17058 0.0480403 2.05653 0.133482 1.97353L1.9485 0.210321C2.12312 0.0406877 2.40219 0.044729 2.57183 0.219347C2.74146 0.393966 2.73742 0.673036 2.5628 0.842669L1.52702 1.84888L10.1383 1.84875C10.3817 1.84874 10.5791 2.04609 10.5791 2.28954Z" fill="white"></path>
                                </svg>
                            </span>
                            <span className='fw-bold'>Back to category</span>
                        </Link>
                    </div>
                </div>
                {product.length === 0 ? <h1>Loding</h1> :
                    <div className="details">
                        <div className="container">
                            <div className="row flex-lg-row-reverse py-4">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                    <div className="image d-flex align-items-center justify-content-center">
                                        <img width={470} src={productDetails[0].image} alt='' />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                    <div className="head d-flex align-items-center gap-3 mt-3">
                                        <span className='brand rounded'>{productDetails[0].brand}</span>
                                        <Link to="/wishlist" className="wishlist d-flex align-items-center gap-2">
                                            <CiHeart className='icon' />
                                            <span className='fw-bold'>Add to wishlist</span>
                                        </Link>
                                    </div>
                                    <div className="stars d-flex gap-1 mt-4">
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <h2 className='title mt-3'>{productDetails[0].title}</h2>
                                    <span className='type fw-bold mt-3 d-block'>TYPE: {productDetails[0].type}</span>
                                    <span className='description mt-3 d-block'>{productDetails[0].description}</span>
                                    <div className="price mt-4">
                                        <h3 className='fw-bold'>{productDetails[0].price}.00<sup className='fw-normal'>USD</sup></h3>
                                    </div>
                                    <div div className="bottom mt-3" >
                                        <button onClick={() => { localStorage.getItem("login") === "true" ? addItem(productDetails[0]) : navigate("/login") }}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}
            </div>
        </>
    )
}

export default ProductDetails