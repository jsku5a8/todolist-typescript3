import { Card } from "./components/Card";
import { TypeTodo } from "./components/TypeTodo";
import "./index.scss";

const App = () => {
	return (
		<div>
			<TypeTodo />
			<Card />
		</div>
	);
};

export default App;
