const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteControllers');

module.exports = function() {

    //agrega nuevos pacientes via POST
    router.post('/pacientes',
        pacienteController.nuevoCliente
    );

    //obtiene todos los registros de pacientes en la bd
    router.get('/pacientes',
        pacienteController.obtenerPacientes
    );

    //obtiene un paciente en especifico
    router.get('/pacientes/:id',
        pacienteController.obtenerPaciente
    );

    return router;
}