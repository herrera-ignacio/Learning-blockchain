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
  nonce: string;
}

class Blockchain {
  chain: Block[] = [];
  pendingTransactions: TransactionInfo[] = [];

  /**
   * Constructs the Blockchain with a genesis block
   */
  constructor() {
    console.log("[INFO] Initializing Blockchain");
    // this.addNewBlock();
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
    // Reset pending transactions
    this.pendingTransactions = [];

    // Add the block to the chain
    this.chain.push(block);

    console.log("[INFO] Added new block to the chain");

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
  public proofOfWork(previousHash: string = "") {
    console.log("[INFO] Mining new block");

    let block: Block;
    while (true) {
      block = this.buildBlock(previousHash);
      if (Blockchain.validHash(block.hash)) {
        break;
      }
    }

    console.log("[INFO] Found new block!", block);

    this.addNewBlock(block);
  }

  /**
   * Check if the hash of a block begins with a certain
   * number of zeros. In our case, we use four zeros.
   */
  public static validHash(hash: string) {
    return hash.startsWith("0000");
  }
}

/**
 * Playground
 */
function test() {
  const bc = new Blockchain();
  bc.proofOfWork();
}

// Uncomment this to run demo
test();
