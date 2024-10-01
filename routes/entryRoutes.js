const express = require('express');
const router = express.Router();
const entryController = require('../controllers/entrycontroller');

router.post('/', entryController.postEntry);
router.get('/holder/:id', entryController.getListarPorHolder);
router.get('/dia', entryController.getListarPorDia);
router.get('/fechas', entryController.getListarEntreFechas);
router.put('/salida/:id', entryController.putRegistrarSalida);

module.exports = router;
