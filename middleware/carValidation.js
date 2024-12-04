exports.carValidation = (req, res, next) => {
	const message = "hello from middleware"
	res.locals.msg = message

	next()
}
