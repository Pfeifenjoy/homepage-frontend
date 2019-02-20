//@flow
import React, { Component } from "react"
import { Button } from "../elements"
import styled from "styled-components"
import textarea from "react-autosize-textarea"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons"
import { connect } from "react-redux"
import { send_message } from "../action"

/************************************************************/
/* Styling                                                  */
/************************************************************/

const BaseInput = ({ validation }: { validation: boolean }) => `
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
	:invalid {
		${ validation ? "border-bottom: red solid;" : "" }
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
	grid-area: text;
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

	grid-template-columns: 1fr;
	grid-template-rows: 1fr 1fr auto auto;
	grid-template-areas:
		"name"
		"email"
		"text"
		"send";

	grid-gap: 10px;

	@media screen and (min-width: 500px) {
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr auto auto;
		grid-template-areas:
			"name email"
			"text text"
			"send send";
	}

	margin-top: 10px;
	margin-bottom: 10px;
	max-width: 800px;
	margin-left: auto;
	margin-right: auto;
`
/************************************************************/
/* Successfully send                                        */
/************************************************************/

const SendIcon = styled(FontAwesomeIcon)`
	color: white;
	min-width: 50px;
	min-height: 50px;
	margin: 10px;
`
const SendText = styled.div`
	color: white;
	font-size: 10pt;
`

const SendContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	distplay: flex;
	height: 250px;
`
const Success = () => <SendContainer>
	<SendIcon icon={ faCheck } />
	<SendText>Success</SendText>
</SendContainer>

/************************************************************/
/* Failure send                                             */
/************************************************************/
const Fail = () => <SendContainer>
	<SendIcon icon={ faTimes } />
	<SendText>Unknown Failure</SendText>
</SendContainer>

/************************************************************/
/* Contact Form Component                                   */
/************************************************************/

type State = "IDLE" | "PENDING" | "FULFILLED" | "REJECTED"

type ContactProps = { state: State, dispatch: Function }

type ContactState = {
	name: string,
	email: string,
	text: string,
	validation: boolean
}

/************************************************************/
/* Container                                                */
/************************************************************/

const Container = styled.div`
	 min-height: 250px;
	 width: 100%;
	 padding: 0;
	 margin: 0;
`

export class Contact extends Component<ContactProps, ContactState> {
	state = {
		name: "",
		email: "",
		text: "",
		validation: false
	}

	handleInput(name: string) {
		return (event: SyntheticInputEvent<HTMLInputElement>) => {
			event.preventDefault()
			let newState = { }
			newState[name] = event.target.value || ""
			this.setState(newState)
		}
	}

	activateValidation() {
		this.setState({ validation: true })
	}

	async handleSubmit(event: SyntheticInputEvent<HTMLButtonElement>) {
		event.preventDefault()

		const { name, email, text } = this.state
		await this.props.dispatch(send_message({ name, email, text }))
		if(this.props.state === "FULFILLED") {
			this.setState({ name: "", email: "", text: "" })
		}
	}

	render() {
		const { name, email, text, validation } = this.state
		const { state } = this.props

		let body
		switch(state) {
		case "PENDING":
		case "IDLE":
			body = <Form
				action="/contact"
				method="post"
				onSubmit={ this.handleSubmit.bind(this) }
			>
				<Name
					placeholder="Your Name"
					name="name"
					type="text"
					required={ true }
					value={ name }
					onChange={ this.handleInput("name").bind(this) }
					validation={ validation ? 1 : 0 }
					disabled={ state === "PENDING" }
				/>
				<Email
					placeholder="Your Email"
					name="email"
					type="email"
					required={ true }
					value={ email }
					onChange={ this.handleInput("email").bind(this) }
					validation={ validation ? 1 : 0 }
					disabled={ state === "PENDING" }
				/>
				<Message
					rows={ 10 }
					placeholder="Your Message"
					name="text"
					type="text"
					required={ true }
					value={ text }
					onChange={ this.handleInput("text").bind(this) }
					validation={ validation ? 1 : 0 }
					disabled={ state === "PENDING" }
				/>
				<Send
					busy={ state === "PENDING" }
					type="submit"
					onClick={ this.activateValidation.bind(this) }
				>
					Send
				</Send>
			</Form>
			break
		case "FULFILLED":
			body = <Success />
			break
		default:
			body = <Fail />
		}

		return <Container>{ body }</Container>
	}
}

export default connect(state => ({ state: state.message.state }))(Contact)
