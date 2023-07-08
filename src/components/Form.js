import React, { useContext, useState } from "react";
import Forminput from "./Forminput";
import { DetailsContext } from "../context/createContext";
import { useNavigate } from "react-router-dom";
import { ProgressContext } from "../context/progressContext";

const mobregex = `(^[\+]{1}[9]{1}[1]{1}\s*[789]{1}[0-9]{9}$)`;
const emailregex = `^[a-zA-Z]{1}[a-z0-9A-Z.]+@[a-zA-Z]+\.[a-zA-Z]{2,3}`;

const Form = () => {
	const { getDetails, setDetails } = useContext(DetailsContext);
	const { setFilled } = useContext(ProgressContext);
	// console.log(getDetails);
	const inputs = [
		{
			id: 1,
			name: "name",
			type: "text",
			placeholder: "Who are you?",
			errormsg: "Cannot be empty!",
			label: "Name",
			pattern: `^[A-Za-z\\s]+`,
			required: true,
		},
		{
			id: 2,
			name: "email",
			type: "text",
			placeholder: "Something@ok.com",
			errormsg: "invalid email",
			label: "E-mail",
			pattern: emailregex,
			required: true,
		},
		{
			id: 3,
			name: "mobile",
			type: "text",
			placeholder: "+91 7897897890",
			errormsg: "must include the country code.",
			label: "Mobile",
			pattern: mobregex,
			required: true,
		},
		{
			id: 4,
			name: "dob",
			type: "date",
			placeholder: "DD-MM-YYYY",
			errormsg: "enter date of birth.",
			label: "DOB",
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
			setFilled(34);
			navigate("/pagetwo");
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

	return (
		<div className="formContainer">
			<div className="formBox">
				<form action="#" onChange={formChange}>
					{/* <div className="field">
						<input
							type="text"
							id="name"
							name="name"
							placeholder="Who are you?"
						/>
						<label for="name">Name</label>
					</div> */}
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
						<button
							style={{ opacity: 0 }}
							className="back"
							onClick={() => navigate("")}
						>
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
