//@flow
import React from "react"
import { Section } from "../elements"
import styled from "styled-components"

const BaseInput = () => `
	background-color: #EEE;
	border: solid #AAA;
	padding: 5px;
	border-radius: 5px;
`
const Input = styled.input`
	${ BaseInput }
`

const Name = styled(Input)`
	grid-area: name;
`

const Email = styled(Input)`
	grid-area: email;
`

const Message = styled.textarea`
	${ BaseInput }
	grid-area: message;
	grid-column-end: span 2;
	resize: vertical;
`

const Send = styled.button`
	grid-area: send;
	justify-self: center;
    background-color: #666;
    border: dotted 1px white;
    color: white;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 15px;
    padding-right: 15px;
	cursor: pointer;
	font-family: inherit;
	font-size: 10pt;
`

const Form = styled.form`
	display: grid;
	width: 100%;
	max-width: 550px;
	margin: 0 auto;

	grid-template-columns: 1fr;
	grid-template-rows: 1fr 1fr auto auto;
	grid-template-areas:
		"name"
		"email"
		"message"
		"send";

	grid-gap: 10px;

	@media screen and (min-width: 500px) {
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr auto auto;
		grid-template-areas:
			"name email"
			"message message"
			"send send";
	}
`

export default () => <Form>
	<Name placeholder="Name" />
	<Email placeholder="Email" />
	<Message rows="10" placeholder="Your Message" />
	<Send type="submit">Send</Send>
</Form>
