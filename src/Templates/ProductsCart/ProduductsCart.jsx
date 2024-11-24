/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { FaCartPlus } from "react-icons/fa6";
// IMPORT CSS 
import './ProductsCared.css'



function CardProdutos({addToCart}) {

   
  // Lista de produtos estática para exibição
  const items = [
    {
      id: 1,
      foto: "https://imgs.casasbahia.com.br/55067393/1g.jpg",
      nome: "Produto 1",
      descricao: "Motorola EDDGE 50 NEO",
      price: 200.0,
    },
    {
      id: 2,
      foto: "https://cdn.awsli.com.br/300x300/1271/1271561/produto/265359512/smartphone-asus-rog-phone-8-pro--5g---512gb---16gb-ram---50mp---165hz-jex1knvnpt.jpg",
      nome: "Produto 2",
      descricao: "Asus Aeroactive Cooler X - Rog Phone 8 Pro",
      price: 12.616,
    },
    {
      id: 3,
      foto: "https://m.media-amazon.com/images/I/6109CjoWCKL._AC_UF894,1000_QL80_.jpg",
      nome: "Produto 3",
      descricao: "Computador Gamer Completo RGB Intel Core i5 8GB SSD 512GB Kit Gamer com Headset Monitor...",
      price: 1.729,
    },
    {
      id: 4,
      foto: "https://images.kabum.com.br/produtos/fotos/sync_mirakl/443210/Smartphone-Asus-Rog-Phone-6-5G-256GB-12GB-RAM-Octa-core-Snapdragon-8-Gen1-Tela-6-78-Amoled-Batman-Edition_1694546319_gg.jpg",
      nome: "Produto 4",
      descricao: "Smartphone Asus Rog Phone 6, 5G, 256GB, 12GB RAM, Octa-core Snapdragon 8+ Gen1, Tela 6.78",
      price: 6.119,
    },
   
  ];

  return (
  <>
  <section className="products_cards">
   <div className="navbar">

   </div>

    {/* aqui fica os produtos do carrinho */}
    {items.map((item)=>(
        <div key={item.id} className="cards">

            <img src={item.foto} alt={item.nome} />
            
         <div className="area_content_card">
            <p> {item.nome}</p>
            <p>{item.descricao}</p>
            <span>R$: {item.price.toFixed(3)}</span>
            <button className="btn_produtos" onClick={() => addToCart(item)}>
            Adicionar ao carrinho <FaCartPlus/>
          </button>
         </div>

        </div>
    ))}

  </section>
  
  </>
  );
}

export default CardProdutos;
