
const {validationResult} = require('express-validator');

/**
 * @desc check the received info from client validation by defined
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
const runValidation = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({ error: errors.array()[0].msg });
	}
	next();
}

module.exports = {runValidation}
