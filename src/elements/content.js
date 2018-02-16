//@flow

import React, { Component } from "react"
import type { Node } from "react"
import { Section } from "."
import type { SectionDescription } from "."
import styled from "styled-components"
import Observer from "@researchgate/react-intersection-observer"

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
	width: 60%;
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


const Sentinel = styled.div`
	width: 100%;
	height: 1px;
`

const test = () => alert("test")

export default (sections: Array<SectionDescription>) => <div>
	<Observer onChange={ test } root="body" rootMargin="0% 0% 0% 0%">
		<Sentinel />
	</Observer>
	<Header onWheel={ test }>
		{ generate_links(sections) }
	</Header>
	{ generate_sections(sections) }
</div>
