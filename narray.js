class narray {
	constructor(arr) {
		this.val = [...arr];
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
	random() {
		this.val = this.val.sort((a, b) => 0.5 - Math.random());
		return this;
	}
	unique() {
		var arr = this.val.filter((el, i, arr) => arr.indexOf(el) === i);
		this.val = [...arr];
		return this;
	}

	value() {
		return this.val;
	}
}
