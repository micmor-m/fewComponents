import React from "react";
import Card from "../UI/Card";
import "./AddUser.css";

const AddUsers = (props) => {
	function addUserHandler(event) {
		event.preventDefault();
	}

	return (
		<Card className="input">
			<form onSubmit={(event) => addUserHandler(event)}>
				<label htmlFor="name">Username</label>
				<input
					type="text"
					id="username"
					placeholder="Enter your name"
				/>
				<label htmlFor="age">Age</label>
				<input type="number" id="age" placeholder="Enter your age" />
				<button type="submit">Add User</button>
			</form>
		</Card>
	);
};

export default AddUsers;
