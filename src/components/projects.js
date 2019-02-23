//@flow

import React from "react"
import { ProjectContainer, Project } from "../elements"
import theseus_image from "./images/theseus.gif"
import java_compiler_image from "./images/java-compiler.gif"
import github_chrome_fullname_image from "./images/github-chrome-fullname.png"

export default () => <ProjectContainer>
	<Project
		title="Theseus"
		href="https://github.com/Pfeifenjoy/Theseus"
		description="Adventure game written in the context of my software engineering lecture."
		img={ theseus_image }
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
		img={ github_chrome_fullname_image }
	/>
	<Project
		title="Small Java Compiler"
		href="https://github.com/Pfeifenjoy/compilerbau-WS17-18"
		description="A small Java compiler developed during my compiler construction lecture."
		img={ java_compiler_image }
	/>
</ProjectContainer>
