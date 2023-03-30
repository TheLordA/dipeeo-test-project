import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { List } from "antd";

import { fetchPokemons } from "../../store/features/product/productActions";

const Home = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { products, loading } = useSelector(state => state.product);

	useEffect(() => {
		if (products.length === 0) {
			dispatch(fetchPokemons());
		}
	}, [dispatch, products]);

	return (
		<div style={{ marginBottom: 100 }}>
			<List
				grid={{ gutter: 15, column: 4 }}
				loading={loading}
				dataSource={products}
				pagination={{
					position: "bottom",
					align: "center",
					pageSize: 20
				}}
				renderItem={pokemon => (
					<List.Item>
						<List.Item.Meta
							avatar={
								<img
									onClick={() => {
										navigate(`${pokemon.id}`);
									}}
									src={pokemon.images.small}
									alt={pokemon.name}
								/>
							}
						/>
					</List.Item>
				)}
			/>
		</div>
	);
};

export default Home;
