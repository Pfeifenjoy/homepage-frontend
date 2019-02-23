//@flow

import React from "react"
import { Container, Icon, Link } from "../elements/header/links"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faKey } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin, faStackOverflow } from "@fortawesome/free-brands-svg-icons"
import pubKey from "./arwed-mett.pub.asc"

library.add(faGithub)
library.add(faLinkedin)
library.add(faStackOverflow)
library.add(faKey)

export default () => <Container>
	<Link
		icon={ <Icon icon={ [ "fab", "github" ] } /> }
		label="Github"
		href="https://github.com/Pfeifenjoy"
	/>
	<Link
		icon={ <Icon icon={ [ "fab", "linkedin" ] } /> }
		label="Linkedin"
		href="https://www.linkedin.com/in/arwed-mett-4b5784123/"
	/>
	<Link
		icon={ <Icon icon={ [ "fab", "stack-overflow" ] } /> }
		label="Stack Overflow"
		href="https://stackoverflow.com/users/4399651/arwed-mett?tab=profile"
	/>
	<Link
		icon={ <Icon icon={ faKey } /> }
		label="GPG - Public Key"
		href={ pubKey }
	/>
</Container>
