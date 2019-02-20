//@flow

import styled from "styled-components"

export default styled.div.attrs({
	backgroundcolor: props => props.theme.backgroundcolor || "#111111"
})`
	background-color: ${ props => props.backgroundcolor };
	width: 100%;
	min-height: 100%;
	position: absolute;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: monospace;
	color: white;
`
