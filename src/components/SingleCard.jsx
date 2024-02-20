import React from 'react'

const SingleCard = ( {title, type, neew, image, price, oldprice} ) => {
    return (
        <div className="carousel mt-4">
            <div className="title d-flex flex-column">
                <a className='fw-bold' href="/">{title.slice(0, 19)}...</a>
                <span>TYPE: {type}</span>
            </div>
            <span className='new px-1'>{neew}</span>
            <a href="/"><img className='mx-4' src={image} alt="image" /></a>
            <div className="footer d-flex align-items-center justify-content-between">
                <div className="price fw-bold">
                    <div className="newprice">{price}<sup className='fw-medium'>USD</sup></div>
                    <div className="oldprice text-decoration-line-through opacity-50">{oldprice}<sup>USD</sup></div>
                </div>
                <a href="/">Add to Cart</a>
            </div>
            <div className="action px-3 py-1 d-flex align-items-center gap-2">
                <a href="/"><i className="fa-regular fa-heart"></i></a>
                <span> | </span>
                <a href="/"><i className="fa-regular fa-eye"></i></a>
                <span> | </span>
                <a href="/"><i className="fa-solid fa-code-compare"></i></a>
            </div>
        </div>
    )
}

export default SingleCard