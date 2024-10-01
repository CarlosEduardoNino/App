const express = require('express');
const router = express.Router();
const laptopController = require('../controllers/laptopcontroller');

router.get('/', laptopController.getListarTodos);
router.get('/:id', laptopController.getListarPorId);
router.post('/', laptopController.postLaptop);
router.put('/:id', laptopController.putModificar);
router.put('/activate/:id', laptopController.putActivar);
router.put('/unactivate/:id', laptopController.putInactivar);
router.put('/qr/:id', laptopController.generarQR); 

module.exports = router;
