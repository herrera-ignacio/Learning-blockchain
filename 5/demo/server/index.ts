import Blockchain from "../Blockchain";
import ConnectionPool from "../ConnectionPool";
import P2PProtocol from "../P2PProtocol";
import Peer from "../Peer";

// Fake TCP Server
export default class Server {
  private blockchain: Blockchain;
  private pool: ConnectionPool;
  private protocol: P2PProtocol;

  constructor() {
    this.blockchain = Blockchain.getInstance();
    this.pool = ConnectionPool.getInstance();
    this.protocol = P2PProtocol.getInstance();
  }

  /**
   * 1. Let connection pool handle connection (e.g., register peer)
   * 2. Let protocol decide what to do with message and peer
   * @param peer
   */
  handleConnection(peer: Peer) {
    // Let pool handle peer connection
    this.pool.addConnection(peer);

    // Handle possible messages from the Peer
    if (peer.message) {
      this.protocol.handleMessage(peer.message, peer);
    }
  }

  // Simulate an event loop tick
  start() {
    // setInterval(() => {
    //   const connections = this.pool.getConnections();
    //   // this.pool.getConnections().forEach((connection) => {
    //     // this.protocol.sendMessage(connection, this.blockchain.getBlockchain());
    //   // });
    //   console.log("Active connections: ", connections);
    // }, 10000);
    console.log("[@Server] Server started");
  }
}
