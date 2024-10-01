const express = require('express');
const router = express.Router();
const holderController = require('../controllers/holdercontroller');

router.get('/', holderController.getListarTodos);
router.get('/:id', holderController.getListarPorId);
router.post('/', holderController.postHolder);
router.put('/:id', holderController.putModificar);
router.put('/activate/:id', holderController.putActivar);
router.put('/unactivate/:id', holderController.putInactivar);

module.exports = router;
