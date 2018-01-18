//@flow
import "./index.html"
import "babel-polyfill"

import React from "react"
import ReactDOM from "react-dom"
import { Router, Route  } from "react-router"
//import createBrowserHistory from "history/createBrowserHistory"
import App from "./app"
import { ThemeProvider } from "styled-components"
import { Dark } from "./themes"

//const browserHistory = createBrowserHistory()

const routes = <ThemeProvider theme={ Dark }>
	<Router>
		<Route exact component={ App } />
	</Router>
</ThemeProvider>

const target = document.getElementById("content")
if(target instanceof Element) {
	ReactDOM.render(routes, target)
} else {
	throw "Could not find content element to render content."
}
