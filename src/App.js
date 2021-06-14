import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { selectUser } from "./features/userSlice";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Widgets from "./components/Widgets";
import Login from "./components/Login";
import { auth } from "./firebase";
import { login, logout } from "./features/userSlice";

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	useEffect(() => {
		auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				//user logged in
				dispatch(
					login({
						email: userAuth.email,
						uid: userAuth.email,
						displayName: userAuth.displayName,
						photoUrl: userAuth.photoUrl,
					})
				);
			} else {
				//user not logged in
				dispatch(logout());
			}
		});
	}, []);

	return (
		<div className="app">
			{!user ? (
				<Login />
			) : (
				<>
					<Header />
					<div className="app__body">
						<Sidebar />
						<Feed />
						<Widgets />
					</div>
				</>
			)}
		</div>
	);
}

export default App;
