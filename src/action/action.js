//@flow

export type async_action_type = "SEND_MESSAGE"
export type static_action_type = "SEND_MESSAGE"

export type AsyncAction = {|
	type: async_action_type,
	payload: Promise<*>
|}

export type StaticAction<T> = {|
	type: static_action_type,
	payload: T
|}

export type Action<T> = AsyncAction | StaticAction<T>
