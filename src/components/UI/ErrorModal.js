import React from "react";
import { ProgressPlugin } from "webpack";

import Button from "./Button";
import Card from "./Card";
import "./ErrorModal.css";

const ErrorModal = ({}) => {
	return (
		<Card className="users">
			<header>
				<h2>{ProgressPlugin.title}</h2>
			</header>
			<div>
				<p></p>
			</div>
			<footer>
				<Button>Okay</Button>
			</footer>
		</Card>
	);
};

export default ErrorModal;
