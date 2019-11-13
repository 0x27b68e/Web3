const Tx = require('ethereumjs-tx').Transaction;
const Web3 = require('web3');
const web3 = new Web3('https://ropsten.infura.io/v3/8804c9fca4684fd58cc9c20a833e480b'); //Remote Procudure Call
const account1 = '0xEd86D2C87a42Bf3031aBB85b210a9946b82E8B94';
const privateKey1 = Buffer.from('D830C97E9A0E0A56EA85D47359C8EC1A1281A2B24B8E052A9B8943CEFE53F043','hex');

web3.eth.getTransactionCount(account1, (err, txCount)=> {
    // smart contract data
    const data = "608060405234801561001057600080fd5b5060008081905550600060018190555061010a8061002f6000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c80633307a982146041578063569c5f6d14606c578063ce29371b146088575b600080fd5b606a60048036036020811015605557600080fd5b810190808035906020019092919050505060b3565b005b607260bd565b6040518082815260200191505060405180910390f35b60b160048036036020811015609c57600080fd5b810190808035906020019092919050505060cb565b005b8060008190555050565b600060015460005401905090565b806001819055505056fea265627a7a72315820504d213d0f9c0c8ca39155a2a409378bc5fe219b95297d01cb84c2bc6882793a64736f6c634300050b0032"


    //create the transaction object
    const txObject = {
        nonce: web3.utils.toHex(txCount),
        // there are no 'to' property because we broadcast to the entire network not to specific recipient
        gasLimit: web3.utils.toHex(1000000), // cost much gas than send  ether back and forth
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
        data: data// byte code of the smart contract
    }

    const tx = new Tx(txObject,{'chain':'ropsten'})

    //sign the transaction with private key
    tx.sign(privateKey1);
    console.log(tx)
    const serializedTx = tx.serialize();
    //Broadcash the transaction
    web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('receipt', (err, txHash)=>{
        console.log(txHash); // use this hash to find the contract on Etherscan
    })
});