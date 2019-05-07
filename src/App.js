import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import Home from "./components/Home"
import About from "./components/About"

function App() {
	return (
		<Router>
			<div>
				<nav style={{ margin: 10 }}>
					<Link to='/' style={{ padding: 10 }}>
						Home
					</Link>

					<Link to='/about' style={{ padding: 10 }}>
						About
					</Link>
				</nav>
				<Route path='/' exact component={Home} />
				<Route path='/about' component={About} />
			</div>
		</Router>
	)
}

export default App
