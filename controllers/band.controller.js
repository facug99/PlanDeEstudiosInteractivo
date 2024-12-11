"use strict";
const BandModel = require('../models/band.model');

exports.getAllBands = async (req, res) => {
    const bands = await BandModel.getAllBands();
    res.send(bands);
}
exports.getBand = async (req, res) => {
    let id = req.params.id;
    let band = await BandModel.getBandByID(id);
    if (band.length > 0) {
        res.send(band);
    } else {
        res.status(404).send(`La banda con el ${id}  no existe.`);
    }
}
exports.deleteBand = async (req, res) => {
    let id = req.params.id;
    let deletedBand = await BandModel.deleteBand(id);
    if (deletedBand.affectedRows > 0) {
        res.send(`La banda ${id} fue eliminada con exito`);
    } else {
        res.status(404).send(`La banda con el ${id}  no existe.`);
    }
}