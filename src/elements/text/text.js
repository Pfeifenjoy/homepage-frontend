//@flow

import styled from "styled-components"

export const P = styled.p`
	color: ${ props => props.theme.textColor };
	font-family: ${ props => props.theme.fontFamily };
`
