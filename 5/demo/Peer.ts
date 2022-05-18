import crypto from "crypto";
import Blockchain from "./Blockchain";

interface PeerMetadata {
  address?: string;
}

// TODO: Injection connection pool so that the Peer can send messages at will.

export default class Peer {
  public address: string;
  public message?: string;

  constructor({ address }: PeerMetadata, message?: string) {
    this.address = address ?? crypto.randomBytes(32).toString("hex");
    this.message = message;
    console.log("[@Peer] New peer created");
  }

  public getShortAddress() {
    return `${this.address.slice(0, 4)}...${this.address.slice(-4)}`;
  }

  /**
   * Means to receive a message from the peer
   */
  public receive(msg: string, from: Peer) {
    console.log(`[@Peer ${this.getShortAddress()}] received: "${msg}" from "${from.getShortAddress()}"`);
  }

  public startMining(blockchain: Blockchain) {
    console.log(`[@Peer ${this.getShortAddress()}] started mining`);

    const block = blockchain.mineNewBlock(this);

    // TODO: Let others know you've found a block!

    // Start mining again!
    this.startMining(blockchain);
  }
}
