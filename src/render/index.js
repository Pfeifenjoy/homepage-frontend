//@flow

import React from "react"
import type { StaticAction } from "../action"
import createStore from "../store"
import { renderToString } from "react-dom/server"
import { Provider } from "react-redux"
import App from "../app"
import ejs from "ejs"
import index_file from "raw-loader!./index.ejs"
import style from "../style"

//static variables
export const template = ejs.compile(index_file)
export const title = "Arwed Mett"

export default (actions: Array<StaticAction<*>>) => {
	const store = createStore(actions)

	const content = renderToString(
		<Provider store={ store }>
			<App />
		</Provider>
	)

	const state = store.getState()

	return template({ content, state, style, title })
}
