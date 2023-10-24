const sequenlize = require('sequelize');
const mysql = new sequenlize('bookingApp', 'root', 'Arti@123', {
    host: 'localhost',
    dialect: 'mysql'
})
module.exports = mysql;
