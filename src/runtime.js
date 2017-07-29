//@flow
import "./index.html"
import "babel-polyfill"

import Inferno from "inferno"
import { Router, IndexRoute } from "inferno-router"
import createBrowserHistory from "history/createBrowserHistory"
import App from "./app"
import { ThemeProvider } from "styled-components"
import { Dark } from "./themes"

const browserHistory = createBrowserHistory()

const routes = <ThemeProvider theme={ Dark }>
	<Router history={ browserHistory }>
		<IndexRoute component={ App } />
	</Router>
</ThemeProvider>

Inferno.render(routes, document.getElementById("content"))
