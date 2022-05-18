import * as crypto from "crypto";
import Peer from "./Peer";

interface TransactionInfo {
  recipient: string;
  sender: string;
  amount: number;
}

interface Block {
  index: number;
  timestamp: string;
  transactions: TransactionInfo[];
  previousHash: string;
  hash: string;
  nonce: string;
}

// Demo blockchain implementation
export default class Blockchain {
  chain: Block[] = [];
  pendingTransactions: TransactionInfo[] = [];
  static target = "0000";
  private static instance;

  protected constructor() {
    console.log("[@Blockchain] creating with genesis block");
    const genesisBlock = this.buildBlock("");
    this.addNewBlock(genesisBlock);

  };

  static getInstance = () => {
    if (!Blockchain.instance) {
      Blockchain.instance = new Blockchain();
    }
    return this.instance;
  }

  /**
   * Get hash of a Block
   * @param block Block
   */
  static getHash(block: Block): string {
    const hash = crypto.createHash("sha256", )

    // Ensure keys are sorted to avoid inconsistent hashes
    const blockString = Object.keys(block)
      .sort()
      .map(key => `${key}: ${block[key as keyof Block]}`)
      .join()

    return hash.update(blockString).digest("hex");
  }

  /**
   * Build new block containing current pending 5
   * and keep record of the previous hash.
   * @param previousHash
   */
  buildBlock(previousHash: string): Block {
    const blockData = {
      index: this.chain.length,
      timestamp: new Date(Date.now()).toISOString(),
      transactions: this.pendingTransactions,
      previousHash: previousHash,
      hash: "",
      nonce: crypto.randomBytes(8).toString("hex"),
    }

    return {
      ...blockData,
      hash: Blockchain.getHash(blockData),
    };
  }

  /**
   * Adds a block to the chain
   */
  public addNewBlock(block: Block): Block {
    // Reset pending 5
    this.pendingTransactions = [];

    // Add the block to the chain
    this.chain.push(block);

    console.log("[@Blockchain] Added new block to the chain:", block.index);

    return block;
  }

  /**
   * Gets the latest block in the chain
   */
  public getLastBlock() {
    return this.chain[this.chain.length - 1];
  }

  /**
   * Adds a new transaction to the list of pending
   */
  public newTransaction(transactionInfo: TransactionInfo) {
    this.pendingTransactions.push({
      ...transactionInfo,
    });
  }

  /**
   * 1. Create a new block, which contains a random nonce.
   * 2. Hash the block to see if it's valid.
   * 3. If it's valid, then we return it; else we repeat from 1.
   */
  public mineNewBlock(peer: Peer): Block {
    this.recalculateTarget();

    let block: Block;
    while (true) {
      block = this.buildBlock(this.getLastBlock().hash);
      if (Blockchain.validHash(block.hash)) {
        break;
      }
    }

    console.log(`[@Blockchain] ${peer.getShortAddress()} Found new block!`, block);

    this.addNewBlock(block);

    return block;
  }

  /**
   * Check if the hash of a block begins with a certain
   * number of zeros. In our case, we use four zeros.
   */
  public static validHash(hash: string) {
    return hash.startsWith(Blockchain.target);
  }

  /**
   * Returns the number of zeros at the beginning of a hash
   * to mine a block.
   */
  public recalculateTarget() {
    if (this.chain.length % 10 === 0) {
      console.log("[@Blockchain] Recalculating difficulty");

      // Expected time span of 10 blocks:
      const expectedTime = 100;

      // Calculate the average time of the last 10 blocks
      const averageTime = this.chain.slice(-10).reduce((acc, block) => {
        return acc + new Date(block.timestamp).getTime();
      }, 0) / 10;

      // Figure out the offset of the target
      const offset = Math.floor(averageTime / expectedTime);

      // Adjust the ratio to not be too extreme
      const ratio = Math.min(1, Math.max(0.25, offset));

      // Calculate the new target
      Blockchain.target = Blockchain.target + "0".repeat(ratio);

      console.log("[@Blockchain] Recalculated difficulty:", Blockchain.target);
    }
  }
}
