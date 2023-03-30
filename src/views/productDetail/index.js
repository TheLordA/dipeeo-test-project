import React from "react";
import { theme, Button } from "antd";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { addItem } from "../../store/features/cart/cartSlice";

import ProductDetailCard from "../../components/productDetailCard";

const ProductDetail = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	let { productId } = useParams();
	const { products } = useSelector(state => state.product);
	const {
		token: { colorBgContainer }
	} = theme.useToken();
	const pokemon = products.filter(pokemon => pokemon.id === productId)[0];
	console.log("##", pokemon);
	const handleShopCart = () => {
		dispatch(
			addItem({
				price: pokemon.cardmarket.prices.averageSellPrice,
				productId,
				name: pokemon.name
			})
		);
		Modal.confirm({
			title: "Product added to your cart",
			icon: <ExclamationCircleOutlined />,
			content: `You've added the ${pokemon.name.toUpperCase()} to your cart`,
			okText: "Continue Shopping",
			cancelText: "Proceed to Checkout",
			onOk: () => navigate("/"),
			onCancel: () => navigate("/checkout")
		});
	};

	return (
		<div style={{ padding: 24, textAlign: "center", background: colorBgContainer, marginBottom: 80 }}>
			<div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", marginBottom: 20 }}>
				<img src={pokemon?.images?.small} alt={pokemon.name} />
				<ProductDetailCard pokemon={pokemon} />
			</div>
			<Button onClick={handleShopCart}>Add to cart</Button>
		</div>
	);
};

export default ProductDetail;
