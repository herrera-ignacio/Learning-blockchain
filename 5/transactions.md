# Transactions

## Blocks & Transactions

> To attain a fully fledged cryptocurrency, the data in our blockchain must be _transactions_.

* Each _transaction_ transfers ownership of coins from one private key to another.
* Transactions are collected in each _block_ and _mined_, growing the blockchain.
  * The older the block is, the more surety it has - it's more likely to be part of the de facto blockchain.
* At any giving time, _miners_ are busy mining slightly different blocks containing different transactions - it's a race to find a block.
* When a minder finds a block, they broadcast it, and the rest of the miners drop their current blocks (they've lost the race) and move on to the next one.
  * These "dropped" blocks are usually called _orphaned blocks_.

## The role of a miner

The role of a miner is to generate new coins by finding an appropriate hash for a block.

While mining, a miner collects incoming transactions in a pool waiting to be included in the subsequent block.

> The transaction pool is known as the _mempool_ in Bitcoin.

If there are too many transactions to fill a block, then a miner picks the ones with the highest fees to increase profits.

> During the 2017 cryptocurrency boom, the price of Bitcoin transactions exceeded $40 because of how many transactions were backed up.

Topics of scaling cryptocurrencies often include this transaction pool and transaction fees.

> In Bitcoin, the limit per block is 1 megabyte worth, which is on average ~1700 transactions.
