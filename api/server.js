const express= require('express')
const app =express()
const routes = require('./routes')
const Web3 = require('web3');
const mongodb = require('mongodb').MongoClient
const contract = require('truffle-contract');
app.use(express.json())

const connectString = "mongodb+srv://admin:admin@cluster0.mb8wy.mongodb.net/inspireDB?retryWrites=true&w=majority"

mongodb.connect(connectString,{ useUnifiedTopology: true },(err,client)=>{
    console.log("HELLLO");
    console.log(err);
    const db = client.db('Cluster0')
    //home
    routes(app,db)
    app.listen(process.env.PORT || 8082, () => {
        console.log('listening on port 8082');
     })
})