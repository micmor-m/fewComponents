import React, { useState } from "react";
import AddUsers from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
	const [usersList, setUsersList] = useState([]);

	return (
		<div>
			<AddUsers setUsersList={setUsersList} />
			<UserList usersList={usersList} />
		</div>
	);
}

export default App;
