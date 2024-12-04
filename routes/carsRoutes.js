const express = require("express")
const carsRouter = express.Router()
const {
	getAllCars,
	getOneCarById,
	createNewCar,
	deleteCarById,
} = require("../controllers/carsController")

carsRouter.get("/test", (_req, res) => {
	res.json({
		msg: "cars route test ok !!",
	})
})

// GET return a list of all cars
carsRouter.get("/", getAllCars)

// GET one car based on its id
carsRouter.get("/:id", getOneCarById)

// POST add a new car
carsRouter.post("/", createNewCar)

// PUT update a car based on the param id
carsRouter.put("/:id", (req, res) => {
	const { id } = req.params
	console.log(id)

	// Lancez la requête pour la mise à jour.
})

// DELETE delete a car based on the param id
carsRouter.delete("/:id", deleteCarById)

module.exports = carsRouter
