import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();


export const ProductProvider = ({ children }) => {
    const [productdata, setProductdata] = useState([]);
    useEffect(() => {
        // axios.get("http://127.0.0.1:5500/src/data/product.json")
        axios.get("https://mocki.io/v1/4f5e7faa-1683-4622-ae46-40f8e48b54ec")

            .then(res => setProductdata(res.data));
    }, [])


    return <ProductContext.Provider value={[productdata, setProductdata]}>
        {children}
    </ProductContext.Provider>
}