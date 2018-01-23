//@flow

import React from "react"
import type { Node } from "react"
import styled from "styled-components"
import Label from "./label"
import Icon from "./icon"

const Wrapper = styled.a`
	color: ${ props => props.theme.textColor };
	display: flex;
	align-items: center;
	text-decoration: none;
	margin: 5px;
`

export default (props: { icon?: Node, label: string, href: string }) =>
	<Wrapper
		href={ props.href }
		target="_blank">
		{ props.icon }
		<Label>{ props.label }</Label>
	</Wrapper>
