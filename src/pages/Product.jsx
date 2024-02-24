import React, { useContext, useState } from 'react'
import SingleCard from '../components/SingleCard'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { ProductContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';

const Product = () => {

  const [productdata] = useContext(ProductContext);


  return (
    <>
      <div className="productpage">
        <div className="heading p-5">
          <div className="container d-flex flex-column gap-4">
            <Link to="/" className='d-flex align-items-center gap-3'>
              <IoArrowBackCircleOutline className='icon fs-1' />
              <span>Back to home</span>
            </Link>
            <p className='fs-1 fw-bold'>Products</p>
          </div>
        </div>

        <div className="products mt-5">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-3 col-lg-3"></div>
              <div className="col-12 col-sm-12 col-md-9 col-lg-9">
                <div className="row">
                  {productdata.map(item => (
                    <SingleCard
                      id={item.id}
                      title={item.title}
                      type={item.type}
                      neew={item.neew}
                      image={item.image}
                      price={item.price}
                      oldprice={item.oldprice}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product