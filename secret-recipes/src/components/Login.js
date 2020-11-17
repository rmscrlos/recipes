import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';

const formSchema = yup.object().shape({
	username: yup.string().required('Must enter username'),
	password: yup.string().required('Must enter password')
});

function Login() {
	//form state
	const [formState, setFormState] = useState({
		username: '',
		password: ''
	});

	//error state
	const [errorState, setErrorState] = useState({
		username: '',
		password: ''
	});

	//disable button
	const [isButtonDisable, setIsButtonDisable] = useState(true);

	//validate form
	const validate = e => {
		yup.reach(formSchema, e.target.name)
			.validate(e.target.value)
			.then(valid => {
				setErrorState({
					...errorState,
					[e.target.name]: ''
				});
			})
			.catch(err => {
				setErrorState({
					...errorState,
					[e.target.name]: err.errors[0]
				});
			});
	};

	//useEffect to check if form is valid
	useEffect(() => {
		formSchema.isValid(formState).then(valid => {
			// console.log("valid?", valid);
			setIsButtonDisable(!valid);
		});
	}, [formState]);

	//input handler
	const inputChange = e => {
		e.persist();
		validate(e);
		setFormState({ ...formState, [e.target.name]: e.target.value });
	};

	//submit handler
	const handleSubmit = e => {
		e.preventDefault();
		setFormState({
			username: '',
			password: ''
		});
	};

	console.log(formState);

	return (
		<>
			<form className="login-form" onSubmit={handleSubmit}>
				<h1>Secret Family Recipe</h1>
				<label className="form-label" htmlFor="username">
					Username
					<input
						className="login-input"
						onChange={inputChange}
						value={formState.username}
						name="username"
						type="text"
						placeholder="Enter Your Username"
					/>
				</label>
				{errorState.username.length > 0 ? <p className="error">{errorState.username}</p> : null}
				<label htmlFor="password" className="form-label">
					Password
					<input
						className="login-input"
						onChange={inputChange}
						valie={formState.password}
						name="password"
						type="password"
						placeholder="Enter Your Password"
					/>
				</label>
				{errorState.password.length > 0 ? <p className="error">{errorState.password}</p> : null}
				<button disabled={isButtonDisable} className="form-input-btn" type="submit">
					Submit
				</button>
				<span className="form-input-signup">
					Don't have an account?
					<Link to="/signup"> Sign Up</Link>
				</span>
			</form>
		</>
	);
}

export default Login;
