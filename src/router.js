//@flow
import express, { Router } from "express"
import Inferno from "inferno"
import InfernoServer from 'inferno-server'
import { ServerStyleSheet } from 'styled-components'
import styled from "styled-components"
import App from "./app"
import path from "path"
import ejs from "ejs"
import indexFile from "raw-loader!./index.ejs"

const router = new Router

const sheet = new ServerStyleSheet()

const template = ejs.compile(indexFile)
const content = InfernoServer.renderToStaticMarkup(sheet.collectStyles(<App />))
const title = "Arwed Mett"
const style = sheet.getStyleTags()

const indexPage = template({
	content,
	title,
	style
})

router.get("/", (req, res, next) => {
	res.send(indexPage)
})

router.use(express.static(path.join(__dirname, "static")))

export default router
