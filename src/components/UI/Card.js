import React from "react";
//import styles from "./Card.module.css";
import "./Card.css";

const Card = ({ className, children }) => {
	return <div className={`card ${className}`}>{children}</div>;
};

export default Card;
