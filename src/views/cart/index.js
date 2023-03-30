import React from "react";
import { Row, Col, Table, Space, Divider, Statistic, Button, Modal } from "antd";
import { CreditCardOutlined, DeleteOutlined, ExclamationCircleOutlined, PlusOutlined, MinusOutlined, DoubleLeftOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { removeItem, emptyCart, incrementItemQuantity, decrementItemQuantity } from "../../store/features/cart/cartSlice";

const Cart = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { cart } = useSelector(state => state.cart);
	const columns = [
		{
			title: "Pokemon",
			dataIndex: "name",
			key: "name",
			render: text => <span>{text}</span>
		},
		{
			title: "Quantity",
			dataIndex: "quantity",
			key: "quantity"
		},
		{
			title: "Price",
			key: "price",
			dataIndex: "price",
			render: (text, record) => (
				<Space size="middle">
					<p>{text}</p>
				</Space>
			)
		},
		{
			render: record => (
				<>
					<Button style={{ marginRight: 10 }} onClick={() => handleQuantityItem("decrement", record)}>
						<MinusOutlined />
					</Button>
					<Divider type="vertical" />
					<Button style={{ margin: "0px 10px" }} onClick={() => handleQuantityItem("increment", record)}>
						<PlusOutlined />
					</Button>
					<Divider type="vertical" />
					<Button danger onClick={() => handleDeleteItem(record)}>
						<DeleteOutlined />
					</Button>
				</>
			)
		}
	];
	const quantiteTotale = cart.reduce((acc, item) => acc + item.quantity, 0);
	const subTotal = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

	const handleQuantityItem = (type, item) => {
		if (type === "increment") {
			dispatch(incrementItemQuantity(item.productId));
		} else {
			dispatch(decrementItemQuantity(item.productId));
		}
	};
	const handleDeleteItem = item => {
		Modal.confirm({
			title: "Remove Item from cart",
			icon: <ExclamationCircleOutlined />,
			content: `you are about to remove ${item.name.toUpperCase()} from you cart`,
			okText: "Confirm",
			cancelText: "Cancel",
			onOk: () => {
				dispatch(removeItem(item.productId));
				navigate("/cart");
			},
			onCancel: () => {}
		});
	};
	const handleEmptyCart = () => {
		Modal.confirm({
			title: "Emty your cart",
			icon: <ExclamationCircleOutlined />,
			content: `Are you sure you ?`,
			okText: "Empty Cart",
			cancelText: "Cancel",
			onOk: () => {
				dispatch(emptyCart());
				navigate("/");
			},
			onCancel: () => {}
		});
	};
	return (
		<>
			<Row justify="space-between">
				<Col>
					<Button type="default" onClick={() => navigate("/")}>
						<DoubleLeftOutlined />
						&nbsp;
						<span>Return to shop</span>
					</Button>
				</Col>
				<Col>
					<Button type="default" onClick={handleEmptyCart} danger disabled={quantiteTotale === 0}>
						<DeleteOutlined />
						&nbsp;
						<span>Delete Cart</span>
					</Button>
				</Col>
			</Row>
			<h2>
				Total Items <strong>({quantiteTotale})</strong>
			</h2>
			<br></br>
			<Table columns={columns} dataSource={cart} pagination={false} />
			<Divider orientation="right">
				<p>Billing</p>
			</Divider>
			<Row justify="end">
				<Col>
					<Statistic title="Total ." value={`$ ${subTotal.toFixed(2)}`} precision={2} />
					<Button style={{ marginTop: 16, marginBottom: 16 }} type="primary">
						Pay now <CreditCardOutlined />
					</Button>
				</Col>
			</Row>
		</>
	);
};

export default Cart;
