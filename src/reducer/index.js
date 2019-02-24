//@flow

import { combineReducers } from "redux"
import type { Reducer } from "redux"
import message from "./message"
import type { Action } from "../action"
import type { State as MessageState } from "./message"

export type State = {
	message: MessageState
}

const reducers: Reducer<State, Action> = combineReducers({ message })

export default reducers
