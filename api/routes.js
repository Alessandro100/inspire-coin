const shortid = require('shortid')
function routes(app, db){
    app.post('/register', (req,res)=>{
        let email = req.body.email
        let idd = shortid.generate()
        if(email){
            db.collection('users').findOne({email}, (err, doc)=>{
                if(doc){
                    res.status(400).json({"status":"Failed", "reason":"Already registered"})
                }else{
                    db.collection('users').insertOne({email})
                    res.json({"status":"success","id":idd})
                }
            })
        }else{
            res.status(400).json({"status":"Failed", "reason":"wrong input"})
        }
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
