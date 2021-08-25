import React, { useState } from "react";
import AddUsers from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
	const [usersList, setUsersList] = useState([]);

	const handleAddUser = (enterdUsername, enterdAge) => {
		setUsersList((prev) => {
			return [...prev, { name: enterdUsername, age: enterdAge }];
		});
	};

	return (
		<div>
			<AddUsers handleAddUser={handleAddUser} />
			<UserList usersList={usersList} />
		</div>
	);
}

export default App;
