import React, { useContext, useEffect, useState } from "react";
import { DetailsContext } from "../context/createContext";
import { useNavigate } from "react-router-dom";
import { ProgressContext } from "../context/progressContext";

const Response = () => {
	const { getDetails } = useContext(DetailsContext);
	const navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => {
			navigate("/");
		}, 15000);
	}, []);

	const [time, settime] = useState(0);
	useEffect(() => {
		setTimeout(() => {
			settime((t) => t + 1);
		}, 1000);
	}, [time]);

	const { setFilled } = useContext(ProgressContext);
	if (time === 15) {
		setFilled(2);
	}

	return (
		<div className="responseContainer">
			<ul className="datalist">
				<h4 style={{ alignSelf: "center", margin: "0px" }}>
					Data Submitted successfully.
				</h4>
				<h6
					style={{
						alignSelf: "center",
						color: "#1e2022",
						margin: "0px",
					}}
				>
					redirected to home in {15 - time}s.
				</h6>
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
