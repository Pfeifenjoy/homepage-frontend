//@flow

import styled from "styled-components"

const Base = (props: { theme: { textColor: string, fontFamily: string } }) => `
	color: ${ props.theme.textColor || "#FFFFFF" };
	font-family: ${ props.theme.fontFamily || "monospace" };
`

export const Title = styled.h1`
	${ props => Base(props) };
	font-size: 24pt;
`

export const H1 = styled.h1`
	${ props => Base(props) };
	font-size: 20pt;
`

export const H2 = styled.h2`
	${ props => Base(props) };
	font-size: 18pt;
`

