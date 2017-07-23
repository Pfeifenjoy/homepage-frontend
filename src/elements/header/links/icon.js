//@flow

import styled from "styled-components"
import FontAwesome from "react-fontawesome"

export default styled(FontAwesome)`
	color: ${ props => props.theme.textColor || "#FFFFFF" };
	padding: 3px;
`
