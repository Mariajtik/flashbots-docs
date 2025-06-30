import { ethers } from "ethers";
import {
  FlashbotsBundleProvider,
} from "@flashbots/ethers-provider-bundle";

async function main() {
  const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/YOUR_INFURA_KEY");

  const searcherWallet = new ethers.Wallet("YOUR_PRIVATE_KEY", provider);

  const flashbotsProvider = await FlashbotsBundleProvider.create(
    provider,
    searcherWallet,
    "https://relay.flashbots.net"
  );

  const tx = {
    to: "0x0000000000000000000000000000000000000000",
    value: ethers.utils.parseEther("0.001"),
    gasLimit: 21000,
    maxFeePerGas: ethers.utils.parseUnits("50", "gwei"),
    maxPriorityFeePerGas: ethers.utils.parseUnits("2", "gwei"),
  };

  const signedTx = await searcherWallet.signTransaction(tx);

  const blockNumber = await provider.getBlockNumber();
  const bundleSubmission = await flashbotsProvider.sendBundle(
    [
      {
        signedTransaction: signedTx,
      },
    ],
    blockNumber + 1
  );

  if ("error" in bundleSubmission) {
    console.error("Bundle submission error:", bundleSubmission.error.message);
    return;
  }

  console.log("Bundle sent successfully!");
}

main();