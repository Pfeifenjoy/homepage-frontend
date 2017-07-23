//@flow
import Inferno from "inferno"
import { Header, Projects } from "../components"
import { Body, Section } from "../elements"

import { ThemeProvider } from "styled-components"
import { Dark } from "../themes"


export default () => <ThemeProvider theme={ Dark }>
	<Body>
		<Header />

		<Section title="My Projects">
			<Projects />
		</Section>

	</Body>
</ThemeProvider>
