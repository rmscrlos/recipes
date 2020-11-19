import { useState, useEffect } from 'react';
// import validateInfo from './validateInfo';
import axios from 'axios';

const useForm = (callback, validateInfo) => {
	const [values, setValues] = useState({
		username: '',
		password: ''
	});
	const [errors, setErrors] = useState({});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const handleChange = e => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		setErrors(validateInfo(values));
		setIsSubmitting(true);

		axios
			.post('https://lambda-secret-family-recipes-1.herokuapp.com/api/register', values)
			.then(res => {
				console.log(res);
			})
			.catch(err => {
				console.log(err);
			});
		// console.log(values);
	};

	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {
			callback();
		}
	}, [errors]);
	return { handleChange, handleSubmit, values, errors };
};

export default useForm;
