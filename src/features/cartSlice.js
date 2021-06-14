import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
	name: "cart",
	initialState: {
		productName: null,
		productId: null,
		qty: 0,
	},

	reducers: {
		addToCart: (state, action) => {
			state.cart = action.payload;
		},
		removeFromCart: (state) => {
			state.cart = null;
		},
	},
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const selectCart = (state) => state.cartSlice.state;
export default cartSlice.reducer;
