//@flow

import React from "react"
import src from "./image.jpg"

export default (props: *) =>
	<img
		className="image"
		src={ src }
		{ ...props }
	/>

