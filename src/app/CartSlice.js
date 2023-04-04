import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  cartState: false,
  cartItem: localStorage.getItem("cartItem")
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [],
    cartTotalAmount:{},
};
const CartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    addItemToCart: (state, action) => {
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.item.id
      );
      if (itemIndex >= 0) {
        state.cartItem[itemIndex].cartQuantity += 1;
        toast.success(`${action.payload.item.title} quantity increased`);
      } else {
        const temp = { ...action.payload.item, cartQuantity: 1 };
        state.cartItem.push(temp);
        toast.success(
          `${action.payload.item.title} added successfully to cart`
        );
      }
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
    },
    removeItemFromCart: (state, action) => {
      const temp = state.cartItem.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItem = temp;
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
      toast.success(`${action.payload.title} removed successfully from cart`);
    },
    increaseItemQYT: (state, action) => {
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartItem[itemIndex].cartQuantity += 1;
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
      toast.success(`${action.payload.title} quantity increased`);
    },
    decreaseItemQYT: (state, action) => {
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItem[itemIndex].cartQuantity > 1) {
        state.cartItem[itemIndex].cartQuantity -= 1;
      } else {
        const temp = state.cartItem.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItem = temp;
      }
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
      toast.success(`${action.payload.title} quantity decreased`);
    },
    clearCartItems: (state, action) => {
      if (state.cartItem.length > 0) {
        state.cartItem = [];
        localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
        toast.success(`Cart item cleared successfully`);
        return
      }
      toast.error("Cart is empty")
    },
    getTotalPrice : (state,action)=>{
      let { totalQuantity, totalAmount } = state.cartItem.reduce(
        (cartTotal, cartItem) => {
          cartTotal.totalQuantity += cartItem.cartQuantity;
          cartTotal.totalAmount +=cartItem.cartQuantity*cartItem.price;
          return cartTotal
        },
        {
          totalQuantity: 0,
          totalAmount: 0,
        }
      );
      state.cartTotalAmount.totalAmount = totalAmount;
      state.cartTotalAmount.totalQuantity = totalQuantity;
    }
  },
});

export const {
  setCloseCart,
  setOpenCart,
  addItemToCart,
  removeItemFromCart,
  increaseItemQYT,
  decreaseItemQYT,
  clearCartItems,
  getTotalPrice,
} = CartSlice.actions;
export const selectCartState = (state) => state.cart.cartState;
export const selectCartItem = (state) => state.cart.cartItem;
export const selectCartTotal = (state) => state.cart.cartTotalAmount;


export default CartSlice.reducer;
