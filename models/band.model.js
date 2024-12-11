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
exports.getAllBands = async () => {
    const connection = await getConnection();
    try {
        const [results] = await connection.query(
            'SELECT * FROM `bands`'
        );
        return results;
    } catch (error) {
        console.log(error);
    }
}
exports.getBandByID = async (id) => {
    const connection = await getConnection();
    try {
        const [result] = await connection.query(
            'SELECT * FROM `bands` WHERE id =?', [id]
        );
        return result;
    } catch (error) {
        console.log(error);
    }
}
exports.deleteBand = async (id) => {
    const connection = await getConnection();
    try {
        const [result] = await connection.query(
            'DELETE FROM `bands` WHERE id =?', [id]
        );
        return result;
    } catch (error) {
        console.log(error);
    }
}