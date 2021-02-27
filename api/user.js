const NodeRSA = require('node-rsa');
const key = new NodeRSA({b: 512});

function createUser(db, email, web3) {
    return new Promise((resolve, reject) => {
        if(email){
            db.collection('users').findOne({email}, (err, doc)=>{
                if(doc) {
                    reject({"status":"Failed", "reason":"Already registered"})
                } else {
                    const newWallet = web3.eth.accounts.create();
                    const password = generatePassword();
                    db.collection('users').insertOne({
                        email: email,
                        password: key.encrypt(password),
                        ethAddress: newWallet.address,
                        privateKey: key.encrypt(newWallet.privateKey, 'base64')
                    })
                    resolve({"status": "success", "password": password})
                }
            })
        }else{
            reject({"status":"Failed", "reason":"wrong input"})
        }
    });
}

function generatePassword() {
    const length = 8,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%";
    var password = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }
    return password;
}

module.exports = {createUser}