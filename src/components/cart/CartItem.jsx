import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useDispatch } from "react-redux";
import { decreaseItemQYT, increaseItemQYT, removeItemFromCart } from "../../app/CartSlice";

const CartItem = ({
  id,
  title,
  text,
  img,
  color,
  shadow,
  price,
  cartQuantity,
}) => {
  const dispatch = useDispatch()
  return (
    <>
      <div className="flex items-center justify-between w-full px-5 ">
        <div className="flex items-center gap-5 ">
          <div
            className={`bg-gradient-to-b ${color} ${shadow} relative rounded p-3 hover:scale-105 transition-all
          duration-75 ease-in-out grid items-center`}
          >
            <img
              src={img}
              alt={`img/cart-item/${id}`}
              className="w-36 h-auto object-fill lg:w-28"
            />
            <div className="absolute top-2 right-3 blur-theme-effect bg-white/90 text-black text-sm px-[0.4rem] rounded">
            $ {price}
            </div>
          </div>
          <div className="grid items-center gap-4 min-w-[12.5rem]">
            <div className="grid items-center leading-none">
              <h1 className="font-medium text-lg text-slate-900 lg:textsm">
                {title}
              </h1>
              <p className="text-sm text-slate-800 lg:text-xs">{text}</p>
            </div>
            <div className="flex items-center justify-around w-full">
              <button
                type="button"
                className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90"
                onClick={() => dispatch(decreaseItemQYT({ id, title }))}
              >
                <MinusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]" />
              </button>
              <div className="bg-theme-cart rounded text-white font-medium lg:text-xs w-7 h-6 lg:h-5 lg:w-6 flex items-center justify-center">
                {cartQuantity}
              </div>
              <button
                type="button"
                className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90"
                onClick={() => dispatch(increaseItemQYT({ id, title }))}
              >
                <PlusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]" />
              </button>
            </div>
          </div>
        </div>
        <div className="grid items-center gap-8">
          <div className="grid items-center justify-center">
            <h1 className="text-lg lg:text-base text-slate-900 font-medium">
              {price * cartQuantity} $
            </h1>
          </div>
          <div className="grid items-center justify-center">
            <button
              type="button"
              className="bg-theme-cart rounded p-1 grid items-center justify-items-center active:scale-90"
              onClick={() => dispatch(removeItemFromCart({ id, title }))}
            >
              <TrashIcon className=" text-white w-5 h-5 " />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
