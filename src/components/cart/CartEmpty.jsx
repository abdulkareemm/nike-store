import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useDispatch } from "react-redux";
import emptyImage from "../../assets/emptybag.png";

const CartEmpty = ({ setCloseCart }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen px-11 text-center gap-7">
        <img
          src={emptyImage}
          alt="emptybag/img"
          className="w-40 lg:w-36 sm:w-28 h-auto object-fill transition-all duration-300 hover:scale-110"
        />
        <button
          type="button"
          className="button-theme bg-gradient-to-b from-amber-500 to-orange-500 shadow-lg shadow-orange-500 flex items-center justify-center text-slate-900
        py-2 gap-3 text-sm px-5 font-semibold"
          onClick={() => dispatch(setCloseCart({
            cartState:false
          }))}
        >
          <ArrowLeftIcon className="icon-style text-slate-900" />
          <span className="">Back To Nike Store</span>
        </button>
      </div>
    </>
  );
};

export default CartEmpty;
