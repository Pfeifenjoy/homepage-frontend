//@flow
import React from "react"
import { Header, Projects } from "./components"
import { Body, Section } from "./elements"
import NoscriptWarning from "./noscript"


export default () => <Body>
	<NoscriptWarning />
	<Header />
	<Section title="My Projects">
		<Projects />
	</Section>
</Body>
