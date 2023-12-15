// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.19;

contract InsertWallet {
    address public owner;
    constructor(){
        owner = msg.sender;
    }
    address[] userWallets;

    event AddWallet(address indexed owner, address indexed walletAddress, uint256 insertTime);
    modifier onlyOwner(){
        require(msg.sender == owner, "AddWallet: Only authorised user can access");
        _;
    }
    function addWalletAddress(address _newAddress) onlyOwner external { 
        for(uint i = 0; i < userWallets.length; i++){
        require(_newAddress != userWallets[i], "AddWallet: Wallet address already exists in a list");
        }
       userWallets.push(_newAddress);
       emit AddWallet(owner, _newAddress, block.timestamp);
    }

    function isWalletListed(address _newAddress) external view returns(bool){
        for(uint i = 0; i < userWallets.length; i++){
            if(_newAddress == userWallets[i]){
                return true;
            }
        }
        return false;
    }
}