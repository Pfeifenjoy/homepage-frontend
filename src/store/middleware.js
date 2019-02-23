//@flow

import { applyMiddleware } from "redux"
import thunk from "redux-thunk"
import logger from "redux-logger"
import promise from "redux-promise-middleware"

export default () => {
	if(process.env.NODE_ENV !== "production") {
		return applyMiddleware(promise, thunk, logger)
	} else {
		return applyMiddleware(promise, thunk)
	}
}

