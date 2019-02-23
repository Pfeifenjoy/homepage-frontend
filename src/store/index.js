//@flow

import { createStore } from "redux"
import reducers from "../reducer"
import middleware from "./middleware"
import type { StaticAction } from "../action"

export default (actions: Array<StaticAction<*>> = [ ]) => {
	const store = createStore(reducers, middleware())
	for(const action of actions) {
		store.dispatch(action)
	}
	return store
}
