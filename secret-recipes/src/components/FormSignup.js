import React from 'react';
import validateInfo from './validateInfo';
import useForm from './UseForm';
import { Link } from 'react-router-dom';
import './Form.css';
import axios from 'axios';

const FormSignup = ({ submitForm }) => {
	const { handleChange, handleSubmit, values, errors } = useForm(submitForm, validateInfo);

	return (
		<div className="form-content-right">
			<form onSubmit={handleSubmit} className="form" noValidate>
				<h1>Secret Family Recipe</h1>
				<div className="form-inputs">
					<label className="form-label">Username:</label>
					<input
						className="form-input"
						id="username"
						type="text"
						name="username"
						placeholder="Enter Your Username"
						value={values.username}
						onChange={handleChange}
					/>
					{errors.username && <p>{errors.username}</p>}
				</div>

				<div className="form-inputs">
					<label className="form-label">Password:</label>
					<input
						className="form-input"
						type="password"
						name="password"
						placeholder="Enter Your Password"
						value={values.password}
						onChange={handleChange}
					/>
					{errors.password && <p>{errors.password}</p>}
				</div>

				<button className="form-input-btn" type="submit">
					Register
				</button>
				<span className="form-input-login">
					Already have an account?
					<Link to="/"> Login here</Link>
				</span>
			</form>
		</div>
	);
};

export default FormSignup;
