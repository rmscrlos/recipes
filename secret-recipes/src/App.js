import React from 'react';
import { Route, Link, Switch, Router } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import Login from './components/Login';
import Homepage from './components/Homepage';

function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/">
					<Form />
				</Route>
				<Route exact path="/homepage">
					<Homepage />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
