const Paciente = require('../models/Paciente');


//cuando se crea un nuevo cliente
exports.nuevoCliente = async (req, res, next) => {
    //TODO: insertar en la base de datos
    //console.log(req.body);

    //crear objeto de paciente con daos de req.body
    const paciente = new Paciente(req.body);


    try {
       await  paciente.save();
       res.json({ mensaje: 'El cliente se agrego correctamente'});
    } catch (error) {
        console.log(error);
        next();
    }
}