<<<<<<< HEAD
import React from 'react';
import { Route, Link, Switch, Router } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import Login from './components/Login';
import Homapage from './components/Homepage';
import Homepage from './components/Homepage';

function App() {
	return (
		<div>
			<Switch>
				<Route path="/">
					<Form />
				</Route>
				<Route path="/homepage">
					<Homepage />
				</Route>
			</Switch>
		</div>
	);
=======
import React from 'react'
import './App.css';
import Form from './components/Form'



function App() {
	return <Form />
	
>>>>>>> fb064f215e0c71a63d216c2d13286166ac9ec40b
}

export default App;

