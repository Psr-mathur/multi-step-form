import { Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import Formtwo from "./components/Formtwo";
import Formthree from "./components/Formthree";
import Progress from "./components/Progress";
import DetailsProvider from "./context/createContext";
import "./style.css";
import Response from "./components/response";

function App() {
	return (
		<DetailsProvider>
			<div className="mainContainer">
				{/* <h1>Hello World</h1> */}
				<Progress />
				<Routes>
					<Route path="/" element={<Form />} />
					<Route path="/pagetwo" element={<Formtwo />} />
					<Route path="/pagethree" element={<Formthree />} />
					<Route path="/response" element={<Response />} />
				</Routes>
			</div>
		</DetailsProvider>
	);
}

export default App;
