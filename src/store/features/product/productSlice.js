import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
	name: "product",
	initialState: {
		products: [],
		loading: false,
		error: null
	},
	reducers: {
		getProducts: state => {
			state.loading = true;
			state.error = null;
		},
		getProductsSuccess: (state, action) => {
			state.loading = false;
			state.products = action.payload;
		},
		getProductsFailure: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		}
	}
});

export const { getProducts, getProductsSuccess, getProductsFailure } = productSlice.actions;

export default productSlice.reducer;
