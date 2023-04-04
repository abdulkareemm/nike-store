import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTotalPrice,
  selectCartItem,
  selectCartState,
  selectCartTotal,
  setCloseCart,
} from "../app/CartSlice";
import { CartEmpty, CartCount, CartItem } from "./cart";

const Cart = () => {
  const cartState = useSelector(selectCartState);
  const cartItem = useSelector(selectCartItem);
  const totalAmounts = useSelector(selectCartTotal);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTotalPrice())
  }, [cartItem]);
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
          <CartCount setCloseCart={setCloseCart} cartItem={cartItem} />
          {cartItem.length > 0 ? (
            <div>
              <div className="flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-hidden py-3">
                {cartItem.map((item) => {
                  return <CartItem {...item} key={item.id} />;
                })}
              </div>
              <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center">
                <div className="flex items-center justify-between">
                  <h1 className="text-base font-semibold uppercase">
                    SubTotal
                  </h1>
                  <h1 className="text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5">
                    {totalAmounts.totalAmount}
                  </h1>
                </div>
                <div className="grid items-center gap-2">
                  <p className="text-sm font-medium text-center">
                    Taxes and Shipping Will Calculate At Shipping
                  </p>
                  <button
                    type="button"
                    className="button-theme bg-theme-cart text-white"
                  >
                    Check Out
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <CartEmpty setCloseCart={setCloseCart} />
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
