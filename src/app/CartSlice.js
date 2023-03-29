import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartState: false,
  cartItem:[]
};
const CartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    setOpenCart: (state, action) => {
        state.cartState = action.payload.cartState
    },
    setCloseCart: (state, action) => {
        state.cartState = action.payload.cartState;
    },
    addItemToCart :(state,action)=>{
      const itemIndex = state.cartItem.findIndex((item)=>item.id===action.payload.item.id)
      if(itemIndex>=0){
        state.cartItem[itemIndex].cartQuantity+=1
      }
      else{
        const temp = { ...action.payload.item, cartQuantity:1 };
        state.cartItem.push(temp);
      }
        
    }
  },
});


export const { setCloseCart, setOpenCart, addItemToCart } = CartSlice.actions;
export const selectCartState = (state)=>state.cart.cartState
export const selectCartItem = (state) => state.cart.cartItem;

export default CartSlice.reducer
