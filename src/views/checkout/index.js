import React from "react";
import { theme } from "antd";

const Checkout = () => {
	const {
		token: { colorBgContainer }
	} = theme.useToken();

	return (
		<div style={{ padding: 24, textAlign: "center", background: colorBgContainer }}>
			<p>long content</p>
			{
				// indicates very long content
				Array.from({ length: 100 }, (_, index) => (
					<React.Fragment key={index}>
						{index % 20 === 0 && index ? "more" : "..."}
						<br />
					</React.Fragment>
				))
			}
		</div>
	);
};

export default Checkout;
