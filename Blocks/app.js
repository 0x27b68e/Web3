const Web3 = require('web3');
const web3 = new Web3('https://mainnet.infura.io/v3/8804c9fca4684fd58cc9c20a833e480b');

/*web3.eth.getBlockNumber().then(console.log);*/ // or we can write
web3.eth.getBlockNumber().then((blockNumber)=>{
    console.log('current block number: ' + blockNumber);
});

/*web3.eth.getBlock('latest').then(console.log);*/
/*web3.eth.getBlock('latest').then((block)=>{
    console.log({
        blockDifficulty: block.difficulty,
        blockNumber: block.number,
        blockHash: block.hash
    });
});*/

/*web3.eth.getBlock(8942855).then((block)=>{
    console.log({
        blockDifficulty: block.difficulty,
        blockNumber: block.number,
        blockHash: block.hash
    });
});*/

/*web3.eth.getBlock('0xe328b808628970afc1530e64d59563918e2f9d699eef28e8ca627710f9e2f3b2').then((block)=>{
    console.log({
        blockDifficulty: block.difficulty,
        blockNumber: block.number,
        blockHash: block.hash
    });
});*/

//get 10 latest block
/*web3.eth.getBlockNumber().then((blockNumber)=>{
    for(let i = 0; i < 10; i++) {
        web3.eth.getBlock(blockNumber - i).then((block)=>{
            console.log({
                blockDifficulty: block.difficulty,
                blockNumber: block.number,
                blockHash: block.hash
            });
        })
    }
});*/

//get block transaction count
web3.eth.getBlockTransactionCount(8943053).then((count)=>{
    console.log('total transaction in this block: ' + count);
})