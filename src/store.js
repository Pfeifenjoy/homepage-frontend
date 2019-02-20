//@flow

import { createStore, applyMiddleware } from "redux"
import reducers from "./reducer"
import thunk from "redux-thunk"
import logger from "redux-logger"
import promise from "redux-promise-middleware"

const middleware = (() => {
	if(process.env.NODE_ENV !== "production") {
		return applyMiddleware(promise, thunk, logger)
	} else {
		return applyMiddleware(promise, thunk)
	}
})()

export default createStore(reducers, middleware)
