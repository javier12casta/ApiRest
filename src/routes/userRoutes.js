const User = require('../models/user');

module.exports = function (app) {

    app.get('/users', (req, res) => {
        User.getUsers((err, data) => {
            res.status(200).json(data);
        });
    });

    /*
    app.post('/users', (req, res) => {
        const userData = {
            id: null,
            rol: req.body.rol,
            estado: req.body.estado,
            created_at: null,
            update_at: null
        };

        User.insertUser(userData, (err, data) =>{
            console.log(data);
            if(data && data.insertId){
                res.json({
                    success: true,
                    msg: 'dato insertado',
                    data: data
                })
            }
            else{
                res.status(500).json({
                    success: false,
                    msg: 'error'
                })
            }
        })

    }); */
}