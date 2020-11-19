import React, { useState, useEffect } from 'react';
import './Homepage.css';
import axios from 'axios';
import axiosWithAuth from '../axiosWithAuth';
import Recipe from './Recipe';
import { Route, Link } from 'react-router-dom';

function Homepage() {
	//display add recipe form
	const [hidden, setHidden] = useState(false);
	//data
	const data = [
		{
			id: 1,
			title: 'Scrambled Eggs',
			source: 'Mom',
			ingredients: '2 eggs',
			instructions: 'Scramble eggs in the pan'
		},
		{
			id: 2,
			title: 'PB&J',
			ingredients: `2 slices of bread \n 1tsp jam \n 1tbsp peanut butter`,
			instructions: '1. Spread jam and peanut butter onto bread \n 2. Smush bread togther',
			notes: 'Whole wheat bread is tastiest! Strawberry jam highly recommended.'
		}
	];
	// recipes
	const [recipes, setRecipes] = useState(data);
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

	//delete recipes
	const deleteRecipe = id => {
		const updatedRecipe = [...recipes];
		const indexOfRecipeToDelete = updatedRecipe.findIndex(note => note.id === id);
		updatedRecipe.splice(indexOfRecipeToDelete, 1);
		setRecipes(updatedRecipe);
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
			<nav>
				<h1>Secret Recipes</h1>
				<div className="search-container">
					<form>
						<input type="text" />
						<button>Search</button>
					</form>
				</div>
			</nav>

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
				{recipes.map(rec => (
					<Recipe key={rec.id} recipe={rec} deleteRecipe={deleteRecipe} />
				))}
			</div>

			<Route exact path="/homepage/:id">
				<Recipe />
			</Route>
		</div>
	);
}

export default Homepage;
