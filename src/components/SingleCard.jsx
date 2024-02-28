import React from 'react'
import { useCart } from 'react-use-cart';
import { Link, useNavigate } from 'react-router-dom';
import slugify from 'react-slugify';
// import '../assets/css/ReactToastify.css'

const SingleCard = ({ title, type, neew, image, price, oldprice, alldata }) => {

    const { addItem } = useCart();
    const navigate = useNavigate()

    return (
        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <div className="carousel mt-4 py-3 d-flex flex-column gap-4">
                <div className="title d-flex flex-column ms-3">
                    <a className='fw-bold' href="/">{title.slice(0, 19)}...</a>
                    <span>Type: {type}</span>
                </div>
                <span className='new mx-3 px-2 rounded'>{neew}</span>
                <Link to={`/products/${slugify(title)}`} className='d-flex align-items-center justify-content-center'>
                    <img src={image} alt="" />
                </Link>
                <div className="footer d-flex align-items-center justify-content-between mx-3">
                    <div className="price fw-bold">
                        <div className="newprice">{price}<sup>USD</sup></div>
                        <div className="oldprice text-decoration-line-through ">{oldprice}<sup>USD</sup></div>
                    </div>
                    <button onClick={() => { localStorage.getItem("login") === "true" ? addItem(alldata) : navigate("/login") }} >Add to Cart</button>
                </div>
                <div className="action px-3 py-1 d-flex gap-2">
                    <a href="/"><i className="fa-regular fa-heart"></i></a>
                    <span> | </span>
                    <a href="/"><i className="fa-regular fa-eye"></i></a>
                    <span> | </span>
                    <a href="/"><i className="fa-solid fa-code-compare"></i></a>
                </div>
            </div>
        </div>
    )
}

export default SingleCard