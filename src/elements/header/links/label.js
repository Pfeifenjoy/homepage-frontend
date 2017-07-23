//@flow

import Inferno from "inferno"
import styled from "styled-components"

export default styled.span`
	color: ${ props => props.theme.textColor || "#FFFFFF" };
	font-family: ${ props => props.theme.fontFamily || "monospace" };
	font-size: 8pt;
`
