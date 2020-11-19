import React from 'react';
import './Homepage.css';

function Homepage() {
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
