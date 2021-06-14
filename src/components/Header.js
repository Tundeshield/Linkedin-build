import React from "react";
import "../styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import Logo from "../styles/images/linkedin-logo.png";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import {logout, selectUser, userSlice} from "../features/userSlice";
import { auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";



function Header() {
	const dispatch=useDispatch()
	const user=useSelector(selectUser)

	const logoutOfApp=()=>{
		dispatch(logout())
		auth.signOut()
	}

	return (
		<div className="header">
			<div className="header__left">
				<img src={Logo} alt="" />
				<div className="header__search">
					<SearchIcon />
					<input type="text" placeholder="Search" />
				</div>
			</div>
			<div className="header__right">
				<HeaderOption Icon={HomeIcon} title="Home" />
				<HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
				<HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messages" />
				<HeaderOption Icon={NotificationsIcon} title="Notification" />
				<HeaderOption onClick={logoutOfApp} title="Me" avatar={true} />
			</div>
		</div>
	);
}

export default Header;
