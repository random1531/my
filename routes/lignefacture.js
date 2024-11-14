const router = require('express').Router();
const LignefactureControllers = require('../controller/lignefacture.controllers');
const verifyToken = require('../middleware/tokenVerify');

router.post('/create', verifyToken, LignefactureControllers.create);
router.get('/read', verifyToken, LignefactureControllers.read);
router.patch('/update/:id', verifyToken, LignefactureControllers.update);
router.delete('/delete/:id', verifyToken, LignefactureControllers.delete);
router.get('/read/:id', verifyToken, LignefactureControllers.readById);
