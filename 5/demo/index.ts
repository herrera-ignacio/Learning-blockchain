import Server from './server';
import Peer from "./Peer";
import Blockchain from "./Blockchain";

// Start fake server
const server = new Server();
server.start();

// Connect peers to server
server.handleConnection(new Peer({}));
server.handleConnection(new Peer({}));

const miner = new Peer({}, "Hey, I'm a new miner!");
server.handleConnection(miner);
miner.startMining(Blockchain.getInstance());
