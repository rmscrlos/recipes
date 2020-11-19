import React from 'react';
import { Route, Link, Switch, Router } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import Homepage from './components/Homepage';
import PrivateRoute from './PrivateRoute';
import Recipe from './components/Recipe';

function App() {
	return (
		<div>
			{/* <Homepage /> */}

			<Switch>
				<PrivateRoute exact path="/homepage">
					<Homepage />
				</PrivateRoute>
				<Route path="/">
					<Form />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
