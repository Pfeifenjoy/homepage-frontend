//@flow

import React from "react"
import styled from "styled-components"

const NoscriptWarning = styled.div`
	background-color: red;
	display: block;
	position: absolute;
	width: 100%;
	top: 0;
	left: 0;
	text-align: center;
	min-height: 20px;
`

const CloseButton = styled.input`
	:checked {
		display: none;
	}
	:checked + div {
		display: none;
	}
	z-index: 1;
	right: 0;
	top: 0;
	position: absolute;
	margin: 4px;

	appearance: none;
	opacity: 0.6;
	width: 12px;
	height: 12px;
	cursor: pointer;

	:hover {
		opacity: 1;
	}

	:before, :after {
		position: absolute;
		content: ' ';
		left: 5px;
		height: 12px;
		width: 2px;
		background-color: #333;
	}

	:before {
		transform: rotate(45deg);
	}

	:after {
		transform: rotate(-45deg);
	}
`

export default () => <noscript>
	<CloseButton type="checkbox" />
	<NoscriptWarning>
		You disabled JavaScript. This might cause some unexpected behaviour.
	</NoscriptWarning>
</noscript>
