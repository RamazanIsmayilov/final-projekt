import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();


export const ProductProvider = ({ children }) => {
    const [productdata, setProductdata] = useState([]);
    useEffect(() => {
        axios.get("http://127.0.0.1:5500/src/data/product.json")
        // axios.get("https://mocki.io/v1/d1f265c7-4269-40e5-b0fc-b205b09f8b37")

            .then(res => setProductdata(res.data));
    }, [])


    return <ProductContext.Provider value={[productdata, setProductdata]}>
        {children}
    </ProductContext.Provider>
}