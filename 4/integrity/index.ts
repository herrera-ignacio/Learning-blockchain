/**
 * Let's say that Alice wants to send a message to Bob.
 * And let's say that they agree to share a secret password "p4ssw@rd"
 * with each other before the messages are sent.
 */
import crypto from "crypto";

// Alice creates a message
const message = "Hello Bob, let's meet at our secret location next Monday at 1pm.";
// And computes the hash of it after prefixing the password.
const hash = crypto.createHash("sha256").update(`p4ssw@rd${message}`).digest("hex");

// Alice then sends the message, including the hash to Bob
const messageToBob = {
  message,
  hash,
};
console.log("Message from Alice to Bob: ", messageToBob);

// Bob receives the message and verifies the hash
// Someone could have tampered with this if sent across a network.
const aMessage = messageToBob.message;
const computedHash = crypto.createHash("sha256").update(`p4ssw@rd${aMessage}`).digest("hex");

if (computedHash == messageToBob.hash) {
  console.log("Message has not been tampered with.");
} else {
  console.log("Message has been tampered with.");
}

