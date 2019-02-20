//@flow
import React from "react"
import { Header, Projects, Contact } from "./components"
import { Body, content } from "./elements"
import NoscriptWarning from "./noscript"
import { ThemeProvider } from "styled-components"
import { Dark } from "./themes"
import { Provider } from "react-redux"
import store from "./store"

const projects = {
	title: "My Projects",
	body: () => <Projects />
}
const contact = {
	title: "Contact",
	body: () => <Contact />
}

export default () => <Provider store={ store }>
	<ThemeProvider theme={ Dark }>
		<Body>
			<NoscriptWarning />
			<Header />
			{ content([
				projects,
				contact
			]) }
		</Body>
	</ThemeProvider>
</Provider>
