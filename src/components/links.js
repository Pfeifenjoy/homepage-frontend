//@flow

import Inferno from "inferno"
import { Container, Icon, Link } from "../elements/header/links"

export default () => <Container>
	<Link
		icon={ <Icon name="github" /> }
		label="github"
		href="https://github.com/Pfeifenjoy"
		/>
	<Link
		icon={ <Icon name="linkedin" /> }
		label="linkedin"
		href="https://www.linkedin.com/in/arwed-mett-4b5784123/"
		/>
	<Link
		icon={ <Icon name="stack-overflow" /> }
		label="stack-overflow"
		href="https://stackoverflow.com/users/4399651/arwed-mett?tab=profile"
		/>
</Container>
