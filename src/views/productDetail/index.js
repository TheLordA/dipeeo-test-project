import { Button, Col, Modal, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { ExclamationCircleOutlined, DoubleLeftOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { addItem } from "../../store/features/cart/cartSlice";

import ProductDetailCard from "../../components/productDetailCard";

import "./index.css";

const ProductDetail = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	let { productId } = useParams();
	const { products } = useSelector(state => state.product);

	const pokemon = products.filter(pokemon => pokemon.id === productId)[0];

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
			onCancel: () => navigate("/cart")
		});
	};

	return (
		<div className="productDetail_container">
			<div className="productDetail_container-details">
				<img src={pokemon?.images?.small} alt={pokemon.name} />
				<ProductDetailCard pokemon={pokemon} />
			</div>
			<Row justify="space-around">
				<Col>
					<Button type="default" onClick={() => navigate("/")}>
						<DoubleLeftOutlined />
						&nbsp;
						<span>Return to shop</span>
					</Button>
				</Col>
				<Col>
					<Button type="primary" onClick={handleShopCart}>
						<ShoppingCartOutlined />
						&nbsp;
						<span>Add to cart</span>
					</Button>
				</Col>
			</Row>
		</div>
	);
};

export default ProductDetail;
