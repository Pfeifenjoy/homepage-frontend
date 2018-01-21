//@flow

import styled from "styled-components"
import src from "./image.jpg"

export default styled.img.attrs({
	src,
	size: props => props.size || "200px",
	bordercolor: props => props.theme.textcolor || "#FFFFFF",
	backgroundcolor: props => props.theme.backgroundcolor || "#111111"
})`
	border-radius: 100%;
	border: solid 2px;
	border-color: ${ props => props.bordercolor };
	margin-top: 6em;
	width: ${ props => props.size };
	height: ${ props => props.size };
	background-color: ${ props => props.backgroundcolor };
`
