//@flow

import { applyMiddleware } from "redux"
import type { StoreEnhancer } from "redux"
import thunk from "redux-thunk"
import logger from "redux-logger"
import promise from "redux-promise-middleware"
import type { State } from "../reducer"
import type { Action } from "../action"

export default (): StoreEnhancer<State, Action> =>
	process.env.NODE_ENV !== "production" ?
		applyMiddleware(promise, thunk) :
		applyMiddleware(promise, thunk, logger)
