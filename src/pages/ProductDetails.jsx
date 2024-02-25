import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import slugify from 'react-slugify';
import { useCart } from 'react-use-cart';

const ProductDetails = () => {

    const { slug } = useParams();
    const [product] = useContext(ProductContext);
    const productDetails = product.filter(p => slugify(p.title) === slug);
    const { addItem } = useCart();

    return (
        <div className='productdetail'>
            {product.length === 0 ? <div className="img text-center mt-5">
                <img src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif'></img>
            </div> : <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-lg-6 d-flex flex-column gap-2">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{productDetails[0].title}</h1>
                        <p className='description'>{productDetails[0].description}</p>
                        <div className="price">
                            <div className="newprice fw-bold">{productDetails[0].price} <sup>USD</sup></div>
                            <div className="oldprice fw-bold">{productDetails[0].oldprice} <sup>USD</sup></div>
                        </div>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <Link to="/products" className='text-center backbtn'>Back</Link>
                            <button className="text-center cartbtn" onClick={() => { addItem(productDetails[0]) }}>Add to cart</button>
                        </div>
                    </div>
                    <div className="col-10 col-sm-8 col-lg-6 mx-auto">
                        <img src={productDetails[0].image} className="img-fluid" width={391} />
                    </div>
                </div>
            </div>}

        </div>

    )
}

export default ProductDetails