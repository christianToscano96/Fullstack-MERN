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

/**Obtiene todos los pacientes */
exports.obtenerPacientes = async (req, res, next) => {
    try {
        const pacientes = await Paciente.find({});
        res.json(pacientes);
    } catch (error) {
        console.log(error);
        next();
    }
}

//obtiene  un paciente en especifico por su ID
exports.obtenerPaciente = async (req, res, next) => {
    try {
        const paciente = await Paciente.findById(req.params.id);
        res.json(paciente);
    } catch (error) {
        console.log(error);
        next();
    }
}

//actualiza un registro por su id
exports.actualizarPaciente = async (req, res, next) => {
    try {
        const paciente = await Paciente.findByIdAndUpdate({_id : req.params.id}, req.body, {
            new: true
        });
        res.json(paciente);
    } catch (error) {
        console.log(error);
        next();
    }
}

//Eliminar un registro por su id
exports.eliminarPaciente = async (req, res, next) => {
    try {
        await Paciente.findByIdAndDelete({_id : req.params.id});
        res.json({mensaje: 'El paciente fue eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
}