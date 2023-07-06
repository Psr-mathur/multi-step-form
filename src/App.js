import Form from "./components/Form";
import Formtwo from "./components/Formtwo";
import Progress from "./components/Progress";
import "./style.css";
function App() {
	return (
		<div className="mainContainer">
			{/* <h1>Hello World</h1> */}
			<Progress />
			<Form />
			<Formtwo />
		</div>
	);
}

export default App;
