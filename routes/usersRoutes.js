const express = require("express")
const usersRouter = express.Router()
const {
	createNewCar,
	deleteCarById,
	updateCarById,
} = require("../controllers/carsController")
const { carValidation } = require("../middleware/carValidation")
const {
	getAllUsers,
	getOneUserById,
} = require("../controllers/usersController")

usersRouter.get("/test", (_req, res) => {
	res.json({
		msg: "users route test ok !!",
	})
})

// GET return a list of all users
usersRouter.get("/", getAllUsers)

// GET one car based on its id
usersRouter.get("/:id", getOneUserById)

// POST add a new user (sign up)
usersRouter.post("/", createNewCar)

// PUT update a car based on the param id
usersRouter.put("/:id", updateCarById)

// DELETE delete a car based on the param id
usersRouter.delete("/:id", deleteCarById)

module.exports = usersRouter
