const express = require("express")
const usersRouter = express.Router()
const {
	getAllCars,
	getOneCarById,
	createNewCar,
	deleteCarById,
	updateCarById,
} = require("../controllers/carsController")
const { carValidation } = require("../middleware/carValidation")

usersRouter.get("/test", (_req, res) => {
	res.json({
		msg: "users route test ok !!",
	})
})

// GET return a list of all cars
usersRouter.get("/", getAllCars)

// GET one car based on its id
usersRouter.get("/:id", getOneCarById)

// POST add a new car
usersRouter.post("/", createNewCar)

// PUT update a car based on the param id
usersRouter.put("/:id", updateCarById)

// DELETE delete a car based on the param id
usersRouter.delete("/:id", deleteCarById)

module.exports = usersRouter
