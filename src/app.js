//@flow
import React from "react"
import { Header, Projects } from "./components"
import { Body, Section } from "./elements"
import NoscriptWarning from "./noscript"
import { ThemeProvider } from "styled-components"
import { Dark } from "./themes"

export default () => <ThemeProvider theme={ Dark }>
	<Body>
		<NoscriptWarning />
		<Header />
		<Section title="My Projects">
			<Projects />
		</Section>
	</Body>
</ThemeProvider>
