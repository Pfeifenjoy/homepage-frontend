//@flow

import React, { Component, Fragment } from "react"
import type { Node } from "react"
import { CircleNotch } from "../../icon"

type ButtonProps = {
	busy: boolean,
	children: ?Node
}

/************************************************************/
/* Button logic                                             */
/************************************************************/

export default class Button extends Component<ButtonProps, { }> {
	render() {
		const { busy, children, ...props } = this.props

		//loader infront of hidden text -> button remains size
		const Busy = <Fragment>
			<span style={{ visibility: "hidden" }}>
				{ children }
			</span>
			<CircleNotch className="loader" />
		</Fragment>

		return <button { ...props }>{ busy ? Busy : children }</button>
	}
}

