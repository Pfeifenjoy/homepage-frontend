//@flow

import React from "react"
import {
	ReferenceContainer as Container,
	ReferenceIcon as Icon,
	Reference
} from "../elements/header"
import {
	Key,
	Github,
	Linkedin,
	StackOverflow
} from "../icon"

import pubKey from "./arwed-mett.pub.asc"

export default () => <Container>
	<Reference
		icon={ Icon(<Github />) }
		label="Github"
		href="https://github.com/Pfeifenjoy"
	/>
	<Reference
		icon={ Icon(<Linkedin />) }
		label="Linkedin"
		href="https://www.linkedin.com/in/arwed-mett-4b5784123/"
	/>
	<Reference
		icon={ Icon(<StackOverflow />) }
		label="Stack Overflow"
		href="https://stackoverflow.com/users/4399651/arwed-mett?tab=profile"
	/>
	<Reference
		icon={ Icon(<Key />) }
		label="GPG - Public Key"
		href={ pubKey }
	/>
</Container>
