//@flow
import React from "react"
import { Header, Projects, Contact } from "./components"
import { Body, Section, Content } from "./elements"
import NoscriptWarning from "./noscript"
import { ThemeProvider } from "styled-components"
import { Dark } from "./themes"

export default () => <ThemeProvider theme={ Dark }>
	<Body>
		<NoscriptWarning />
		<Header />
		<Content>
			<Section title="My Projects">
				<Projects />
			</Section>
			<Section title="Contact">
				<Contact />
			</Section>
		</Content>
	</Body>
</ThemeProvider>
