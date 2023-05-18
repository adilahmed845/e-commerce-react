import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from '../cart/cart-item';
import { Wish } from './wish';
import { useNavigate } from "react-router-dom";

import '../cart/cart.css';
export const Wishlist = () => {
  const { wish } = useContext(ShopContext);
  console.log(wish);

  return (
    <div className="cart">
      <div>
        <h1>Your Wishlist</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (wish[product.id] !== 0) {
            return <Wish data={product} />;
          }
        })}
      </div>
    </div>
  );
};