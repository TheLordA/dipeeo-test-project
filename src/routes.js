import AppLayout from "./layout";
import Home from "./views/home";
import Checkout from "./views/checkout";
import ProductDetail from "./views/productDetail";
import Cart from "./views/cart";
import NotFound from "./views/notFound";

const routes = [
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <Home />
			},
			{
				path: ":productId",
				element: <ProductDetail />
			},
			{
				path: "checkout",
				element: <Checkout />
			},
			{
				path: "cart",
				element: <Cart />
			},
			{
				path: "*",
				element: <NotFound />
			}
		]
	},
	{
		path: "*",
		element: <NotFound />
	}
];

export default routes;
