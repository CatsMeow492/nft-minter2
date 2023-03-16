import { useState } from "react";
import { nftMinterContract } from "./biconomy";

function MintNFT() {
  const [tokenURI, setTokenURI] = useState("");
  const [status, setStatus] = useState("");

  const mint = async () => {
    setStatus("Minting...");
    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      const account = accounts[0];

      const result = await nftMinterContract.methods.mintNFT(account, tokenURI).send({ from: account });
      setStatus(`Minted successfully! Token ID: ${result.events.Transfer.returnValues.tokenId}`);
    } catch (err) {
      console.error(err);
      setStatus("Minting failed");
    }
  };

  return (
    <div>
      <h2>Mint NFT</h2>
      <input
        type="text"
        value={tokenURI}
        onChange={(e) => setTokenURI(e.target.value)}
        placeholder="Token URI"
      />
      <button onClick={mint}>Mint</button>
      <p>{status}</p>
    </div>
  );
}

export default MintNFT;
