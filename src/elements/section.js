//@flow

import React from "react"
import type { Node } from "react"

export type SectionDescription = {|
	title: string,
	body: () => Node,
	hash: string
|}

export default (props: { description: SectionDescription, hash: string }) =>
	<section id={ props.hash }>
		<h1>{ props.description.title }</h1>
		<br />
		<div>{ props.description.body() }</div>
	</section>
