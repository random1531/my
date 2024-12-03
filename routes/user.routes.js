const router = require('express').Router();
const UserControllers = require('../controller/user.controllers');
const verifyToken = require('../middleware/tokenVerify');

router.post('/register', UserControllers.register);
router.post('/login', UserControllers.login);
router.patch('/update/:id', verifyToken , UserControllers.update);
router.delete('/delete/:id', verifyToken , UserControllers.delete);
router.get('/get/:id', verifyToken , UserControllers.get);


module.exports = router;

