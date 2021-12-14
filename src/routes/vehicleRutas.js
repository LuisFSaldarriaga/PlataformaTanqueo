const {Router} = require("express");
const vehicleRutas = Router();
const vehicle = require("../models/vehicleModel");

//API GUARDAR NUEVO VEHICULO
vehicleRutas.post("/nuevoVehiculo", function async (req, res){
    const {placa, color, fabricante, modelo} = req.body; //e.g {placa: "XXX000", color: "Rojo", fabricante: "Renault", modelo: "Logan 2018"}
    const newVehicle = new vehicle({placa, color, fabricante, modelo});

    await newVehicle.save(function (error){
        if (error){
            res.status(500).send({status:"error", msg:"ERROR: Vehículo no guardado", error});
            return false;
        } 
        res.status(200).send({status:"ok", msg:"Vehículo guardado"});
        //res.redirect('/MisVehiculos');
    })
});

//API CONSULTAR VEHICULO
vehicleRutas.get("/MisVehiculos", async function(req, res) {
    const vehicles = await vehicle.find() //pasar parametro id de usuario
    res.send(vehicles);
})

//API EDITAR VEHICULO
vehicleRutas.post("/MisVehiculos/edit/", async function (req, res) {
    
})


//API ELIMINAR VEHICULO
vehicleRutas.delete()


exports.vehicleRutas = vehicleRutas;