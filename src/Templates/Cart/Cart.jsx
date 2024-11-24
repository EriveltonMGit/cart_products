/* eslint-disable @next/next/no-img-element */
"use client";
import { BsCartDashFill } from "react-icons/bs";
import React from "react";
import "./Cart.css";

function Cart({ cartItems, removeFromCart }) {

  // Função para calcular o total dos produtos
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };



  return (
    <div className="cart">
      <h2>Carrinho</h2>
      {cartItems.length > 0 ? (
        // Mapeia os itens do carrinho para renderizá-los
        cartItems.map((item, index) => (
          <div key={index} className="cart_item">
            <img src={item.foto} alt="" />
            <div>
              <p>{item.nome}</p>
              <p>R$ {item.price.toFixed(3)}</p>
              {/* Botão para remover o item do carrinho */}
              <button onClick={() => removeFromCart(index)}>
                <BsCartDashFill />
              </button>
            </div>
          </div>
        ))
      ) : (
        // Exibe uma mensagem se o carrinho estiver vazio
        <p>Seu carrinho está vazio!</p>
      )}
      <div className="total_price">
      <h3>Total: R$ {calculateTotal().toFixed(3)}</h3>
      </div>
    </div>
  );
}

export default Cart;
