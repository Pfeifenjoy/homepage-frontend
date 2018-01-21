//@flow

import styled from "styled-components"
import FontAwesome from "@fortawesome/react-fontawesome"

export default styled(FontAwesome)`
	color: ${ props => props.theme.textColor || "#FFFFFF" };
	margin-right: 5px;
	width: 12pt;
	height: 12pt;
`
