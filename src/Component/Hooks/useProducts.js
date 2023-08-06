import { useEffect, useState } from "react";

const useProducts = () =>{
    const [Products, setProducts] = useState([]); 
    useEffect( ()=>{
        fetch('https://atifsupermart.onrender.com/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [Product]);
    return [Product, setProduct]
}

export default useProducts; 