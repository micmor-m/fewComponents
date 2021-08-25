import React from "react";
import Card from "../UI/Card";
import "./UserList.css";

const UserList = ({ usersList }) => {
	return (
		<Card className="users">
			{!usersList ? (
				<p>No users loaded</p>
			) : (
				<ul>
					{usersList.map((user, index) => {
						return (
							<li key={index}>
								{user.name} ({user.age} years old.)
							</li>
						);
					})}
				</ul>
			)}
		</Card>
	);
};

export default UserList;
