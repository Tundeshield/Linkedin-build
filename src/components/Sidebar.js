import { Avatar } from "@material-ui/core";
import React from "react";
import "../styles/Sidebar.css";
import Gradient from "../styles/images/gradient.jpg";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function Sidebar() {
	const user = useSelector(selectUser);
	const recentItem = (topic) => (
		<div className="sidebar__recentItem">
			<span className="sidebar__hash">#</span>
			<p>{topic}</p>
		</div>
	);

	return (
		<div className="sidebar">
			<div className="sidebar__top">
				<img src={Gradient} alt="" />
				<Avatar src={user.photoUrl} className="sidebar__avatar">
					{user.displayName[0]}
				</Avatar>
				<h2>{user.displayName}</h2>
				<h4>{user.email}</h4>
			</div>

			<div className="sidebar__stats">
				<div className="sidebar__stat">
					<p>Who Viewed you</p>
					<p className="sidebar__statNumber">4,395</p>
				</div>
			</div>

			<div className="sidebar__stat">
				<p>Views on post</p>
				<p className="sidebar__statNumber">7,300</p>
			</div>

			<div className="sidebar__bottom">
				<p>Recent</p>
				{recentItem("Reactjs")}
				{recentItem("Javascript")}
				{recentItem("softwareengineering")}
			</div>
		</div>
	);
}

export default Sidebar;
