const {createUser, authenticateUser} = require('./user');

function routes(app, db, web3){
    app.post('/register', (req,res)=>{
        createUser(db, req.body.email, web3).then(response => {
            res.status(200).json(response);
        }, err =>{
            res.status(400).json(response);
        })
    })

    app.post('/login', (req,res) => {
        authenticateUser(db, req.body.email, req.body.password).then(response =>{
            res.status(200).json({"status":"success","user":response})
        }, err =>{
            res.status(400).json(err);
        })
    });
}
module.exports = routes
