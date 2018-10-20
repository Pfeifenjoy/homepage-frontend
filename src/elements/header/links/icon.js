//@flow

import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default styled(FontAwesomeIcon)`
	color: ${ props => props.theme.textColor || "#FFFFFF" };
	margin-right: 5px;
`

