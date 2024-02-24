import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();


export const ProductProvider = ({ children }) => {
    const [productdata, setProductdata] = useState([]);
    useEffect(() => {
        axios.get("https://mocki.io/v1/8d522d31-27ea-4fa9-9d4f-e41f8308ccff")
            .then(res => setProductdata(res.data));
    }, [])


    return <ProductContext.Provider value={[productdata, setProductdata]}>
        {children}
    </ProductContext.Provider>
}