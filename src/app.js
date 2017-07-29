//@flow
import Inferno from "inferno"
import { Header, Projects } from "./components"
import { Body, Section } from "./elements"


export default () => <Body>
	<Header />
	<Section title="My Projects">
		<Projects />
	</Section>
</Body>
