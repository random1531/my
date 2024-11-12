const router = require('express').Router();
const UserControllers = require('../controller/user.controllers');
const verifyToken = require('../middleware/tokenVerify');

router.post('/register', UserControllers.register);
router.post('/login', UserControllers.login);
router.patch('/update/:id', verifyToken , UserControllers.update);


module.exports = router;

