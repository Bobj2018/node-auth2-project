const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted_middleware');

router.get('/', restricted, (req, res) => {
	const { department } = req.decodedJwt;
	Users.findByDepartment(department)
		.then((users) => {
			res.json(users);
		})
		.catch((err) => res.send(err));
});

module.exports = router;
