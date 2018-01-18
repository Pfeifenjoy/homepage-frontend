//@flow
import "./index.html"
import "babel-polyfill"

import React from "react"
import ReactDOM from "react-dom"
import App from "./app"
import { ThemeProvider } from "styled-components"
import { Dark } from "./themes"
import { BrowserRouter, Route  } from "react-router-dom"


const routes = <ThemeProvider theme={ Dark }>
	<BrowserRouter>
		<Route exact component={ App } />
	</BrowserRouter>
</ThemeProvider>

const target = document.getElementById("content")
if(target instanceof Element) {
	ReactDOM.render(routes, target)
} else {
	throw "Could not find content element to render content."
}
