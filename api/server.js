const express= require('express')
const app =express()
const routes = require('./routes')
const Web3 = require('web3');
const MongoClient = require('mongodb').MongoClient;
const contract = require('truffle-contract');
app.use(express.json())

const uri = "mongodb+srv://admin:admin@cluster0.mb8wy.mongodb.net/InspireDevDB?retryWrites=true&w=majority";
//const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// client.connect(err => {
//     const db = client.db("Cluster0");
//     routes(app,db)
//     app.listen(process.env.PORT || 8082, () => {
//         console.log('listening on port 8082');
//     })
// });

MongoClient.connect(uri,{ useUnifiedTopology: true },(err,client)=>{
    const db = client.db("Cluster0");
    const quotesCollection = db.collection('users');
    routes(app,db)
    app.listen(process.env.PORT || 8082, () => {
        console.log('listening on port 8082');
    })
});
