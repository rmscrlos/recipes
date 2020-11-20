import React, { useState, useEffect } from 'react';
import { Route, Link, Switch, Router } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import Homepage from './components/Homepage';
import PrivateRoute from './PrivateRoute';
import Recipe from './components/Recipe';

function App() {
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

	// useEffect(() => {
	// 	axios
	// 		.get('link from server')
	// 		.then(res => {
	// 			setRecipes(res.data);
	// 		})
	// 		.catch(err => console.log(err));
	// }, []);

	//delete recipes
	// const deleteRecipe = id => {
	// 	const updatedRecipe = [...recipes];
	// 	const indexOfRecipeToDelete = updatedRecipe.findIndex(note => note.id === id);
	// 	updatedRecipe.splice(indexOfRecipeToDelete, 1);
	// 	setRecipes(updatedRecipe);
	// };

	return (
		<div>
			<nav>
				<h1>Secret Recipes</h1>
				<div className="search-container">
					<form>
						<input type="text" />
						<button>Search</button>
					</form>
				</div>
			</nav>

			<Switch>
				<Route path="/homepage/:id">
					<Recipe key={recipes.id} recipes={recipes} />
				</Route>
				<Route path="/homepage">
					<Homepage recipes={recipes} setRecipes={setRecipes} />
				</Route>
				<Route path="/">
					<Form />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
