import React, { useState } from "react";
import Forminput from "./Forminput";

const mobregex = `(^[\+]{1}[9]{1}[1]{1}\s*[789]{1}[0-9]{9}$)`;
const emailregex = `[a-z0-9A-Z\.\_\-]+@[a-zA-Z]+\.[a-zA-Z]{2,3}`;

const Formtwo = () => {
	const [values, setValues] = useState({
		name: "",
		email: "",
		mobile: "",
	});
	const inputs = [
		{
			id: 1,
			name: "name",
			type: "text",
			placeholder: "Who are you?",
			errormsg: "Cannot be empty!",
			label: "Name",
			pattern: "^[A-Za-z]+",
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
	];

	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};
	// console.log(values);
	return (
		<div className="formContainer">
			<div className="formBox">
				<form action="#">
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
								value={values[i.name]}
								onChange={onChange}
							/>
						);
					})}
				</form>
				<div className="field buttons">
					<button>Back</button>
					<button>Next</button>
				</div>
			</div>
		</div>
	);
};

export default Formtwo;
