const router = require('express').Router();
const userController = require('../controllers/UserController');

//Users API
router.post(`/add-user`, userController.addUser);
router.get(`/users`, userController.fetchUsers);

module.exports = router;