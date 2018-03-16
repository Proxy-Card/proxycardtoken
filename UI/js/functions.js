window.addEventListener('load', function() {
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
        // Use Mist/MetaMask's provider
        web3 = new Web3(web3.currentProvider);
    } else {
        console.log('No web3? You should consider trying MetaMask!')
        // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"));
        web3.eth.defaultAccount = web3.eth.accounts[0];
    }
});

function getBalance (address) {
    return web3.eth.getBalance(address, function (error, result) {
        if (!error) {
            console.log(result.toNumber());
        } else {
            console.error(error);
        }
    })
}

function redeem(){

}