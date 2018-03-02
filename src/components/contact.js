//@flow
import React, { Fragment, Component } from "react"
import { Section, Button } from "../elements"
import styled from "styled-components"
import textarea from "react-autosize-textarea"

/************************************************************/
/* Styling                                                  */
/************************************************************/

const BaseInput = () => `
	border: none;
	border-bottom: #888 solid;
	padding: 5px;
	background-color: inherit;
	outline: none;
	transition: 0.3s ease;
	color: white;

	:focus {
		border-bottom: white solid;
	}
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

const Message = styled(textarea)`
	${ BaseInput }
	grid-area: message;
	grid-column-end: span 2;
	resize: vertical;
	box-sizing: border-box;
`

const Send = styled(Button)`
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
	max-width: 400px;

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

/************************************************************/
/* Contact Form Component                                   */
/************************************************************/

type ContactProps = { }
type ContactState = {
	name: string,
	email: string,
	message: string
}

export default class Contact extends Component<ContactProps, ContactState> {
	state = {
		name: "",
		email: "",
		message: ""
	}

	handleInput(name: string) {
		return (event: SyntheticInputEvent<HTMLInputElement>) => {
			event.preventDefault()
			let newState = { }
			newState[name] = event.target.value || ""
			this.setState(newState)
		}
	}

	checkText(text: string) {
		return text.length > 0
	}

	checkEmail(email: string) {
		return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
	}

	handleSubmit(event: SyntheticInputEvent<HTMLButtonElement>) {
		event.preventDefault()
		//get data
		const { name, email, message } = this.state

		//validate data
		if(!this.checkText(name)) {
			//TODO
		}
		if(!this.checkEmail(email)) {
			//TODO
		}
		if(!this.checkText(message)) {
			//TODO
		}

		//TODO set busy

		//TODO send data
		
		//TODO handle response
		// - set new state (clear)
		// - unset busy

		this.setState({
			name: "",
			email: "",
			message: ""
		})
	}

	render() {
		const { name, email, message } = this.state
		return <Form
			action="/contact"
			method="post"
			onSubmit={ this.handleSubmit.bind(this) }
		>
			<Name
				placeholder="Your Name"
				name="name"
				type="text"
				value={ name }
				onChange={ this.handleInput("name").bind(this) }
			/>
			<Email
				placeholder="Your Email"
				name="email"
				type="email"
				value={ email }
				onChange={ this.handleInput("email").bind(this) }
			/>
			<Message
				rows={ 10 }
				placeholder="Your Message"
				name="message"
				type="text"
				value={ message }
				onChange={ this.handleInput("message").bind(this) }
			/>
			<Send busy={ true } type="submit">Send</Send>
		</Form>
	}
}
