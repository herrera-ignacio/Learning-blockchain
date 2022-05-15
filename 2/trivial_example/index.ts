/**
 * Let's decide that the hash of some integer "x"
 * multiplied by another integer "y" must end in 0.
 * So, hash(x*y) = dedb2ac23dc...0.
 * For this example, let's fix x = 5.
 */

import crypto from "crypto";


const x = 5;

let y = 0; // We don't know what y should be yet...
let found = false;

while(!found) {
  const hash = crypto.createHash("sha256");
  const hashVal = hash.update((x*y).toString()).digest("hex");
  if (hashVal[hashVal.length - 1] == "0") {
    found = true;
  } else {
    y += 1;
  }
}

console.log("Found: ", y);
