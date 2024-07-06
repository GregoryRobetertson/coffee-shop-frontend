'use client';

import axios from "axios";
import { useEffect } from "react";
import Product from "./components/Products";

export default function Home() {
  useEffect(()=> {
async function wakeupServer(){
  const response = await axios.get('https://coffee-shop-backend-d4a9.onrender.com/')
  console.log(response.data);
}
wakeupServer();


  }, []) 

  return (
    <main>
   <Product/>
    </main>
  );
}
