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

	getScripts() {
		return this.html.match(/<script[\s\S]*?>[\s\S]*?<\/script>/gi);
	}

	getScriptsText() {
		let scripts = this.getScripts();
		return scripts.map((script) => $(script).text().trim());
	}

	value() {
		return this.html;
	}
}
