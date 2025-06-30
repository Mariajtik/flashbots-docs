## What is a Searcher?

A **Searcher** is a key participant in the Flashbots ecosystem. Their job is to identify profitable opportunities on the blockchain (like arbitrage, liquidations, or sandwich attacks) and group transactions into **bundles**.

These bundles are then submitted to the **builder** or **relay**, aiming to be included in upcoming blocks — often with specific ordering or timing.

### Responsibilities of a Searcher

- Monitor the mempool and blockchain state in real time
- Detect MEV opportunities
- Create bundles with precise gas and ordering control
- Submit bundles via the Flashbots relay

### Example Use Cases

- **Arbitrage** between DEXs (e.g., Uniswap vs. Sushiswap)
- **Liquidations** on lending protocols (e.g., Aave, Compound)
- **Front-running** or **back-running** trades

### Practical Example

Below is a simplified script showing how to submit a basic Flashbots bundle using `ethers.js` and `@flashbots/ethers-provider-bundle`.