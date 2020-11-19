import React, { useState, useEffect } from 'react';
import './Homepage.css';
import axios from 'axios';
import axiosWithAuth from '../axiosWithAuth';

function Homepage() {
	useEffect(() => {
		axios
			.get('https://api.spoonacular.com/recipes/')
			.then(res => {
				console.log(res);
			})
			.catch(err => console.log(err));
	});

	return (
		<div>
			<nav>
				<h1>Secret Recipes</h1>
				<div>
					<form>
						<input type="text" />
						<button>Search</button>
					</form>
				</div>
			</nav>
		</div>
	);
}

export default Homepage;
