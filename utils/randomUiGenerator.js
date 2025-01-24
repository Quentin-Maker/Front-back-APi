const { v4: uuidv4 } = require("uuid")

exports.generateRandomNumber = () => {
	const uuid = uuidv4()
	const randomInt = parseInt(uuid.replace(/-/g, "").substring(0, 8), 16)
	const randomNumber = 100 + (randomInt % 9010)
	return randomNumber
}