import React, { useContext } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { ProgressContext } from "../context/progressContext";
const Progress = () => {
	const { getFilled } = useContext(ProgressContext);
	return (
		<div className="progressContainer">
			<div className="progressBox">
				<ProgressBar
					completed={getFilled}
					maxCompleted={100}
					width="100%"
					bgColor="linear-gradient(90deg, 
						#c9d6df,
						#52616b,
						#1e2022)"
					isLabelVisible={false}
					className="progressbar"
				/>
			</div>
		</div>
	);
};

export default Progress;
