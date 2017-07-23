//@flow

import Inferno from "inferno"
import styled from "styled-components"
import Label from "./label"
import Icon from "./icon"

const Wrapper = styled.a`
	color: ${ props => props.theme.textColor };
	display: flex;
	align-items: center;
	text-decoration: none;
	margin: 5px;
`

export default (props: { icon?: Icon, label: Label, href: string }) =>
	<Wrapper href={ props.href }>
		{ props.icon }
		<Label>{ props.label }</Label>
	</Wrapper>
