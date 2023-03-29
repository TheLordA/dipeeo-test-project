import { useRoutes } from "react-router-dom";
import routes from "./routes";

import "./styles/App.css";

function App() {
	const routing = useRoutes(routes);
	return <>{routing}</>;
}

export default App;
