const { checkApiKey } = require("./middleware/checkApiKey")
const carsRouter = require("./routes/carsRoutes")
const express = require("express")
const app = express()
const port = 3000
app.use(express.json())

// CORS
app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*")
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content, Accept, Content-Type, x-api-key"
	)
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
	next()
})

app.get("/", (req, res) => {
	res.json({
		msg: "hello from my cars API !!",
	})
})

// API KEY CHECK
app.use("/api/cars", checkApiKey, carsRouter)

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
