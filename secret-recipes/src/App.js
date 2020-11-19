import React from 'react';
import { Route, Link, Switch, Router } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import Homepage from './components/Homepage';
import PrivateRoute from './PrivateRoute';

function App() {
	return (
		<div>
			{/* <Homepage /> */}

			<Switch>
				<Route path="/">
					<Form />
				</Route>
				<PrivateRoute exact path="/homepage">
					<Homepage />
				</PrivateRoute>
			</Switch>
		</div>
	);
}

export default App;
