import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
	name: "cart",
	initialState: {
		cart: []
	},
	reducers: {
		addItem: {
			reducer(state, action) {
				const existItemIndex = state.cart.findIndex(item => item.productId === action.payload.productId);

				if (existItemIndex >= 0) {
					state.cart[existItemIndex] = { ...action.payload, quantity: state.cart[existItemIndex].quantity + 1 };
				} else {
					state.cart.push(action.payload);
				}
			},
			prepare(item) {
				return { payload: { ...item, quantity: 1 } };
			}
		},
		incrementItemQuantity: (state, action) => {
			const itemIndex = state.cart.findIndex(item => item.productId === action.payload);
			if (itemIndex >= 0) {
				state.cart[itemIndex] = { ...state.cart[itemIndex], quantity: state.cart[itemIndex].quantity + 1 };
			}
		},
		decrementItemQuantity: (state, action) => {
			const itemIndex = state.cart.findIndex(item => item.productId === action.payload);
			if (itemIndex >= 0) {
				state.cart[itemIndex] = { ...state.cart[itemIndex], quantity: state.cart[itemIndex].quantity - 1 };
			}
		},
		removeItem: (state, action) => {
			state.cart = state.cart.filter(item => item.productId !== action.payload);
		},
		emptyCart: state => {
			state.cart = [];
		}
	}
});

export const { addItem, removeItem, emptyCart, incrementItemQuantity, decrementItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;
