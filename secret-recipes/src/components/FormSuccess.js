import React from 'react';
import './Form.css';
import { Link } from 'react-router-dom';

const FormSuccess = () => {
	return (
		<div className="form-content-right">
			<div className="form-success">
				We have received your request. Go back to <Link to="/">Log in</Link> page.
			</div>
			<img className="form-img-2" src="Img/Img.png" alt="Success" />
		</div>
	);
};

export default FormSuccess;
