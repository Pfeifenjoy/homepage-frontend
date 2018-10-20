//@flow

import React, { Component, Fragment } from "react"
import type { ElementProps, Node } from "react"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled, { keyframes } from "styled-components"

library.add(faCircle)

/************************************************************/
/* Loader                                                   */
/************************************************************/
const LoaderKeyframes = keyframes`
	from {
		transform: translateX(-50%) translateY(-50%) rotate(0deg);
	}
	
	to {
		transform: translateX(-50%) translateY(-50%) rotate(360deg);
	}
`

const LoaderStyle = styled(FontAwesomeIcon)`
	position: absolute;
	display: block;
	height: 90%;
	max-height: 200px;

	top: 50%;
	left: 50%;

	animation: ${ LoaderKeyframes } 2s linear infinite;
`

const Loader = () => <LoaderStyle icon="circle" />

/************************************************************/
/* Button Style                                             */
/************************************************************/

const Base = styled.button`
	position: relative;
`

type props_t = {
	busy: boolean,
	children: ?Node
} | ElementProps<typeof Base>

/************************************************************/
/* Button logic                                             */
/************************************************************/

export default class Button extends Component<props_t, { }> {
	render() {
		const { busy, children, ...props } = this.props

		//loader infront of hidden text -> button remains size
		const Busy = <Fragment>
			<span style={{ visibility: "hidden" }}>
				{ children }
			</span>
			<Loader />
		</Fragment>

		return <Base { ...props }>{ busy ? Busy: children }</Base>
	}
}

