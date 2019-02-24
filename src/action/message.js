//@flow

export type Action = {
	type: "SEND_MESSAGE"
} | {
	type: "SEND_MESSAGE_PENDING"
} | {
	type: "SEND_MESSAGE_FULFILLED",
	payload: Response
} | {
	type: "SEND_MESSAGE_REJECTED",
	payload: Error
}

export type message_t = {
	email: string;
	name: string;
	text: string;
};

export const send_message = (payload: message_t): Action => ({
	type: "SEND_MESSAGE",
	payload: fetch("api/message/create", {
		method: "POST",
		cache: "no-cache",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(payload)
	})
})
