# Introduction to Proof of Work

<!-- toc -->

- [POW](#pow)
- [Trivial example](#trivial-example)
- [Mining difficulty](#mining-difficulty)

<!-- tocstop -->

## POW

A proof-of-work algorithm describes the method in which new blocks are added to a blockchain. It allows you to prove that your computer did some work.

In a decentralized network where everyone has an equal say, we need a way of agreeing on things; things like whether a transaction is fraudulent or if a blockchain is valid.

More technically, POW algorithms are **consensus mechanisms**, if you can prove that work was done, then you can show your proof to someone else who can easily verify that it is true.

> Bitcoin and Ethereum (at present) both use POW algorithms. Bitcoin's biggest breakthrough was the __leveraging of proofs of work to form consensus__ among peers on a network who don't know each other, and most importantly, don't trust each other.

## Trivial example

Consider the simple example:

Discover a number which satisfies a small mathematical problem: the number must be difficult to find but easy to verify, computationally speaking, by anoyone on the network.

This is the core idea behind proof or work: __difficult to do, but easy to verify__.

## Mining difficulty

Say we use an algorithm that decides whether a block is valid or not if it's hash starts with 4 leading zeroes.

To adjust the difficulty of our mining, we could modify the number of required leading zeroes.

> In Bitcoin, the difficulty is adjusted every 2016 blocks by consensus on the network.
