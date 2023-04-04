import React from "react";
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { addItemToCart, setOpenCart } from "../../app/CartSlice";
const Item = ({
  title,
  text,
  rating,
  btn,
  img,
  price,
  color,
  shadow,
  isExists,
  id
}) => {
  const dispatch = useDispatch()
  const item = ({id,title,text,img,color,shadow,price})
  return (
    <>
      <div
        className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center ${
          isExists ? "justify-items-start" : " justify-items-center"
        }
        rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}
      >
        <div
          className={`grid items-center ${
            isExists ? "justify-items-start" : " justify-items-center"
          }`}
        >
          <h1 className="text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow">
            {title}
          </h1>
          <p className="text-slate-200 filter drop-shadow text-base md:text-sm font-normal">
            {text}
          </p>
          <div className="flex items-center justify-between w-28 my-2">
            <div className="flex items-center bg-white/90 px-1 rounded ">
              <h1 className="text-black text-sm ">${price}</h1>
            </div>
            <div className="flex items-center gap-1">
              <StarIcon className="icon-style w-5 h-5 md:w-4 md:h-4 " />
              <h1 className="md:text-sm font-normal text-slate-100 ">
                {rating}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="bg-white/90  button-theme p-0.5 shadow shadow-slate-200"
              onClick={() => dispatch(addItemToCart({
                item
              }))}
            >
              <ShoppingBagIcon className="icon-style text-slate-900" />
            </button>
            <button
              type="button"
              className="bg-white/90 button-theme p-0.5 shadow shadow-slate-200 text-sm text-black"
              onClick={()=>{
                dispatch(setOpenCart({cartState:true}));
                dispatch(addItemToCart({item}))
              }}
            >
              {btn}
            </button>
          </div>
        </div>
        <div
          className={`flex items-center ${
            isExists ? "absolute right-1 top-5" : " justify-items-center"
          }`}
        >
          <img
            src={img}
            alt={`img/item-img/${id}`}
            className={`transitions-theme hover:-rotate-12 ${
              isExists
                ? "h-auto w-52 lg:w-44 md:w-40 -rotate-[35deg] "
                : "h-36 w-64"
            }`}
          />
        </div>
      </div>
    </>
  );
};

export default Item;
