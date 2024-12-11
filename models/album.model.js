"use strict";
// Get the client
const mysql = require('mysql2/promise');

const getConnection = async () => {
    return await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'web2_tpe',
    });

}
exports.getAllAlbums = async () => {
    const connection = await getConnection();
    try {
        const [results] = await connection.query(
            'SELECT * FROM `albums`'
        );
        return results;
    } catch (error) {
        console.log(error);
    }
}
exports.getAlbumByID = async (id) => {
    const connection = await getConnection();
    try {
        const [result] = await connection.query(
            'SELECT * FROM `albums` WHERE id =?', [id]
        );
        return result;
    } catch (error) {
        console.log(error);
    }
}
exports.deleteAlbum = async (id) => {
    const connection = await getConnection();
    try {
        const [result] = await connection.query(
            'DELETE FROM `albums` WHERE id =?', [id]
        );
        return result;
    } catch (error) {
        console.log(error);
    }
}