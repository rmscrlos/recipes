import React from 'react';
import { Route, Link, Switch, Router } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import Homepage from './components/Homepage';
import PrivateRoute from './PrivateRoute';

function App() {
	return (
		<div>
			<Switch>
				<PrivateRoute path="/">
					<Form />
				</PrivateRoute>
				<Route path="/homepage">
					<Homepage />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
