"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
const genesisBlkck = new Block(0, "202020202020", "", "Hello", 123456);
let blockChain = [genesisBlkck];
console.log(blockChain);
//# sourceMappingURL=index.js.map