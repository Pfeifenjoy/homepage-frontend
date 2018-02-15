//@flow

import React, { Component, Node } from "react"

type LinkProps = {
	title: String,
	target: Node
}

type LinkState = {
	target: Node
}

class Link extends Component<LinkProps, LinkState> {
	constructor(props) {
		super(props)
		const { target } = props
		this.setState({ target })
	}
}

type ContentProps = {
	children: React.Node
}

type ContentState = {

}

class Content extends Component<ContentProps, ContentState> {
	render() {
		const { children } = this.props
		return <div>
			{ children }
		</div>
	}
}

export default Content
