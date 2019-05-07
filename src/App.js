import React from "react"
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"
import "./App.css"

import Home from "./components/Home"
import About from "./components/About"

function App() {
	return (
		<Router>
			<div>
				<nav style={{ margin: 10 }}>
					<NavLink to='/' exact activeClassName='active'>
						Home
					</NavLink>

					<NavLink to='/about' activeClassName='active'>
						About
					</NavLink>
				</nav>
				<Route path='/' exact component={Home} />
				<Route path='/about' component={About} />
			</div>
		</Router>
	)
}

export default App
