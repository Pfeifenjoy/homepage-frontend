//@flow

import styled from "styled-components"

export default styled.div.attrs({
	backgroundColor: props => props.theme.backgroundColor || "#111111"
})`
	background-color: ${ props => props.backgroundColor };
	width: 100%;
	min-height: 100%;
	position: absolute;
	display: flex;
	flex-direction: column;
	align-items: center;
`
