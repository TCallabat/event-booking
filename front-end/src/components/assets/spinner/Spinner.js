import React from "react";

import "./style.scss";

function Spinner(props) {
	return (
		<div className="spinner">
			<div className="lds-dual-ring" />
		</div>
	)
};

export default Spinner;