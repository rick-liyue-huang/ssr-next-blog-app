const {check} = require('express-validator');

// used to define the received req.body information validation
const categoryCreatorValidator = [
	check('name')
		.not()
		.isEmpty()
		.withMessage('Name is required')
];

module.exports = {categoryCreatorValidator}
