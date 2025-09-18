class HashTable {
    keyMap: (any)[][];
    size: number;
    constructor(size: number = 31) {
        this.keyMap = new Array(size);
        this.size = size;
    }
    

    _hash(key: string): number {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.size;
        }
        return total;
    }

    set(key: string, value: any) {
        const index = this._hash(key);
        if(!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push(key, value);
    }

    get(key: string) {
        const index = this._hash(key);
        const val = this.keyMap[index];
        if(val) {
            for(let k of val) {
                if(k[0] === key) {
                    return k[1];
                }
            }
        }
        return undefined;
    }

    keys() {
        const keys = [];
        for(let val of this.keyMap) {
            if(val && val.length) {
                keys.push(val[0]);
            }
        }
        return keys;
    }

    values() {
        const values = [];
        for(let val of this.keyMap) {
            if(val && val.length) {
                values.push(val[1]);
            }
        }
        return values;
    }
}

export default function hashTable() {
    const hashTable =  new HashTable();
    hashTable.set('hello', 'world');
    hashTable.set('good', 'bye');
    console.log(hashTable.values());
    console.log(hashTable.keys());
}

