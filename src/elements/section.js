//@flow

import React from "react"
import type { Node } from "react"
import styled from "styled-components"
import { H1 } from "./text"

const padding = 20

const Style = styled.section`
	min-width: 100px;
	width: calc(100% - ${ 2 * padding }%);
	padding-left: ${ padding }%;
	padding-right: ${ padding }%;
	margin-top: 30px;
	margin-bottom: 30px;
`

const Title = H1

export default (props: { title: string, children?: Node }) => <Style>
	<Title>{ props.title }</Title>
	<br />
	<div>{ props.children }</div>
</Style>
