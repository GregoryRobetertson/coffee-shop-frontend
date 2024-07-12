import axios from "axios";
import { useContext, useEffect, useState } from "react";
import CoffeeCards from "./CoffeeCards";
import Cart from './Cart'
import { CartContext } from "./ShoppingCart";
import Image from "next/image";

export default function Product() {
    const [product, setProduct] = useState([]);
   
    const { cartItems, addToCart, showModal, setShowModal } = useContext(CartContext)

    const toggle = () => {
      setShowModal(!showModal)
    }

    {!showModal && <button className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
      onClick={toggle}
    >Cart ({cartItems.length})</button>}

    
    useEffect(()=> {
        async function wakeupServer(){
          const response = await axios.get('https://coffee-shop-backend-d4a9.onrender.com/product')
          setProduct(response.data);
          console.log(response.data);
        }
        wakeupServer();
        
        
          }, []) 
   return (
 <div className='flex flex-col justify-center bg-white mt-5' id="shop">
      <div className='flex justify-between items-center px-5 py-5 bg-gray-300'>
        <h1 className='text-xl uppercase font-bold mt-10 text-center mb-10 bg-gray-800 rounded text-white px-4 py-2'>Shop</h1>
        {!showModal && <button className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
          onClick={toggle}
        >Cart ({cartItems.length})</button>}
      </div>
      <div className='grid mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 px-10'>
        {
          product.map(product => (
            <div key={product._id} className='bg-white shadow-md rounded-lg px-10 py-10 '>
              <Image src={product.imageUrl} alt={product.title} className='rounded-md h-48' width={300} height={300} />
              <div className='mt-4'>
                <h1 className='text-lg uppercase font-bold'>{product.name}</h1>
                <p className='mt-2 text-gray-600 text-sm'>{product.description.slice(0, 40)}...</p>
                <p className='mt-2 text-gray-600'>${product.price}</p>
              </div>
              <div className='mt-6 flex justify-between items-center'>
                <button className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
                  onClick={() => {
                    addToCart(product)
                  }
                  }
                >Add to cart</button>
              </div>
            </div>
          ))
        }
      </div>
      <Cart showModal={showModal} toggle={toggle} />
    </div>
    )     
}

