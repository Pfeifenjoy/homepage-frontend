//@flow
import "./index.html"
import "babel-polyfill"

import React from "react"
import ReactDOM from "react-dom"
import App from "./app"
import { ThemeProvider } from "styled-components"
import { BrowserRouter, Route  } from "react-router-dom"


const routes = <BrowserRouter>
	<Route exact component={ App } />
</BrowserRouter>

const target = document.getElementById("content")
if(target instanceof Element) {
	ReactDOM.render(routes, target)
} else {
	throw "Could not find content element to render content."
}
