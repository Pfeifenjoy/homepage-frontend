//@flow

type state_t = {
	state: "IDLE" | "PENDING" | "FULFILLED" | "FAIL"
}

type action_t = {
	type: "SEND_MESSAGE_PENDING"
} | {
	type: "SEND_MESSAGE_FULFILLED",
	payload: Response
} | {
	type: "SEND_MESSAGE_REJECTED",
	payload: Error
}

export default (_: state_t, action: action_t) => {
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
