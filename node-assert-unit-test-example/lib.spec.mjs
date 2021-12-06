import { add } from "./myLib.mjs";
import assert from "assert";

console.log("add(\nShould add two numbers");

try {
  assert.strictEqual(add(1, 2), 3);
  console.log("success");
} catch (e) {
  console.log("fail");
  console.log(e);
}
