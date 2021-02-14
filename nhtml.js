class nhtml {
	constructor(html) {
		this.html = html;
	}

	setVal(object) {
		for (var key in object) {
			this.html = this.html.replaceAll(`{{${key}}}`, object[key]);
		}
		return this;
	}

	value() {
		return this.html;
	}
}
