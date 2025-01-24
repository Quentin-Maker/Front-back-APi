const db = require("../database")

exports.getAllCars = (_req, res) => {
	db.all("SELECT * FROM cars", [], (err, rows) => {
		if (err) {
			res.status(500).json({ error: err.message })
		} else {
			res.json(rows)
		}
	})
}

exports.getOneCarById = (req, res) => {
	const { id } = req.params
	db.get("SELECT * FROM cars WHERE id = ?", [parseInt(id)], (err, rows) => {
		if (err) {
			return res.status(500).json({ error: err.message })
		} else {
			if (!rows) {
				return res
					.status(404)
					.json({ error: "car not found with this ID: " + id })
			} else {
				return res.status(200).json(rows)
			}
		}
	})
}

// POST create a new car
exports.createNewCar = (req, res) => {
	const { carName, carYear, carImage } = req.body

	
	db.run(
		"INSERT INTO cars (carName,carYear, carImage ) VALUES (?, ?, ?)",
		[carName, carYear, carImage],
		function (err) {
			if (err) {
				res.status(500).json({ error: err.message })
			} else {
				res.status(201).json({ id: this.lastID, carName })
			}
		}
	)
}

exports.updateCarById = (req, res) => {
	const { id } = req.params
	console.log(id)

	// Lancez la requête pour la mise à jour.
	res.status(200).json({ message: "Car updated !" })
}


exports.deleteCarById = (req, res) => {
	const { id } = req.params

	db.run("DELETE FROM cars WHERE id = ?", [id], function (err) {
		if (err) {
			res.status(500).json({ error: err.message })
		} else if (this.changes === 0) {
			
			res.status(404).json({ message: "Problem, car not found" })
		} else {
			
			res.status(200).json({ message: "Problem, car deleted !" })
		}
	})
}