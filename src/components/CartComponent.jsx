import React from "react";
import { useSelector } from "react-redux";
import { selectCartState, setCloseCart } from "../app/CartSlice";
import { CartEmpty, CartCount, CartItems } from "./cart";

const Cart = () => {
  const cartState = useSelector(selectCartState);
  return (
    <>
      <div
        className={`fixed top-0 right-0 left-0 bottom-0 blur-effect-theme w-full h-full z-[100] ${
          cartState
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-8"
        } transition-all duration-300`}
      >
        <div
          className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}
        >
          <CartCount setCloseCart={setCloseCart} />
          <CartEmpty setCloseCart={setCloseCart} />
          <CartItems />
        </div>
      </div>
    </>
  );
};

export default Cart;
