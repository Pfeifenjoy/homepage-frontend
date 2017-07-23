//@flow

import Inferno from "inferno"
import Component from "inferno-component"

import styled from "styled-components"
import { P } from "./text"

const height = 200
const width = 200

const WrapperPadding = 20
const NavTextSize = 12
const NavTextPadding = 5

const Wrapper = styled.a`
	position: relative;
	border: dashed 1px;
	padding: ${ WrapperPadding }px;

	@media (min-width: 500px) {
		width: ${ width }px;
		min-height: ${ height }px;
	}

	@media (max-width: 500px) {
		width: 100%;
		height: 100%;
		padding-bottom: calc(${ 2 * WrapperPadding }px + ${ NavTextSize }pt + ${ 2 * NavTextPadding }px);
	}

	border-color: ${ props => props.theme.textColor };
	margin: 15px;

	background-color: ${ props => props.theme.projectTileColor };
	text-decoration: inherit;
	color: ${ props => props.theme.textColor };

	&:visited {
		text-decoration: inherit;
		color: ${ props => props.theme.projectVisitedColor };
		border-color: ${ props => props.theme.projectVisitedColor };
	}
`

Wrapper.defaultProps = {
	theme: {
		textColor: "#FFFFFF",
		projectTileColor: "#222222",
		projectVisitedColor: "#888888"
	}
}

const Title = styled.h2`
	font-family: ${ props => props.theme.fontFamily };
	font-size: 14pt;
`

Title.defaultProps = {
	theme: {
		fontFamily: "monospace"
	}
}

const Description = styled(P)`
	margin-top: 10px;
	color: inherit;
`

const BackgroundImage = styled.img`
	position: absolute;
	top: ${ props => props.background ? "5px" : "0" };
	left: ${ props => props.background ? "5px" : "0" };
	width: calc(100% - ${ props => props.background ? "10px" : "0px" });
	height: calc(100% - ${ props => props.background ? "10px" : "0px" });
	z-index: 1;
	filter: ${ props => props.background ? "blur(5px) brightness(30%)" : "blur(2px) brightness(50%)" };
	transition: ${ props => props.background ? "0s" : "0.5s" };

	display: ${ props => props.src ? "" : "none" };
`

const Content = styled.div`
	position: relative;
	width: 100%;
	z-index: 2;
`

const NavigationContainer = styled.div`
	position: absolute;
	bottom: ${ WrapperPadding }px;
	z-index: 2;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	left: 0;
	margin-top: ${ WrapperPadding }px;
`

const Navigation = styled.span`
	color: #FFFFFF;
	font-size: ${ NavTextSize }pt;
	background-color: #FF4136;
	padding: ${ NavTextPadding }px;
	border-radius: 5px;
	font-family: ${ props => props.theme.fontFamily };
	z-index: 2;
`

Navigation.defaultProps = {
	theme: {
		fontFamily: "monospace"
	}
}

export default class Project extends Component {
	props: {
		title: string,
		description: string,
		href: string,
		img?: string
	}

	static defaultProps = {
		description: "",
		href: ""
	}

	state = {
		hover: false
	}

	render() {
		const { href, img, title, description } = this.props
		const { hover } = this.state
		return <Wrapper
					title={ title }
					href={ href }
					onMouseEnter={ () => this.setState({ hover: true }) }
					onMouseLeave={ () => this.setState({ hover: false }) }
					>
			<BackgroundImage src={ img } background={ !hover && !!img } />
			<Content background={ hover && !!img }>
				<Title>{ title }</Title>
				<Description>{ description }</Description>
			</Content>
			{ hover ? <NavigationContainer>
				<Navigation>Take me there.</Navigation>
			</NavigationContainer> : "" }
		</Wrapper>
	}
}

export const ProjectContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
	justify-content: flex-start;
	flex-wrap: wrap;
	align-items: stretch;
`
