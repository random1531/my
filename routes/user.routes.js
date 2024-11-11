const router = require('express').Router();
const UserControllers = require('../controller/user.controllers');


router.post('/register', UserControllers.register);
router.post('/login', UserControllers.login);


module.exports = router;

