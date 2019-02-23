//@flow

import React from "react"

const NoscriptWarning = (props: *) => <div className="warning" { ...props } />

const CloseButton = (props: *) => <input className="close-button" { ...props } />

export default () => <noscript>
	<CloseButton type="checkbox" />
	<NoscriptWarning>
		You disabled JavaScript. This might cause some unexpected behaviour.
	</NoscriptWarning>
</noscript>
