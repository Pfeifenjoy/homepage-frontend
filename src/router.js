//@flow
import express, { Router } from "express"
import type { $Request, $Response } from "express"
import React from "react"
import { renderToString } from "react-dom/server"
import { ServerStyleSheet } from "styled-components"
import App from "./app"
import path from "path"
import ejs from "ejs"
import indexFile from "raw-loader!./index.ejs"
import fontawesome from "@fortawesome/fontawesome"

const router = new Router

const sheet = new ServerStyleSheet()

const template = ejs.compile(indexFile)
const content = renderToString(sheet.collectStyles(<App />))
const title = "Arwed Mett"
const style = sheet.getStyleTags()
const fontawesomecss = fontawesome.dom.css()

const indexPage = template({
	content,
	title,
	style,
	fontawesomecss
})

router.get("/", (req: $Request, res: $Response) => {
	res.send(indexPage)
})

router.use(express.static(path.join(__dirname, "static"), {
	maxAge: 900000000
}))

export default router
