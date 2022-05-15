# Peer-to-Peer Networks (P2P)

<!-- toc -->

- [Groundwork for a Blockchain](#groundwork-for-a-blockchain)
- [Protocols](#protocols)
  * [About Bitcoin Protocol](#about-bitcoin-protocol)

<!-- tocstop -->

## Groundwork for a Blockchain

P2P networks are made possible by every client on the network collectively implementing the decided protocol.

It's helpful to first break our network into user stories to clarify what messages are needed.

* As a _node_, I'm able to connect with peers by discovering them.
* As a _connected node_, I'm able to publish a lit of my peers to anyone requesting them.
* As a _connected node_, I'm able to accept and broadcast a new transaction from a peer.
* As a _connected node_, I'm able to server the contents of a block to any peer requesting it.
* As a _connected node_, I'm able to accept a new block and add it to my blockchain if it meets certain criteria.

The preceding list isn't exhaustive by any means - we haven't taken into account punitive measures for peers who misbehave or formed any sort of resolution when two valid (conflicting) blocks need to be added.

Most importantly, since there is no central authority, we need a way for a peer to localize the network and form a _swarm_.
 
## Protocols

Protocols are difficult to design because they require long-term foresight and planning.

A lack of sound architecture procedure architectural rifts down the road, which required so-called "hard forks"; or a change in the underlying protocol of the network.

### About Bitcoin Protocol

> Part of Bitcoin's success is the simplicity of its protocol and the careful consideration of its core developers when making new changes. Rifts at the protocol level haven often resulted in community-driven "hard forks" such as Bitcoin Cash and the myriad of spin-off branches of Bitcoin's blockchain.

By implementing Bitcoin's protocol, developers are able to write their own software to interact with the network. They only need to see what kinds of stories and messages are possible on the network.

> The [Bitcoin Wiki](https://en.bitcoin.it/wiki/Protocol_documentation) faithfully serves this information.

When you download the software called "Bitcoin Core", you're really downloading the _reference_ implementation of the protocol, designed and maintained by its developers.
