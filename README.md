# Cryptozombies
- Created after the Solidity development tutorial:
https://cryptozombies.io/
- Great guide in the web3 implementation
https://medium.com/coinmonks/solidity-and-web3-js-141115b0f8c5

## Development environment:

- Ganache http://truffleframework.com/ganache/
- node & npm https://nodejs.org/en/ (version 8 or 9 is fine)
- Truffle from the command line: `npm install -g truffle`
- Web3: `npm install -g web3`
- Local webserver: `npm install -g http-server`
- On windows 10 if you get a MSBUILD error you have to install: `npm install -g windows-build-tools`

## Deploying the contract
- Deploy to local ganache blockchain: `truffle migrate --network development`

## Testing frontend
- Set deployed contract address on line 20 of `index.html`
- launch web-server with command: `http-server`
- Visit url with browser having metamask installed, unlocked and connected to it to network of choice
- Using console:
-- Create zombie: `createRandomZombie("SOME NAME")`
-- Display zombies: `getZombiesByOwner(userAccount).then(displayZombies)`
-- Find zombie id: `getZombiesByOwner(userAccount)`
-- Transfer zombie: `transferZombie('0x...', 1)`