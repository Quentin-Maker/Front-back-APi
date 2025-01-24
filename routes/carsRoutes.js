const express = require("express")
const carsRouter = express.Router()
const {
	getAllCars,
	getOneCarById,
	createNewCar,
	deleteCarById,
	updateCarById,
} = require("../controllers/carsController")
const { carValidation } = require("../middleware/carValidation")

carsRouter.get("/test", (_req, res) => {
	res.json({
		msg: "cars route test ok !!",
	})
})

// request GET to return a list of all cars
carsRouter.get("/", getAllCars)

// request GET for one car based on its id
carsRouter.get("/:id", getOneCarById)

// request POST to add a new car
carsRouter.post("/", createNewCar)

// request PUT to update a car based on the param id
carsRouter.put("/:id", updateCarById)

// request DELETE to delete a car based on the param id
carsRouter.delete("/:id", deleteCarById)

module.exports = carsRouter