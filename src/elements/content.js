//@flow

import React, { Component, Fragment } from "react"
import { Section } from "."
import type { SectionDescription } from "."
import Observer from "react-intersection-observer"

const Link = (props: *) => <a className="section-link" { ...props } />

const Navigation = ({ stuck, ...rest }: { stuck: boolean }) =>
	<nav
		className={ stuck ? "stuck" : "" }
		{ ...rest }
	/>

/**
 * create a link to the section, according to the name and key.
 */
const create_link = (section: SectionDescription, key: number) =>
	<Link href={ "#" + section.hash } key={ key }>{ section.title }</Link>

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
		hash={ description.hash }
		key={ key }
	/>

/**
 * create a list of sections from their description.
 */
const generate_sections = (descriptions: Array<SectionDescription>) =>
	descriptions.map(create_section)

type TopProps = { sections: Array<SectionDescription> }
type TopState = { stuck: boolean }

class Top extends Component<TopProps, TopState> {

	constructor(props: TopProps) {
		super(props)
		this.state = {
			stuck: false
		}
	}

	sentinel(in_view: boolean) {
		this.setState({ stuck: !in_view })
	}

	render() {
		const { sections } = this.props
		const { stuck } = this.state
		return <Fragment>
			<Observer onChange={ this.sentinel.bind(this) }>
			</Observer>
			<Navigation stuck={ stuck }>
				{ generate_links(sections) }
			</Navigation>
		</Fragment>
	}
}

export default (sections: Array<SectionDescription>) => <Fragment>
	<Top sections={ sections } />
	{ generate_sections(sections) }
</Fragment>
