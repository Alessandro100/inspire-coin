const { ABI } = require('./tokenABI');
const Tx = require('ethereumjs-tx').Transaction;

const INSPRTOKENADDRESS = '0x578D9E8501E6C671e52Eb7E2B9724E3510d90300';
// The minimum ABI to get ERC20 Token balance
const minABI = [
  // balanceOf
  {
    constant: true,
    inputs: [{ name: '_owner', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', type: 'uint256' }],
    type: 'function',
  },
  // decimals
  {
    constant: true,
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', type: 'uint8' }],
    type: 'function',
  },
];


function getBalance(web3, walletAddress) {
  return new Promise((resolve, reject) => {
    const tokenInst = new web3.eth.Contract(ABI, INSPRTOKENADDRESS);
    tokenInst.methods
      .balanceOf(walletAddress)
      .call()
      .then(
        (balence) => {
          console.log('Balance: ', balence);
          console.log(balence);
          resolve(balence);
        },
        (err) => {
          console.log('error', err);
          reject(err);
        }
      );
  });
}

/*
Example
const majorityHolderAddress = '0xf9E2E731De7EC633615bFf32e9dF972c51D81edE';
const testUserAddress = '0xc20aCbe36E6104ff2bEb0FBd5F7798734F1bc1c3';
transferCoin(web3,majorityHolderAddress, testUserAddress, 1000);
*/
async function transferCoin(web3, fromAddress, toAddress, amount) {
  let count = 0;
  await web3.eth.getTransactionCount(fromAddress).then(v => {
    count = v;
  });
  
  const contract = await new web3.eth.Contract(ABI, INSPRTOKENADDRESS);
  const fromPrivateKey = process.env.inspire_coin_private_key;
  const fromPrivateKeyFormatted = Buffer.from(fromPrivateKey,'hex');

  const rawTransaction = {
    from: fromAddress,
    gasPrice: web3.utils.toHex(2 * 1e9),
    gasLimit: web3.utils.toHex(210000),
    to: INSPRTOKENADDRESS, //address of the contract
    value: '0x0', // don't want to send eth
    data: await contract.methods.transfer(toAddress, amount).encodeABI(),
    nonce: web3.utils.toHex(count),
  };

  const transaction = await new Tx(rawTransaction, {chain:'ropsten'});
  await transaction.sign(fromPrivateKeyFormatted)
  const result = await web3.eth.sendSignedTransaction(
    '0x' + await transaction.serialize().toString('hex')
  );

  return result
}

module.exports = { getBalance, transferCoin };
