// Handle propagation of messages that peers may send us
import Peer from "./Peer";
import ConnectionPool from "./ConnectionPool";

export default class P2PProtocol {
  private static instance;
  private pool: any;

  protected constructor() {
    this.pool = ConnectionPool.getInstance();
  };

  static getInstance = () => {
    if (!P2PProtocol.instance) {
      P2PProtocol.instance = new P2PProtocol();
    }
    return this.instance;
  }

  handleMessage(msg: string, peer: Peer) {
    console.log(`[@P2PProtocol] Handle new message from ${peer.getShortAddress()}`);
    this.pool.broadcast(msg, peer);
  }
}
