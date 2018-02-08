//@flow

import React from "react"
import { Container, Icon, Link } from "../elements/header/links"
import faGithub from "@fortawesome/fontawesome-free-brands/faGithub"
import faLinkedin from "@fortawesome/fontawesome-free-brands/faLinkedin"
import faStackOverflow from "@fortawesome/fontawesome-free-brands/faStackOverflow"
import faKey from "@fortawesome/fontawesome-free-solid/faKey"
import pubKey from "file-loader?name=[name].asc!../../resources/arwed-mett.pub.asc"

export default () => <Container>
	<Link
		icon={ <Icon icon={ faGithub } /> }
		label="Github"
		href="https://github.com/Pfeifenjoy"
	/>
	<Link
		icon={ <Icon icon={ faLinkedin } /> }
		label="Linkedin"
		href="https://www.linkedin.com/in/arwed-mett-4b5784123/"
	/>
	<Link
		icon={ <Icon icon={ faStackOverflow } /> }
		label="Stack Overflow"
		href="https://stackoverflow.com/users/4399651/arwed-mett?tab=profile"
	/>
	<Link
		icon={ <Icon icon={ faKey } /> }
		label="GPG - Public Key"
		href={ pubKey }
	/>
</Container>
