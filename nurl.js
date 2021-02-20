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
	value(){
		return this.url;
	}
}
