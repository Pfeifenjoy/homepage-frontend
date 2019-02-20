//@flow
import express from "express"
import router from "./router"

async function launch() {
	const app = express()

	app.use(router)

	app.listen(5000)
}

launch()
