//@flow

import React from "react"
import textarea from "react-autosize-textarea"

export default
({ validation, className, ...props }: { validation: boolean, className: string }) =>
	<textarea
		className={ className + (validation ? " validate" : "" )}
		{ ...props }
	/>
