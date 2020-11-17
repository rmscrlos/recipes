import React, { useState } from 'react';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import { Route, Link } from 'react-router-dom';
import Login from './Login';

const Form = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);
	function submitForm() {
		setIsSubmitted(true);
	}
	return (
		<div className="main-container">
			<div className="form-container">
				<span className="close-btn">x</span>
				<div className="form-content-left">
					<img className="form-img" src="Img/Img.png" />
				</div>
				<Route exact path="/signup">
					{!isSubmitted ? <FormSignup submitForm={submitForm} /> : <FormSuccess />}
				</Route>
				<Route exact path="/">
					<Login />
				</Route>
			</div>
		</div>
	);
};

export default Form;
