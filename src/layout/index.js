import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Layout } from "antd";

import AppHeader from "../components/header";
import AppFooter from "../components/footer";

import "./index.css";

const { Content } = Layout;

const AppLayout = () => {
	const { cart } = useSelector(state => state.cart);

	const quantiteTotale = cart.reduce((acc, item) => acc + item.quantity, 0);

	return (
		<Layout className="layout-container">
			<AppHeader cartQuantity={quantiteTotale} />
			<Content className="layout-container_content">
				<Outlet />
			</Content>
			<AppFooter />
		</Layout>
	);
};

export default AppLayout;
