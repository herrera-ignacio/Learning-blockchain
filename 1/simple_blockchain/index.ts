import * as crypto from "crypto";

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
}

class Blockchain {
  chain: Block[] = [];
  pendingTransactions: TransactionInfo[] = [];

  /**
   * Constructs the Blockchain with a genesis block
   */
  constructor() {
    console.log("[INFO] Creating the Genesis block");
    this.addNewBlock();
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
   * Build new block containing current pending transactions
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
    }

    return {
      ...blockData,
      hash: Blockchain.getHash(blockData),
    };
  }

  /**
   * Generates a new block and adds it to the chain
   */
  public addNewBlock(previousHash: string = ""): Block {
    // Block will contain pending transactions
    const block = this.buildBlock(previousHash);

    // Reset pending transactions
    this.pendingTransactions = [];

    // Add the block to the chain
    this.chain.push(block);

    console.log("[INFO] Added new block to the chain");
    console.log(block);
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
}

/**
 * Playground
 */
function test() {
  const bc = new Blockchain();
}

// Uncomment this to run demo
// test();
