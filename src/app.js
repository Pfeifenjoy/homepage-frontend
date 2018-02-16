//@flow
import React from "react"
import { Header, Projects, Contact } from "./components"
import { Body, Section, content } from "./elements"
import NoscriptWarning from "./noscript"
import { ThemeProvider } from "styled-components"
import { Dark } from "./themes"

const projects = {
	title: "My Projects",
	body: () => <Projects />
}
const contact = {
	title: "Contact",
	body: () => <Contact />
}

export default () => <ThemeProvider theme={ Dark }>
	<Body>
		<NoscriptWarning />
		<Header />
		{ content([
			projects,
			contact
		]) }
	</Body>
</ThemeProvider>
