//@flow

import Inferno from "inferno"
import { ProjectContainer, Project } from "../elements"

export default () => <ProjectContainer
	title="My Projects"
	>
	<Project
		title="Theseus"
		href="https://github.com/Pfeifenjoy/Theseus"
		description="Adventure game written in the context of my software engineering lecture."
		img="https://github.com/Pfeifenjoy/Theseus/raw/master/theseus.gif"
		/>
	<Project
		title="Chat"
		href="https://github.com/Pfeifenjoy/chat"
		description="On premise chat application developed during the webengineering lecture."
		/>
	<Project
		title="EduHack"
		href="https://github.com/Pfeifenjoy/EduHack"
		description="Educational forum based on a real time chat component."
		/>
	<Project
		title="github-chrome-fullname"
		href="https://github.com/Pfeifenjoy/github-chrome-fullname"
		description="Chrome extension to display full-name(s) instead of SAP D- / I-User in GitHub Enterprise."
		img="https://github.com/cgrail/github-chrome-fullname/raw/master/chrome-store-screenshot.png"
		/>
</ProjectContainer>
