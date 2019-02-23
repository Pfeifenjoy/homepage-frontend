//@flow

import React, { Component } from "react"

const Wrapper = (props: *) => <a className="project" { ...props } />

const Title = (props: *) => <h2 className="title" { ...props } />

const Description = (props: *) => <p className="description" { ...props } />

const BackgroundImage = ({ background, ...props }: { background: boolean, src?: string }) =>
	<img
		className={ "background-image" + (background ? " background" : "") }
		{ ...props }
	/>

const Content = (props: *) => <div className="content" { ...props } />

const NavigationContainer = (props: *) =>
	<div className="navigation-container" { ...props } />

const Navigation = (props: *) => <span className="navigation" { ...props } />

type ProjectProps = {
	title: string,
	description: string,
	href: string,
	img?: string
}

type ProjectState = {
	hover: boolean
}

export default class Project extends Component<ProjectProps, ProjectState> {
	constructor(props: ProjectProps) {
		super(props)
		this.state = {
			hover: false
		}
	}

	render() {
		const { href, img, title, description } = this.props
		const { hover } = this.state
		return <Wrapper
			title={ title }
			href={ href }
			target="_blank"
			onMouseEnter={ () => this.setState({ hover: true }) }
			onMouseLeave={ () => this.setState({ hover: false }) }
		>
			<BackgroundImage src={ img } background={ !hover && !!img } />
			<Content>
				<Title>{ title }</Title>
				<Description>{ description }</Description>
			</Content>
			{ hover ? <NavigationContainer>
				<Navigation>Take me there.</Navigation>
			</NavigationContainer> : "" }
		</Wrapper>
	}
}

export const ProjectContainer = (props: *) =>
	<div className="projects" { ...props } />
