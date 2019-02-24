//@flow

import { createStore } from "redux"
import type { Store } from "redux"
import reducers from "../reducer"
import middleware from "./middleware"
import type { Action } from "../action"
import type { State } from "../reducer"

export default (actions: Array<Action> = [ ]) => {
	const store: Store<State, Action> = createStore(reducers, middleware())
	for(const action of actions) {
		store.dispatch(action)
	}
	return store
}
