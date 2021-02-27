const express= require('express')
const app =express()
const routes = require('./routes')
const Web3 = require('web3');
const MongoClient = require('mongodb').MongoClient;
const contract = require('truffle-contract');
app.use(express.json())

const uri = "mongodb+srv://admin:admin@cluster0.mb8wy.mongodb.net/InspireDevDB?retryWrites=true&w=majority";
const blockchainNetwork = "https://ropsten.infura.io/v3/85eec71dc7e843f584d3ce2169f6bc0a:8545";

MongoClient.connect(uri,{ useUnifiedTopology: true },(err,client)=>{
    const db = client.db("Cluster0");
    const web3 = new Web3(new Web3.providers.HttpProvider(blockchainNetwork))
    routes(app, db, web3)
    app.listen(process.env.PORT || 8082, () => {
        console.log('listening on port 8082');
    })
});
