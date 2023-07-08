import React, { useContext, useState } from "react";
import Forminput from "./Forminput";
import { DetailsContext } from "../context/createContext";
import { useNavigate } from "react-router-dom";
import { ProgressContext } from "../context/progressContext";

const Form = () => {
	const { getDetails, setDetails } = useContext(DetailsContext);
	const { setFilled } = useContext(ProgressContext);
	// console.log(getDetails);
	const inputs = [
		{
			id: 1,
			name: "address",
			type: "text",
			placeholder: "address",
			errormsg: "Cannot be empty!",
			label: "Address",
			pattern: `^[A-Za-z\\s\,]+`,
			required: true,
		},
		{
			id: 2,
			name: "country",
			type: "text",
			placeholder: "India",
			errormsg: "cannot be empty!",
			label: "Country",
			pattern: "^[a-zA-Z]+",
			required: true,
		},
		{
			id: 3,
			name: "city",
			type: "text",
			placeholder: "Patna",
			errormsg: "cannot be empty!",
			label: "City",
			pattern: "^[a-zA-Z]+",
			required: true,
		},
		{
			id: 4,
			name: "pincode",
			type: "text",
			placeholder: "800005",
			errormsg: "please enter valid pincode.",
			label: "Pin-code",
			pattern: "^[1-9]{1}[0-9]{5}",
			required: true,
		},
	];

	const onChange = (e) => {
		setDetails(e);
	};

	const navigate = useNavigate();
	const [clicked, setClicked] = useState(false);
	const handleClick = (e) => {
		e.preventDefault();
		setClicked(true);
		const invalidIP = document.querySelectorAll(
			"input:invalid:required ~ span"
		);
		if (invalidIP.length === 0) {
			// console.log("will navii");
			setFilled(67);
			navigate("/pagethree");
		} else {
			invalidIP.forEach((item) => {
				item.style.display = "block";
			});
		}
	};
	const formChange = () => {
		// const isvalid = e.target.checkValidity();
		if (clicked) {
			const validIP = document.querySelectorAll(
				"input:valid:required ~ span"
			);
			validIP.forEach((item) => {
				item.style.display = "none";
			});
		}
	};

	const handleBack = () => {
		setFilled(2);
		navigate("/");
	};

	return (
		<div className="formContainer">
			<div className="formBox">
				<form action="#" onChange={formChange}>
					{inputs.map((i) => {
						return (
							<Forminput
								key={i.id}
								{...i}
								value={getDetails[i.name]}
								onChange={onChange}
							/>
						);
					})}
					<div className="field buttons">
						<button className="back" onClick={handleBack}>
							Back
						</button>
						<button
							type="submit"
							className="next"
							onClick={handleClick}
						>
							Next
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Form;
