"use client";

import CardProdutos from "../Templates/ProductsCart/ProduductsCart";
import Cart from "../Templates/Cart/Cart";
import { useState } from "react";

function Home() {
  

  const [cartItems, setCartItems] = useState([])

  //  FUNÇÃO PARA ADIONCAR AO CARRINHO 
  const addToCart = (item) =>{
    setCartItems((prevItems)=>[...prevItems, item])
  }
  // FUNÇÃO PARA REMOVER O ITEM DO CARRINHO
  const removeCartItems = (index) =>{
    setCartItems((prevItems)=> prevItems.filter((_, i )=> i !== index));
  }


 


  return (
    <>
    <Cart cartItems={cartItems} removeFromCart={removeCartItems}/>

      {/* Passa a função de adicionar ao carrinho */}
      <CardProdutos addToCart={addToCart} />
    </>
  );
}

export default Home;
