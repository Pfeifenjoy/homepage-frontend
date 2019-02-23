//@flow

import React, { type Node } from "react"
import { Label } from "."

export default (props: { icon?: Node, label: string, href: string }) =>
	<a
		href={ props.href }
	>
		{ props.icon }
		<Label>{ props.label }</Label>
	</a>
