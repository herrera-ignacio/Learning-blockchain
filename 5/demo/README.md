# Transactional Node Demo

<!-- toc -->

- [Bitcoin & Push Networks](#bitcoin--push-networks)
- [Transaction data structure](#transaction-data-structure)
- [Transaction using digital signatures](#transaction-using-digital-signatures)
  * [Explanation](#explanation)

<!-- tocstop -->

## Bitcoin & Push Networks

Bitcoin is considered a _push_ network: instead of a node querying its peers for new transactions, a node _pushes_ a new transaction to all its peers when it receives one.

Loosely speaking, when a new node joins a network, it should create a _gossip_ effect whereby peers of peers learn about its presence and can reliably send it future transactions.

## Transaction data structure

A transaction has a simple data structure, containing:

1. Sender's public key.
2. Recipient's public key.
3. Amount to be transferred.
4. An advertised fee (think "tip", to incentive miners to include the transaction in their next block)

## Transaction using digital signatures

1. Create Transaction data structure.
2. Sender signs using its private key.
3. Sender broadcasts the transaction to the network.
4. Miners verify sender's signature, accept the fee, and include the transaction in their next block.

### Explanation

In order to receive coins, we need to generate a _wallet_ (i.e., a public-private key pair). To send coins to a recipient, a sender must create a transaction containing both his and recipient's public keys, and the amount to be sent. The transaction is then signed using sender's private key.

Any peers in the network can validate the transaction as authentic by inspecting sender's public key. If the transaction passes validation, then it will later be added to the blockchain when a miner includes it.
