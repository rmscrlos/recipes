import React from 'react';
import './Recipe.css';
import { useParams } from 'react-router-dom';

function Recipe(props) {
	return (
		<div className="recipe-container">
			<h3>{props.recipe.title}</h3>
			<p className="author">
				<strong>Author: </strong>
				{props.recipe.source ? props.recipe.source : 'unknown'}
			</p>
			<p>
				<strong>ingredients:</strong> <br></br>
				{props.recipe.ingredients}
			</p>
			<p>
				<strong>instruction: </strong> <br></br>
				{props.recipe.instruction}
			</p>

			<button onClick={() => props.deleteRecipe()}>Delete Recipe</button>
		</div>
	);
}

export default Recipe;
