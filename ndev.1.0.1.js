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
class narray {
	constructor(arr) {
		this.val = arr;
	}

	lower() {
		this.val = this.val.map((el) =>
			typeof el == "string" ? el.toLowerCase() : el
		);
		return this;
	}
	upper() {
		this.val = this.val.map((el) =>
			typeof el == "string" ? el.toUpperCase() : el
		);
		return this;
	}

	string() {
		this.val = this.val.map((el) => el + "");
		return this;
	}

	exec() {
		return this.val;
	}
}
class nurl {
	constructor(url) {
		if (typeof url == "string") url = new URL(url);
		this.url = url;
		this.params = new URLSearchParams(url.search);
	}

	set(key, param) {
		this.params.set(key, param);
		this.url.search = this.params.toString();
		return this;
	}

	get(key) {
		return this.params.get(key);
	}

	getHash() {
		return this.url.hash;
	}

	toggleHash(hash, toggle) {
		if (toggle) {
			this.url.hash = hash;
		} else {
			this.url.hash = null;
		}
		return this;
	}
	toString() {
		return this.url.toString();
	}
}
