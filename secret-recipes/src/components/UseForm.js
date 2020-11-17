<<<<<<< HEAD
import { useState, useEffect } from 'react';
// import validateInfo from './validateInfo';

const useForm = (callback, validateInfo) => {
	const [values, setValues] = useState({
		username: '',
		email: '',
		password: '',
		password2: ''
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
	};
	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {
			callback();
		}
	}, [errors]);
	return { handleChange, handleSubmit, values, errors };
};

export default useForm;
=======
import {useState,useEffect} from 'react'
// import validateInfo from './validateInfo';

const useForm = (callback,validateInfo) => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        password2: ""
    });
    const [errors, setErrors] = useState({})
    
    const [isSubmitting, setIsSubmitting] = useState(false)
        const handleChange = e => {
            const {name, value} = e.target
            setValues({
                ...values,
                [name]: value
            });
        };

        const handleSubmit = e => {
            e.preventDefault();

            setErrors(validateInfo(values))
            setIsSubmitting(true)
        };
        useEffect(()=>{
            if(Object.keys(errors).length===0 && 
            isSubmitting){
                callback();
            }
        },[errors]);
        return {handleChange, handleSubmit, values, errors}
};

export default useForm;
>>>>>>> fb064f215e0c71a63d216c2d13286166ac9ec40b
