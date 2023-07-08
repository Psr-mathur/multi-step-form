import React, { createContext, useState } from "react";

export const ProgressContext = createContext({
	getDetails: 2,
	setDetails: (e) => {},
});

export default function ProgressProvider({ children }) {
	const [filled, setFilled] = useState(1);
	// const addFilled = () => {
	// 	setFilled((prev) => prev + 5);
	// };
	return (
		<ProgressContext.Provider
			value={{
				getFilled: filled,
				setFilled: setFilled,
			}}
		>
			{children}
		</ProgressContext.Provider>
	);
}
