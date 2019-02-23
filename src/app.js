//@flow
import React, { Fragment } from "react"
import { Header, Projects, Contact } from "./components"
import { content } from "./elements"
import NoscriptWarning from "./noscript"

const projects = {
	title: "My Projects",
	body: () => <Projects />,
	hash: "projects"
}
const contact = {
	title: "Contact",
	body: () => <Contact />,
	hash: "contact"
}

export default () => //<ThemeProvider theme={ Dark }>
	<Fragment>
		<NoscriptWarning />
		<Header />
		{ content([
			projects,
			contact
		]) }
	</Fragment>
//</ThemeProvider>
