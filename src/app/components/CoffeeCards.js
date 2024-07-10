'use client';
import Image from "next/image";
import { useContext } from "react";
import { CartContext } from "./ShoppingCart";
export default function CoffeeCards({product}) {
    const {addToCart} = useContext(CartContext)
    return (
        
        <div className="coffee-cards">
            {<Image src={product.imageUrl} alt={product.name} width={300} height={300}/>}
           { console.log(product)}
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button onClick={()=> addToCart(product)}>Add To Cart</button>
             </div>
       
    )
}

