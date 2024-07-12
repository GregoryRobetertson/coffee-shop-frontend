'use client';

import axios from "axios";
import { useEffect } from "react";
import Product from "./components/Products";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  useEffect(()=> {
async function wakeupServer(){
  const response = await axios.get('https://coffee-shop-backend-d4a9.onrender.com')
  console.log(response.data);
}
wakeupServer();


  }, []) 

  return (
   
    <main className="relative">
       <Header/>
       <Hero/>
   <Product/>
   <About/>
   <Footer/>
    </main>
  );
}
