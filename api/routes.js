const {createUser, authenticateUser} = require('./user');
const {getAllChallenges} = require('./challenge');
const axios = require('axios');
const { response } = require('express');

function routes(app, db, web3){
    app.post('/register', (req,res)=>{
        createUser(db, req.body.email, web3).then(response => {
            res.status(200).json(response);
        }, err =>{
            res.status(400).json(response);
        })
    })

    app.post('/login', (req,res) => {
        authenticateUser(db, req.body.email, req.body.password).then(userRes =>{
            res.status(200).json({"status":"success","user":userRes})
        }, err =>{
            res.status(400).json(err);
        })
    });

    // body: username, region
    app.post('/connect-riot-account', (req,res) => {
        console.log("connect riot account");
        // riot api key
        const RIOT_API_KEY = "RGAPI-9f38c711-a332-4804-95b0-15d0a53e97ab";
        const region = req.body.region; // needs to be specifi (ex: na1)
        const username = req.body.username;
        
        axios.get('https://' + region + '.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + username + '?api_key=' + RIOT_API_KEY).then(riotRes =>{
            console.log("success")
            console.log(riotRes);
            res.status(200).json({"status":"success"})
        }, err =>{
            console.log("error");
            console.log(err);
            res.status(400).json(err);
        })
    })

    app.get('/active-challenges', (req,res) => {
        res.status(200).json(getAllChallenges());
    })

    app.post('/verify-challenges', (req,res) => {

    })
}
module.exports = routes
