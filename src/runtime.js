//@flow
import "./index.html"
import "babel-polyfill"

import React from "react"
import ReactDOM from "react-dom"
import { Router, Route  } from "react-router"
import createBrowserHistory from "history/createBrowserHistory"
import App from "./app"
import { ThemeProvider } from "styled-components"
import { Dark } from "./themes"

const browserHistory = createBrowserHistory()

const routes = <ThemeProvider theme={ Dark }>
	<Router history={ browserHistory }>
		<Route exact component={ App } />
	</Router>
</ThemeProvider>

ReactDOM.render(routes, document.getElementById("content"))
