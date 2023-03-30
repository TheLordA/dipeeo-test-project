import { getProducts, getProductsSuccess, getProductsFailure } from "./productSlice";
import { getPokemonsAPI } from "../../../api/pokemonApi";

export const fetchPokemons = () => async dispatch => {
	try {
		dispatch(getProducts());

		const response = await getPokemonsAPI();

		dispatch(getProductsSuccess(response.data.data));
	} catch (error) {
		dispatch(getProductsFailure(error.message));
	}
};
