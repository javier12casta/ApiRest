const mysql = require('mysql');

connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'BienestaSoft',
});

let userModel = {};

// Leer 
userModel.getUsers = (callback) => {
    if (connection) {
        connection.query ('SELECT * FROM RolPersonas ORDER BY idRolPersonas',
            (err, rows) => {
                if (err) {
                    throw err
                }
                else {
                    callback(null, rows)
                }
            })
    }
};
// Insertar

userModel.insertUser = (userData, callback => {
    if (connection){
        connection.query ('INSERT INTO RolPersonas SET ?', userData, 
        (err, rows) => {
            if (err) {
                throw err
            }
            else {
                callback(null, {
                    'Insertid': result.Insertid
                })
            }
        })
    }
});

module.exports = userModel;