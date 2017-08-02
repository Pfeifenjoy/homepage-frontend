//@flow

import styled from "styled-components"
import src from "./image.jpg"

export default styled.img.attrs({
	src,
	size: props => props.size || "200px",
	borderColor: props => props.theme.textColor || "#FFFFFF",
	backgroundColor: props => props.theme.backgroundColor || "#111111"
})`
	border-radius: 100%;
	border: solid 2px;
	border-color: ${ props => props.borderColor };
	margin-top: 6em;
	width: ${ props => props.size };
	height: ${ props => props.size };
	background-color: ${ props => props.backgroundColor };
`
