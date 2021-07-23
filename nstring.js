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

    copy() {
        var input = document.createElement("textarea");
        input.value = this.val;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
        return true;
    }

    copy2() {
        navigator.clipboard.writeText(this.val);
    }

    value() {
        return this.val;
    }
    validFileName() {
        return this.val
            .replace(/[?]/g, "_")
            .replace(/[:]/g, ".")
            .replace(/[;]/g, ",")
            .replace(/[*]/g, "")
            .replace(/[/]/g, "-")
            .replace(/[\\]/g, "-")
            .replace(/[{]/g, "[")
            .replace(/[}]/g, "]")
            .replace(/["]/g, "'")
            .replace(/[>]/g, "]")
            .replace(/[<]/g, "[")
            .replace(/[|]/g, "-");
    }
}
