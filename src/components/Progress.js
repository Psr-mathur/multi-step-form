import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
const Progress = () => {
	return (
		<div className="progressContainer">
			<div className="progressBox">
				<ProgressBar
					completed={50}
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
