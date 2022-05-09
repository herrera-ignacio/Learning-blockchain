import crypto from "crypto";
import fs from "fs";

fs.readFile("img.jpg", (_err, data) => {
  const hash = crypto.createHash("sha256");
  hash.update(data);
  console.log(hash.digest("hex"));
})
