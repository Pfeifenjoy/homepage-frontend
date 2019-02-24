//@flow

import type { Action } from "../action/message"
import type { Reducer } from "redux"

export type State = {
	state: "IDLE" | "PENDING" | "FULFILLED" | "REJECTED"
}

const message: Reducer<State, Action> = (_, action: Action): State => {
	switch(action.type) {
	case "SEND_MESSAGE_PENDING":
		return { state: "PENDING" }
	case "SEND_MESSAGE_FULFILLED":
		if(action.payload.ok) {
			return { state: "FULFILLED" }
		} else {
			return { state: "REJECTED" }
		}
	case "SEND_MESSAGE_REJECTED":
		return { state: "REJECTED" }
	default:
		return { state: "IDLE" }
	}
}

export default message
