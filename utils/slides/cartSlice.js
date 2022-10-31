import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    orderNumber: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item._id === action.payload._id
      );
      if (itemInCart && itemInCart.stock > 0) {
        toast.success("Added to cart!", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        itemInCart.quantity++;
        itemInCart.stock--;
      } else if (!itemInCart) {
        if (action.payload.stock > 0) {
          toast.success("Added to cart!", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          state.cart.push({
            ...action.payload,
            stock: action.payload.stock - 1,
            quantity: 1,
          });
        }
      } else {
        toast.error("Out of stock!", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
      }
    },

    decrementQuantity: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item._id === action.payload._id
      );
      if (itemInCart.quantity === 1) {
        const removeItem = state.cart.filter(
          (item) => item._id !== action.payload._id
        );
        state.cart = removeItem;
      } else {
        toast.warn("Item removed", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        itemInCart.quantity--;
        itemInCart.stock++;
      }
    },

    removeCart: (state, action) => {
      state.cart = [];
    },

    newOrder: (state, action) => {
      state.orderNumber = action.payload;
    },
  },
});

export default cartSlice.reducer;

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  removeCart,
  newOrder,
} = cartSlice.actions;
