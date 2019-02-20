//@flow

export type message_t = {
	email: string;
	name: string;
	text: string;
};

export const send_message = (payload: message_t) => ({
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
