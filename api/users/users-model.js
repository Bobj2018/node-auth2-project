const db = require('../../database/db_config');

module.exports = {
	add,
	find,
	findBy,
	findById,
	findByDepartment,
};

function find() {
	return db('users').select('id', 'username', 'password');
}

function findBy(filter) {
	return db('users').where(filter);
}

function findByDepartment(department) {
	return db('users').where({ department });
}

async function add(user) {
	const [id] = await db('users').insert(user);

	return findById(id);
}

function findById(id) {
	return db('users').where({ id }).first();
}
