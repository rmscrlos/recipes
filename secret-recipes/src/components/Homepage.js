import React, { useState, useEffect } from 'react';
import './Homepage.css';
import axios from 'axios';
import axiosWithAuth from '../axiosWithAuth';
import Recipe from './Recipe';
import { Route, Link } from 'react-router-dom';

function Homepage({ recipes, setRecipes }) {
	//display add recipe form
	const [hidden, setHidden] = useState(false);
	//data

	const [newRecipe, setNewRecipe] = useState({ title: '', source: '', ingredients: '', instruction: '' });

	//onChange
	const handleChanges = e => {
		setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
	};

	//handles submit
	const handleSubmit = e => {
		e.preventDefault();
		e.persist();
		addNewRecipe(newRecipe);
		setNewRecipe({ title: '', source: '', ingredients: '', instruction: '' });
		setHidden(false);
	};

	//add recipe
	const addNewRecipe = recipe => {
		const newRec = {
			id: Date.now(),
			title: recipe.title,
			source: recipe.source,
			ingredients: recipe.ingredients,
			instruction: recipe.instruction
		};

		setRecipes([newRec, ...recipes]);
	};

	// useEffect(() => {
	// 	axios
	// 		.get('https://api.spoonacular.com/recipes/')
	// 		.then(res => {
	// 			console.log(res);
	// 		})
	// 		.catch(err => console.log(err));
	// });

	return (
		<div className="showcase">
			<div className="showcase-content">
				<h2>Recipes</h2>
				<button onClick={() => setHidden(true)}>Add Recipe</button>
			</div>
			{hidden ? (
				<div className="add-recipe-form">
					<form onSubmit={handleSubmit}>
						<h1 onClick={() => setHidden(false)} className="close">
							X
						</h1>
						<h1>Add your recipe</h1>
						<label>
							Title
							<input
								value={newRecipe.title}
								onChange={handleChanges}
								name="title"
								type="text"
								placeholder="Name of recipe"
							/>
						</label>
						<label>
							Author
							<input
								value={newRecipe.source}
								onChange={handleChanges}
								name="source"
								type="text"
								placeholder="Name of cook"
							/>
						</label>
						<label>
							Ingredients
							<textarea
								value={newRecipe.ingredients}
								onChange={handleChanges}
								name="ingredients"
								type="text"
								placeholder="ingredients"
							/>
						</label>
						<label>
							Instructions
							<textarea
								value={newRecipe.instruction}
								onChange={handleChanges}
								name="instruction"
								type="text"
								placeholder="instructions"
							/>
						</label>

						<button type="submit">Submit</button>
					</form>
				</div>
			) : null}

			<div className="recipes">
				{recipes.map(recipe => (
					<Link key={recipe.id} to={`/homepage/${recipe.id}`}>
						<div className="recipe-card">
							<h2>{recipe.title}</h2>
							<p>{recipe.source ? recipe.source : 'n/a'}</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}

export default Homepage;
