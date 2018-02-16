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

export type SectionDescription = {
	title: string,
	body: () => Node
}

export default (props: { description: SectionDescription, hash: string }) => <Style>
	<Title id={ props.hash || "" }>{ props.description.title }</Title>
	<br />
	<div>{ props.description.body() }</div>
</Style>
