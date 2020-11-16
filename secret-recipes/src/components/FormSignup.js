import React from 'react';
import validateInfo from './validateInfo'
import useForm from './UseForm'
import './Form.css'

const FormSignup=({submitForm}) =>{
	const {handleChange,handleSubmit,values,errors} 
	= useForm(submitForm,validateInfo);
	return(
		<div className="form-content-right">
			<form  onSubmit={handleSubmit} className="form" noValidate>
				<h1>Secret Family Recipe</h1>
				<div className="form-inputs">
				<label className="form-lable">
				Username:
				</label>
				<input className="form-input" 
				id="username"
				type="text" 
				name="username"
				placeholder= 'Enter Your Username'
				value={values.username}
				onChange={handleChange}
				/>
				{errors.username && <p>{errors.username}</p>}
				</div>
				
				<div className="form-inputs">
				<label htmlFor="email" className="form-lable">
				Email:
				</label>
				<input className="form-input"
				
				type="email" 
				name="email"
				placeholder="Enter your Email"
				value={values.email}
				onChange={handleChange}
				 />
				 {errors.email && <p>{errors.email}</p>}
				</div>

				<div className="form-inputs">
				<label className="form-lable">
				Password:
				</label>
				<input className="form-input"
				type="password" 
				name="password"
				placeholder="Enter Your Password"
				value={values.password}
				onChange={handleChange}
				 />
				 {errors.password && <p>{errors.password}</p>}
				</div>

				<div className="form-inputs">
				<label className="form-lable">
				Confirm Password:
				</label>
				<input className="form-input"
				type="password" 
				name="password2"
				placeholder="Confirm Your Password"
				value={values.password2}
				onChange={handleChange}
				 />
				 {errors.password2 && <p>{errors.password2}</p>}
				</div>

				<button 
				
				className="form-input-btn" type="submit">
					Register
					</button>
					<span className="form-input-login">
						Already have an account? Login
						<a href="#">here</a>
					</span>
			</form>
		</div>


		 );
}

export default FormSignup;
