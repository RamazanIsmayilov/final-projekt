import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { CiHeart } from "react-icons/ci";
import { ProductContext } from '../context/ProductContext';
import slugify from 'react-slugify';

const ProductDetails = () => {

    const { slug } = useParams();
    const [product] = useContext(ProductContext);
    const productDetails = product.filter(p => slugify(p.title) === slug);
    console.log(productDetails);


    return (
        <div className='productdetails'>
            <div className="heading p-5">
                <div className="container d-flex flex-column gap-4">
                    <Link to="/" className='d-flex align-items-center gap-3'>
                        <IoArrowBackCircleOutline className='icon fs-3' />
                        <span>Back to category</span>
                    </Link>
                </div>
            </div>

            {product.length === 0 ? <h1>Loding</h1> :
                <div className="details">
                    <div className="container col-xxl-8 px-4">
                        <div className="row flex-lg-row-reverse py-5">
                            <div className="col-10 col-sm-8 col-lg-6">
                                <div className="image d-flex align-items-center justify-content-center">
                                    <img width={470} src={productDetails[0].image} />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="head d-flex align-items-center gap-3">
                                    <span>{productDetails[0].type}</span>
                                    <Link to="/wishlist" className="wishlist">
                                        <CiHeart />
                                        <span>Add to wishlist</span>
                                    </Link>
                                </div>
                                <div className="starts">
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </div>
                                <h2 className='title'>{productDetails[0].title}</h2>
                            </div>
                        </div>
                    </div>
                </div>}
        </div>

    )
}

export default ProductDetails