import React, { useState } from "react";

const Forminput = (props) => {
	const { label, onChange, errormsg, ...inputProps } = props;
	const [leftInput, setleftInput] = useState(false);

	const handleBlur = () => {
		setleftInput(true);
	};

	return (
		<div className="field">
			<input
				{...inputProps}
				onChange={onChange}
				onBlur={handleBlur}
				left={leftInput.toString()}
			/>
			<label htmlFor={inputProps.name}>{label}</label>
			<span>{errormsg}</span>
		</div>
	);
};

export default Forminput;
