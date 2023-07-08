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
			name: "nationality",
			type: "text",
			placeholder: "Indian",
			errormsg: "Cannot be empty!",
			label: "Nationality",
			pattern: "^[A-Za-z]{2}[A-Za-z]+",
			required: true,
		},
	];

	const onChange = (e) => {
		setDetails(e);
	};

	const navigate = useNavigate();
	const [clicked, setClicked] = useState(false);
	const handleClick = async (e) => {
		e.preventDefault();
		setClicked(true);
		const invalidIP = document.querySelectorAll(
			"input:invalid:required ~ span"
		);
		if (invalidIP.length === 0) {
			// console.log("will post");
			// console.log("details", getDetails);
			setFilled(100);
			navigate("/response");
			// const res = await fetch("https://reqres.in/api/users", {
			// 	method: "POST",
			// 	body: getDetails,
			// });
			// console.log(await res.json());
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
		setFilled(34);
		navigate("/pagetwo");
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
					<div className="field">
						<select
							className="gender"
							name="gender"
							onChange={onChange}
							value={getDetails["gender"]}
						>
							<option value="" disabled></option>
							<option value="male">M</option>
							<option value="female">F</option>
							<option value="others">oth</option>
						</select>
						<label htmlFor="gender">gender</label>
						{/* <span>specify gender</span> */}
					</div>
					<div className="field">
						<textarea
							id="msg"
							rows="4"
							name="message"
							placeholder="Your message..."
							onChange={onChange}
						></textarea>
						<label htmlFor="msg">Message</label>
					</div>
					<div className="field buttons">
						<button className="back" onClick={handleBack}>
							Back
						</button>
						<button
							type="submit"
							className="next"
							onClick={handleClick}
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Form;
