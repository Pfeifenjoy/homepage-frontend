//@flow
import React, { Component, Fragment } from "react"
import { Button } from "../elements"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons"
import { connect } from "react-redux"
import { send_message } from "../action"
import {
	ContactInput as Input,
	ContactTextarea as Textarea
} from "../elements"

/************************************************************/
/* Styling                                                  */
/************************************************************/

const Name = (props: *) => <Input className="name" { ...props } />

const Email = (props: *) => <Input className="email" { ...props } />

const Message = (props: *) => <Textarea className="message" { ...props } />

const Submit = (props: *) => <Button className="submit" { ...props } />

const Form = (props: *) => <form { ...props } />

/************************************************************/
/* Successfully send                                        */
/************************************************************/

const SendIcon = (props: *) => <FontAwesomeIcon className="icon" { ...props } />

const SendText = (props: *) => <div className="text" { ...props } />

const SendContainer = (props: *) => <div className="send" { ...props } />

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


export class Contact extends Component<ContactProps, ContactState> {

	constructor(props: ContactProps) {
		super(props)
		this.state = {
			name: "",
			email: "",
			text: "",
			validation: false
		}
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
				className="contact"
				onSubmit={ this.handleSubmit.bind(this) }
			>
				<Name
					placeholder="Your Name"
					name="name"
					type="text"
					required={ true }
					value={ name }
					onChange={ this.handleInput("name").bind(this) }
					validation={ validation }
					disabled={ state === "PENDING" }
				/>
				<Email
					placeholder="Your Email"
					name="email"
					type="email"
					required={ true }
					value={ email }
					onChange={ this.handleInput("email").bind(this) }
					validation={ validation }
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
					validation={ validation }
					disabled={ state === "PENDING" }
				/>
				<Submit
					busy={ state === "PENDING" }
					type="submit"
					onClick={ this.activateValidation.bind(this) }
				>
					Send
				</Submit>
			</Form>
			break
		case "FULFILLED":
			body = <Success />
			break
		default:
			body = <Fail />
		}

		return <Fragment>{ body }</Fragment>
	}
}

export default connect(state => ({ state: state.message.state }))(Contact)
