const ethers = require('ethers');
const walletABI = require('./insertWallet.json');
require('dotenv').config();

async function main(){
    const contractAddress = "0xCcD2f8423FE9e313bA8aD6dF7E82bC31C3CfB212";
    const provider = new ethers.WebSocketProvider(process.env.ALCHEMY_WEBSOCKET);
    const contract = new ethers.Contract(contractAddress, walletABI, provider);

    contract.on("AddWallet", (owner, walletAddress, insertTime)=>{
        try {
            console.log("start event listner")
            let getEvent = {
                owner: owner,
                walletAddress: walletAddress,
                insertTime: insertTime,

            }
            console.table([getEvent]);
        } catch (error) {
            console.log(error);
        } 
    })
}

main();