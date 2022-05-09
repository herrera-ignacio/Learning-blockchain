import crypto from "crypto";

const secret = "my super secure secret";
const text = "this should be sent safely";
const hmac = crypto.createHmac("sha256", secret);
hmac.update(text);
console.log(hmac.digest("hex"));
