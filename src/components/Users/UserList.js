import React from "react";
import Card from "../UI/Card";
import "./UserList.css";

const UserList = ({ userList }) => {
	return (
		<Card className="input">
			<ul>
				{userList.map((user) => {
					return (
						<li>
							{user.name} ({user.age} years old.)
						</li>
					);
				})}
			</ul>
		</Card>
	);
};

export default UserList;
