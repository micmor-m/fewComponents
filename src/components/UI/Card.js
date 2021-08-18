import React from "react";
//import styles from "./Card.module.css";
import "./Card.css";

const Card = (props) => {
  return <div className="card">{props.children}</div>;
};

export default Card;
