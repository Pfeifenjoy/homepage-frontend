//@flow
import "./index.html"
import "./style/index.less"
import "@babel/polyfill"

import React from "react"
import ReactDOM from "react-dom"
import App from "./app"
import createStore from "./store/index.js"
import { Provider } from "react-redux"

const target = document.getElementById("content")

if(target) {
	ReactDOM.render(<Provider store={ createStore() }><App /></Provider>, target)
} else {
	throw "Could not find content element to render content."
}
