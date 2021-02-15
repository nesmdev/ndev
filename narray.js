class narray {
	constructor(arr) {
		this.val = JSON.parse(JSON.stringify(arr));
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

	val() {
		return this.val;
	}
}
