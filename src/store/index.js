import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";

import productReducer from "./features/product/productSlice";
import cartReducer from "./features/cart/cartSlice";

const rootReducer = combineReducers({
	product: productReducer,
	cart: cartReducer
});

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["cart", "product"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: ["persist/PERSIST"]
			}
		})
});

const persistor = persistStore(store);

export { store, persistor };
