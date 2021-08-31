import React, { version } from "react";

import Button from "./Button";
import Card from "./Card";
import "./ErrorModal.css";

const ErrorModal = ({ title, message, onConfirm }) => {
	return (
		<>
			<div className="backdrop" onClick={onConfirm}></div>
			<Card className="modal">
				<header className="header">
					<h2>{title}</h2>
				</header>
				<div className="content">
					<p>{message}</p>
				</div>
				<footer className="actions">
					<Button onClick={onConfirm}>Okay</Button>
				</footer>
			</Card>
		</>
	);
};

export default ErrorModal;
