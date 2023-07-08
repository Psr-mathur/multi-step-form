import React, { createContext, useState } from "react";

export const DetailsContext = createContext({
	getDetails: {},
	setDetails: (e) => {},
});

export default function DetailsProvider({ children }) {
	const [values, setValues] = useState({
		name: "",
		email: "",
		mobile: "",
		dob: "",
		address: "",
		country: "",
		city: "",
		pincode: "",
		nationality: "",
		gender: "",
		message: "",
	});
	const setDetails = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};
	return (
		<DetailsContext.Provider
			value={{
				getDetails: values,
				setDetails: setDetails,
			}}
		>
			{children}
		</DetailsContext.Provider>
	);
}
