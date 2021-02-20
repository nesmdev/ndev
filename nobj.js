class nobj {
	constructor(obj) {
		this.val = { ...obj };
	}

	invert() {
		var obj = {};
		for (var key in this.val) {
			var val = this.val[key];
			obj[val] = key;
		}

		this.val = { ...obj };
		return this;
	}
	value() {
		return this.val;
	}
}
