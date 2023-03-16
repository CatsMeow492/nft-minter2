import Web3 from "web3";
import Biconomy from "@biconomy/mexa";
import abi from "./NFTMinter.json";

const biconomyAPIKey = "QtvnhyABT.0bd83c05-1129-4f73-b387-3fa867f0ef5b";

const contractABI = abi;
console.log("ABI", contractABI);

const web3 = new Web3(window.ethereum);

const biconomy = new Biconomy(window.ethereum, { apiKey: biconomyAPIKey, debug: true });
const biconomyWeb3 = new Web3(biconomy);

export const nftMinterContractAddress = "0xDa58E1a54D739846F84630142E632e14150eAAFa"; // Replace with your deployed NFTMinter contract address
export const nftMinterContract = new biconomyWeb3.eth.Contract(contractABI, nftMinterContractAddress);

// Helper function to extract ABI from contract artifacts
// function extract_abi(contractName) {
//     const fs = require('fs');
//     const path = require('path');

//     const contractArtifactPath = path.join(__dirname, `artifacts/contracts/${contractName}.sol/${contractName}.json`);
//     const contractArtifact = JSON.parse(fs.readFileSync(contractArtifactPath, 'utf8'));
//     return contractArtifact.abi;
// }

