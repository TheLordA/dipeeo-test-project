import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Layout, Badge, theme } from "antd";

const { Header, Content, Footer } = Layout;

const AppLayout = () => {
	const navigate = useNavigate();
	const {
		token: { colorBgContainer }
	} = theme.useToken();
	const { cart } = useSelector(state => state.cart);

	const quantiteTotale = cart.reduce((acc, item) => acc + item.quantity, 0);

	return (
		<Layout>
			<Layout className="site-layout">
				<Header style={{ padding: 20, position: "sticky", background: colorBgContainer, top: 0, zIndex: 1, width: "100%", display: "flex" }}>
					<Badge count={quantiteTotale}>
						<ShoppingCartOutlined style={{ fontSize: "35px" }} onClick={() => navigate("cart")} />
					</Badge>
				</Header>
				<Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
					<Outlet />
				</Content>
				<Footer style={{ textAlign: "center", bottom: 0, zIndex: 1, width: "100%", background: "white", position: "fixed" }}>
					Dipeeo Technical Test ©2023 Created by Anass FERRAK
				</Footer>
			</Layout>
		</Layout>
	);
};

export default AppLayout;
