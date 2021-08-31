import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "./AddUser.css";
import ErrorModal from "../UI/ErrorModal";

const AddUsers = ({ handleAddUser }) => {
	const [enterdUsername, setEnteredUserName] = useState("");
	const [enterdAge, setEnteredAge] = useState("");

	function addUserHandler(event) {
		event.preventDefault();
		if (
			enterdUsername.trim().length === 0 ||
			enterdAge.trim().length === 0
		) {
			return;
		}
		if (+enterdAge < 1) {
			return;
		}
		handleAddUser(enterdUsername, enterdAge);
		setEnteredUserName("");
		setEnteredAge("");
	}

	const usernameChangeHandler = (event) => {
		setEnteredUserName(event.target.value);
	};

	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	return (
		<>
			<ErrorModal title="An error occured!" />
			<Card className="input">
				<form onSubmit={(event) => addUserHandler(event)}>
					<label htmlFor="name">Username</label>
					<input
						type="text"
						id="username"
						placeholder="Enter your name"
						onChange={usernameChangeHandler}
						value={enterdUsername}
					/>
					<label htmlFor="age">Age</label>
					<input
						type="number"
						id="age"
						placeholder="Enter your age"
						onChange={ageChangeHandler}
						value={enterdAge}
					/>
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</>
	);
};

export default AddUsers;
