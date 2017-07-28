//@flow
import Inferno from "inferno"
import { Header, Projects } from "./components"
import { Body, Section } from "./elements"

import { ThemeProvider } from "styled-components"
import { Dark } from "./themes"

//export default () => <ThemeProvider theme={ Dark }>
//	<Body>
//		<Header />
//
//
//	</Body>
//</ThemeProvider>
//		<Section title="My Projects">
//			<Projects />
//		</Section>

export default () => <Body>
	<Header />
	<Section title="My Projects">
		<Projects />
	</Section>
</Body>
