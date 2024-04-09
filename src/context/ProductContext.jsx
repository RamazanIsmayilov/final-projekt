import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();


export const ProductProvider = ({ children }) => {
    const [productdata, setProductdata] = useState([]);
    useEffect(() => {
        axios.get("http://127.0.0.1:5500/src/data/product.json")
            .then(res => setProductdata(res.data));
    }, [])


    return <ProductContext.Provider value={[productdata, setProductdata]}>
        {children}
    </ProductContext.Provider>
}