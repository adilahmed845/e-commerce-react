import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Wish = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount,wish } =
    useContext(ShopContext);

  return (
    <>
    { {wish} ?
    <div className="cartItem">
    <img src={productImage} />
    <div className="description">
      <p>
        <b>{productName}</b>
      </p>
      <p> Price: ₹{price}</p>
    </div>
  </div>
  :
  <h1>wishlist is empty</h1>}
    </>
  );
};