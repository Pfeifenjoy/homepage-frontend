//@flow

import React, { Component, Fragment } from "react"
import type { Node } from "react"
import { Section } from "."
import type { SectionDescription } from "."
import styled from "styled-components"
import Observer from "react-intersection-observer"

const Link = styled.a`
	text-decoration: inherit;
	color: white;
	min-height: 40px;
	display: flex;
	align-items: center;
	padding: 0 20px;

	transition: 0.3s ease;
	:hover {
		background-color: #777;

	}
`

const Header = styled.header.attrs({
	backgroundcolor: props => props.theme.backgroundcolor || "#111111"
})`
	position: sticky;
	top: 0;
	display: flex;
	justify-content: left;
	align-items: center;
	transition: 0.5s ease;
	width: ${ props => props.stuck ? "100%" : "60%" };
	z-index: 5;
	margin: 20px auto;
	min-height: 40px;
	border-bottom: solid white;
	background-color: ${ props => props.backgroundcolor };
`

/**
 * create a hash based on the section title
 */
const get_hash = (section: SectionDescription, key: number) =>
	key + "-" + section.title.toLocaleLowerCase().split(" ").join("-")

/**
 * create a link to the section, according to the name and key.
 */
const create_link = (section: SectionDescription, key: number) =>
	<Link href={ "#" + get_hash(section, key) } key={ key }>{ section.title }</Link>

/**
 * create a link for every section.
 */
const generate_links = (sections: Array<SectionDescription>) => sections.map(create_link)

/**
 * transform a section description intto a section.
 */
const create_section = (description: SectionDescription, key: number) =>
	<Section
		description={ description }
		hash={ get_hash(description, key) }
		key={ key }
	/>

/**
 * create a list of sections from their description.
 */
const generate_sections = (descriptions: Array<SectionDescription>) =>
	descriptions.map(create_section)


class Top extends Component<{ sections: Array<SectionDescription> }, { stuck: bool }> {

	state = {
		stuck: false
	}

	sentinel(in_view: bool) {
		this.setState({ stuck: !in_view })
	}

	render() {
		const { sections } = this.props
		const { stuck } = this.state
		return <Fragment>
			<Observer onChange={ this.sentinel.bind(this) }>
			</Observer>
			<Header stuck={ stuck }>
				{ generate_links(sections) }
			</Header>
		</Fragment>
	}
}

export default (sections: Array<SectionDescription>) => <Fragment>
	<Top sections={ sections } />
	{ generate_sections(sections) }
</Fragment>
