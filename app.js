const Tx = require('ethereumjs-tx').Transaction;
const Web3 = require('web3');
const web3 = new Web3('https://ropsten.infura.io/v3/8804c9fca4684fd58cc9c20a833e480b');
const account1 = '0xEd86D2C87a42Bf3031aBB85b210a9946b82E8B94';
const account2 = '0xbF6AaD669Dc721196b1BdA011d524c2374D6aB3b';
const privateKey1 = Buffer.from('D830C97E9A0E0A56EA85D47359C8EC1A1281A2B24B8E052A9B8943CEFE53F043','hex');
const privateKey2 = Buffer.from('8E03F8CBD1EFC5D51A9319AE3BC56F585A1C0FEBCA2DABCFAE1BEB46C7B94280','hex');

web3.eth.getBalance(account1, (err, result) => {
    console.log('result: ' + result);
})
console.log('connect');
//getTransactionCount
web3.eth.getTransactionCount(account1, (err, txCount)=> {
    console.log(txCount);
    // build the transaction
    const txObject = {
        nonce: web3.utils.toHex(txCount),// safeguard that prevents double spend problem
        to: account2,
        value: web3.utils.toHex(web3.utils.toWei('1', 'ether')),
        gasLimit: web3.utils.toHex(21000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
    }
    const tx = new Tx(txObject,{'chain':'ropsten'})
    // Sign the transaction
    tx.sign(privateKey1);
    console.log(tx)
    const serializedTx = tx.serialize();
    
    //Broadcash the transaction
    web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('receipt', (err, result)=>{
        console.log(result);
    })
});

