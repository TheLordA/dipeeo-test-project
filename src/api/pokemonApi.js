import axios from "axios";

const api = axios.create({
	baseURL: "https://api.pokemontcg.io/v2"
});

export const getPokemonsAPI = () => {
	return api.get("/cards");
};

// TODO! : add more API implementations to handle advanced user research & manipulation