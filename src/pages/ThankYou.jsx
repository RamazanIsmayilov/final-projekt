import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext';
import SingleCard from '../components/SingleCard';
import { ModeContext } from '../context/ModeContext';
import { LangContext } from '../context/LangContext';

const ThankYou = () => {

    const [productdata] = useContext(ProductContext);
    const { mode } = useContext(ModeContext)
    const { lang } = useContext(LangContext)



    return (
        <div className={`${mode ? 'light' : 'dark'}`}>
            <div className='thankyou'>
                <div className="container">
                    <div className="thank d-flex align-items-center justify-content-center">
                        <img width={300} src="https://cdn.pixabay.com/animation/2023/03/19/19/55/19-55-58-835_512.gif" alt="" />
                    </div>
                    <div className="products my-5">
                        <h2>{lang ? "Tövsiyyə edilən məhsullar" : "Recommended products"}</h2>
                        <div className="row">
                            {productdata.slice(17, 23).map(item => (
                                <SingleCard
                                    key={item}
                                    id={item.id}
                                    description={item.description}
                                    title={item.title}
                                    type={item.type}
                                    brand={item.brand}
                                    neew={item.neew}
                                    image={item.image}
                                    price={item.price}
                                    oldprice={item.oldprice}
                                    alldata={item}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThankYou