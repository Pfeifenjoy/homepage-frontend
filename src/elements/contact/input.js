//@flow

import React from "react"

export default
({ validation, className, ...props }: { validation: boolean, className: string }) =>
	<input
		className={ className + (validation ? " validate" : "") }
		{ ...props }
	/>
