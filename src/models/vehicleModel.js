const {model, Schema} = require("mongoose");

const vehicleSchema = new Schema({
    placa: {
        type: "string",
        unique: true,
        required: true,
        minlength: 6,
        maxlength: 6 
    },
    color: {
        type: "string",
        required: true
    },
    fabricante: {
        type: "string",
        required: true
    },
    modelo: {
        type: "string",
        required: true
    }
});

const vehicleModel = model("vehiculo", vehicleSchema);

exports.vehicleModel = vehicleModel;