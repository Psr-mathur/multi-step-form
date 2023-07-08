import React, { useContext } from "react";
import { DetailsContext } from "../context/createContext";

const Response = () => {
	const { getDetails } = useContext(DetailsContext);
	return (
		<div className="responseContainer">
			<ul className="datalist">
				<h4 style={{ alignSelf: "center" }}>
					Data Submitted successfully.
				</h4>
				{Object.keys(getDetails).map((key) => {
					return (
						<div key={key} className="eachData">
							<li>{key} : </li>
							<span>{getDetails[key]}</span>
						</div>
					);
				})}
			</ul>
		</div>
	);
};

export default Response;
