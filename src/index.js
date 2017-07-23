//@flow
import "./index.html"
import "babel-polyfill"

import Inferno from "inferno"
import { Router, Route, IndexRoute } from "inferno-router"
import createBrowserHistory from "history/createBrowserHistory"
import { App } from "./views"

const browserHistory = createBrowserHistory()

const routes = <Router history={ browserHistory }>
	<IndexRoute component={ App } />
</Router>

Inferno.render(routes, document.getElementById("content"))
