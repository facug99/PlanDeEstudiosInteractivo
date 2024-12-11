"use strict";
const albumController = require('./controllers/album.controller');
const bandController = require('./controllers/band.controller');
const express = require('express');
const app = express();

const port = 3000;


app.get('/', (req, res) => {
    res.send('');
});

//route album
app.get('/api/albums', albumController.getAllAlbums);
app.get('/api/albums/:id', albumController.getAlbum);
app.delete('/api/albums/:id', albumController.deleteAlbum);
//route band
app.get('/api/bands', bandController.getAllBands);
app.get('/api/bands/:id', bandController.getBand);
app.delete('/api/bands/:id', bandController.deleteBand);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});