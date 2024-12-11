"use strict";
const AlbumModel = require('../models/album.model');

exports.getAllAlbums = async (req, res) => {
    const albums = await AlbumModel.getAllAlbums();
    res.send(albums);
}
exports.getAlbum = async (req, res) => {
    let id = req.params.id;
    let album = await AlbumModel.getAlbumByID(id);
    if (album.length > 0) {
        res.send(album);
    } else {
        res.status(404).send(`El album con el ${id}  no existe.`);
    }
}
exports.deleteAlbum = async (req, res) => {
    let id = req.params.id;
    let deletedAlbum = await AlbumModel.deleteAlbum(id);
    if (deletedAlbum.affectedRows > 0) {
        res.send(`El album ${id} fue eliminado con exito`);
    } else {
        res.status(404).send(`El album con el ${id}  no existe.`);
    }
}