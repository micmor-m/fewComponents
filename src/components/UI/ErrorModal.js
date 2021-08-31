import React from "react";

import Button from "./Button";
import Card from "./Card";
import "./ErrorModal.css";

const ErrorModal = ({ title, message }) => {
	return (
		<>
			<div className="backdrop"></div>
			<Card className="modal">
				<header className="header">
					<h2>{title}</h2>
				</header>
				<div className="content">
					<p>{message}</p>
				</div>
				<footer className="actions">
					<Button>Okay</Button>
				</footer>
			</Card>
		</>
	);
};

export default ErrorModal;
