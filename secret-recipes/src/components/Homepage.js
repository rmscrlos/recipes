import React from 'react';
import './Homepage.css';

function Homepage() {
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

			<div className="recipes-container">
				<h1>Recipes</h1>
			</div>
		</div>
	);
}

export default Homepage;
