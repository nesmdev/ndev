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
