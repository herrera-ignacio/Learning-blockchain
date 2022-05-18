import Peer from "./Peer";

// Handle pool of active connections communicating with our node
export default class ConnectionPool {
  private connections = new Map<string, Peer>();
  private static instance;

  protected constructor() {};

  static getInstance = () => {
    if (!ConnectionPool.instance) {
      ConnectionPool.instance = new ConnectionPool();
    }
    return this.instance;
  }

  /**
   *   Add connection to the pool
   * TODO: If we have a new peer, we need to sync the blockchain
   */
  public addConnection = (peer: Peer) => {
    this.connections.set(peer.address, peer);
  }

  // Get connections' addresses from the pool
  public getConnections(): string[] {
    return Array.from(this.connections.keys()).map(key => key.slice(0, 8));
  }

  /**
   * Broadcast message to all connected peers
   */
  public broadcast(msg: string, from: Peer): void {
    this.connections.forEach((peer: Peer) => {
      // Avoid sending message to self
      if (peer.getShortAddress() == from.getShortAddress()) {
        return;
      }
      peer.receive(msg, from);
    });
  }

}
