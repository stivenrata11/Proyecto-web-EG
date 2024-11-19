const express = require('express');
const router = express.Router();
const facultadController = require('../controllers/FacultadController');

// Rutas para encuestas
router.get('/', facultadController.getAllFacultades);
router.post('/',facultadController.createFacultad);

module.exports = router;