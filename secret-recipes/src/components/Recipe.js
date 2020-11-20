import React from 'react';
import './Recipe.css';
import { useParams, useRouteMatch, Route, NavLink, useHistory } from 'react-router-dom';
import Instruction from './Instruction';

function Recipe({ recipes }) {
	let history = useHistory();
	const { id } = useParams();

	const rcps = recipes.find(item => item.id === Number(id));
	console.log(id);

	const { path, url } = useRouteMatch();

	console.log(rcps.instructions);

	//handles go back/
	return (
		<div className="container">
			<button type="submit" onClick={() => history.goBack()}>
				Back
			</button>
			<div className="recipe-container">
				<h3>{rcps.title}</h3>
				<p className="author">
					<strong>Author: </strong>
					{rcps.source ? rcps.source : 'unknown'}
				</p>
				<p>
					<strong>ingredients:</strong> <br></br>
					{rcps.ingredients}
				</p>
				<nav className="nav-buttons">
					<NavLink to={`${url}/instruction`}>Instructions</NavLink>
				</nav>
				<Route path={`${path}/instruction`}>
					<Instruction instruction={rcps.instructions} />
				</Route>
			</div>
		</div>
	);
}

export default Recipe;
