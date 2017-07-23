//@flow
import { Router } from "express"
import path from "path"

const router = new Router

router.get("/runtime.bundle.js", (req, res) => {
	res.sendFile(path.resolve("./runtime.bundle.js"))
})

router.get("/", (req, res) => {
	res.sendFile(path.resolve("./index.html"))
})

export default router
