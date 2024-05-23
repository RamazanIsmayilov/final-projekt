import React, { useState } from 'react'
import { useCart } from 'react-use-cart';
import { Link, useNavigate } from 'react-router-dom';
import slugify from 'react-slugify';
import { useWishlist } from 'react-use-wishlist';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import toast from 'react-hot-toast';

const SingleCard = ({ title, description, type, brand, neew, image, price, oldprice, alldata }) => {

    const { addItem } = useCart();
    const { addWishlistItem } = useWishlist();
    const navigate = useNavigate();



    const notifyCart = () => toast.success('Item add to your cart');
    const addCart = () => {
        localStorage.getItem("login") === "true" ? addItem(alldata) : navigate("/login")
        localStorage.getItem("login") === "true" ? notifyCart() : navigate("/login")
    }

    const addWishlist = () => {
        localStorage.getItem("login") === "true" ? addWishlistItem(alldata) : navigate("/login")
        heartFunc();
    }


    const [heart, setHeart] = useState(false);
    const heartFunc = () => {
        setHeart(!heart);
    }

    function MyVerticallyCenteredModal(props) {
        return (
            <Modal {...props} size="lg" centered className='modal' >
                <Modal.Body className='modal-body px-5 py-4 rounded-3' style={{
                    backgroundColor: "black", border: "3px solid",
                    borderImage: "linear-gradient(to left, #0098ff 50%, #7b35c8) 1"
                }}>
                    <div className='container'>
                        <div className="row d-flex align-items-center g-3">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="image d-flex align-items-center justify-content-center">
                                    <img height={270} src={image} alt='' />
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <h3 className='title text-light'>{title.slice(0, 20)}...</h3>
                                <span className='description d-block mt-3' style={{ color: "#838383", fontSize: "15px" }}>{description.slice(0, 130)}...</span>
                                <h4 className='fw-bold mt-3 text-light' style={{ fontSize: "20px" }}>{price}.00<sup className='fw-normal' style={{ fontSize: "14px" }}>USD</sup></h4>
                                <p className='fw-bold mt-3 text-decoration-line-through' style={{ color: "#838383", fontSize: "14px" }}>{oldprice}.00<sup className='fw-normal'>USD</sup></p>
                                <button onClick={() => { localStorage.getItem("login") === "true" ? addItem(alldata) : navigate("/login") }} className='text-light px-2 py-1'
                                    style={{ fontSize: "15px", background: "linear-gradient(75deg, #0098ff 0%, #7b35c8 100%)", borderRadius: "0 10px" }}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <div className="carousel mt-4 py-3 d-flex flex-column gap-4">
                <div className="title d-flex flex-column ms-3">
                    <a className='fw-bold' href="/">{title.slice(0, 19)}...</a>
                    <span>Type: {type}</span>
                    <span>Brand: {brand}</span>
                </div>
                <span className='new mx-3 px-2 rounded'>{neew}</span>
                <Link to={`/products/${slugify(title)}`} className='d-flex align-items-center justify-content-center'>
                    <img src={image} alt="" />
                </Link>
                <div className="footer d-flex align-items-center justify-content-between mx-3">
                    <div className="price fw-bold">
                        <div className="newprice">{price}.00<sup>USD</sup></div>
                        <div className="oldprice text-decoration-line-through ">{oldprice}.00<sup>USD</sup></div>
                    </div>
                    <div>
                        <button onClick={addCart} >Add to Cart</button>
                        {/* <Toaster /> */}
                    </div>
                </div>
                <div className="action d-flex align-items-center px-4 d-flex gap-2">
                    <button onClick={addWishlist} >{heart ? <FaHeart /> : <FaRegHeart />}</button>
                    <span> | </span>
                    <Button variant="btn" onClick={() => setModalShow(true)}><i className="fa-regular fa-eye"></i></Button>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
            </div>
        </div>
    )
}

export default SingleCard