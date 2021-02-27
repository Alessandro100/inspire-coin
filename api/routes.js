const {createUser} = require('./user');

const shortid = require('shortid')
function routes(app, db, web3){
    app.post('/register', (req,res)=>{
        createUser(db, req.body.email, web3).then(response => {
            console.log("whats up");
            console.log(response);
            res.status(200).json(response);
        }, err =>{
            res.status(400).json(response);
        })
    })

    app.post('/login', (req,res)=>{
        let email = req.body.email
        if(email){
            db.collection('users').findOne({email}, (err, doc)=>{
                if(doc){
                    res.json({"status":"success","id":doc.id})
                }else{
                    res.status(400).json({"status":"Failed", "reason":"Not recognised"})
                }
            })
        }else{
            res.status(400).json({"status":"Failed", "reason":"wrong input"})
        }
    });
}
module.exports = routes
