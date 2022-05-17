# Wallets on the Blockchain

<!-- toc -->

- [Bitcoin: UTXO](#bitcoin-utxo)
- [Ethereum: account-based model](#ethereum-account-based-model)

<!-- tocstop -->

## Bitcoin: UTXO

Bitcoin system is called __UTXO (Unspent Transaction Outputs)__, an elegant data structure for modeling transactions.

It doesn't have the notion of an _account_; instead, it's a system that closely resembles the way cash flows in and out of a physical wallet.

## Ethereum: account-based model

Unlike Bitcoin, Ethereum is an __account-based model__.

This means that each "user" on the blockchain would have an account.

Your Ethereum _address_ is just your public key. Your private key is stored somewhere safe, either in some sort of software or on a hardware wallet.

For someone to send you monet over the Ethereum blockchain, they just need to know your public key. But only you can access that money because only you hold the private key.
