const express= require('express')
const app =express()
const routes = require('./routes')
const Web3 = require('web3');
const MongoClient = require('mongodb').MongoClient;
app.use(express.json())

// test
const challenges = require('./challenge');

const uri = "mongodb+srv://admin:" + process.env.mongo_db_password + "@cluster0.mb8wy.mongodb.net/InspireDevDB?retryWrites=true&w=majority";
const blockchainNetwork = "https://ropsten.infura.io/v3/" + process.env.infura_project_id;

MongoClient.connect(uri,{ useUnifiedTopology: true },(err,client)=>{
    const db = client.db("Cluster0");
    const web3 = new Web3(new Web3.providers.HttpProvider(blockchainNetwork))
    routes(app, db, web3)

    challenges.verifyChallenge();

    app.listen(process.env.PORT || 8082, () => {
        console.log('listening on port 8082');
    })
});


