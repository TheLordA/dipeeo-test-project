import { useNavigate } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Layout, Badge } from "antd";

import "./index.css";

const { Header } = Layout;

const AppHeader = ({ cartQuantity }) => {
	const navigate = useNavigate();
	return (
		<Header className="header-container">
			<Badge count={cartQuantity}>
				<ShoppingCartOutlined className="header-container_icon" onClick={() => navigate("cart")} />
			</Badge>
		</Header>
	);
};

export default AppHeader;
