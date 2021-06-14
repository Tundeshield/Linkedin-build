import React, { useState } from "react";
import "../styles/Login.css";
import bg from "../styles/images/linkedin-bg.png";
import { auth } from "../firebase";
import {useDispatch} from "react-redux";
import {login} from "../features/userSlice"

function Login() {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [profilePic, setProfilePic] = useState("");
    
    const dispatch = useDispatch()


	const register = () => {
        if (!name){
            return alert("Please enter a full name.")
        }
        auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName:name,
                photoURL:profilePic,
            }).then(()=>{
                dispatch(login({
                    email:userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl:profilePic,
                }))
            })
         }).catch(error=>alert(error))
    };
	const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(userAuth =>{
            dispatch(login({
                email:userAuth.user.email, 
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL,
            }))
        } ).catch((error)=>alert (error));
	
	};

	return (
		<div className="login">
			<img src={bg} alt="" />
			<form>
				<input
					type="text"
					value={name}
			 		onChange={(e) => setName(e.target.value)}
					placeholder="Full name is required to register"
				/>
				<input
					type="text"
					value={profilePic}
					onChange={(e) => setProfilePic(e.target.value)}
					placeholder="Profile Picture url(optional)"
				/>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<button type="submit" onClick={loginToApp}>
					Sign In
				</button>
				<p>
					Not a member?
					<span onClick={register} className="login__register">
						{" "}
						Register now
					</span>
				</p>
			</form>
		</div>
	);
}

export default Login;
