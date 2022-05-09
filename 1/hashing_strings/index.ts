import crypto from "crypto";

const input = "test";
const hash = crypto.createHash("sha256");
hash.update(input);
console.log(hash.digest("hex"));
