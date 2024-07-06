import axios from "axios";
import { useEffect, useState } from "react";
import CoffeeCards from "./CoffeeCards";

export default function Product() {
    const [product, setProduct] = useState([]);
    useEffect(()=> {
        async function wakeupServer(){
          const response = await axios.get('https://coffee-shop-backend-d4a9.onrender.com/product')
          setProduct(response.data);
          console.log(response.data);
        }
        wakeupServer();
        
        
          }, []) 
   return (
    <>
    <div className="coffee-products">
    <h2>Our Coffee Products</h2>
      {coffeeProducts.map((product) => (
        <CoffeeCards key={product.id} product={product} />
      ))}
    </div>
    </>)     
}
