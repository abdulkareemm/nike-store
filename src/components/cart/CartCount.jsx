import React from "react";
import { ChevronDoubleLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { clearCartItems, selectCartTotal } from "../../app/CartSlice";

const CartCount = ({ setCloseCart, cartItem }) => {
  const dispatch = useDispatch();
  const totalAmounts = useSelector(selectCartTotal);

  return (
    <>
      <div className="flex items-center justify-between px-3 bg-white h-11 sticky top-0 left-0 right-0 w-full">
        <div className=" flex items-center gap-3">
          <div className="flex items-center">
            <ChevronDoubleLeftIcon
              className="icon-style text-slate-900 w-5 h-5 hover:text-orange-500 stroke-[2]"
              onClick={() =>
                dispatch(
                  setCloseCart({
                    cartState: false,
                  })
                )
              }
            />
          </div>
          <div className="flex items-center">
            <h1 className="text-base font-medium text-slate-900">
              Your Cart
              <span className="bg-theme-cart text-slate-100 font-normal px-1 rounded py-0.5 ml-1 text-xs">
                ( {totalAmounts.totalQuantity} items)
              </span>
            </h1>
          </div>
        </div>
        <div className="flex items-center">
          <button
            type="button"
            className="rounded bg-theme-cart active:scale-90 p-0.5"
            onClick={() => {
              dispatch(clearCartItems());
              dispatch(setCloseCart({ cartState: false }));
            }}
          >
            <XMarkIcon className="icon-style w-5 h-5 text-white stroke-[2]" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartCount;
