const sqlite3 = require("sqlite3").verbose()
require("dotenv").config()

// Open the database connection
const db = new sqlite3.Database(process.env.DB_FILE, (err) => {
	if (err) {
		console.error("Error opening database:", err.message)
	} else {
		console.log("Connected to the SQLite database.")

		// Create the items table if it doesn't exist
		db.run(
			`CREATE TABLE IF NOT EXISTS cars (
        id INTEGER PRIMARY KEY,
        carName TEXT NOT NULL,
        carYear NUMBER NOT NULL,
        carImage TEXT NOT NULL
      )`,
			(err) => {
				if (err) {
					console.error("Error creating table:", err.message)
				}
			}
		)
	}
})

module.exports = db
