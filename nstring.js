class nstring {
    constructor(str) {
        this.val = str;
    }

    includesEvery(arr) {
        let includes = (el) => this.val.includes(el + "");
        return arr.every(includes);
    }
    includesSome(arr) {
        let includes = (el) => this.val.includes(el + "");
        return arr.some(includes);
    }
}
