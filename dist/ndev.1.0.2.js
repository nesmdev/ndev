class ndate {
	constructor(date_) {
		let date = new Date();
		if (date_) {
			date = new Date(date_);
		}

		if (
			!(date.getHours() && date.getMinutes() && date.getSeconds()) &&
			typeof date_ === "string"
		) {
			date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
			date = new Date(date);
		}

		this.date = date;
	}

	date() {
		let date = this.date;

		return new Date(date.toDateString());
	}
	dateTime() {
		let date = this.date;
		return new Date(date);
	}

	day() {
		var day = this.date.getDate();
		return ("0" + day).substr(-2);
	}

	valid() {
		return this.date instanceof Date && !isNaN(this.date);
	}

	week() {
		return [
			"Domingo",
			"Lunes",
			"Martes",
			"Miércoles",
			"Jueves",
			"Viernes",
			"Sábado",
		];
	}

	weekDay(index) {
		let week = this.week();
		return index ? week[index] : week[new Date().getDay()];
	}

	months() {
		return [
			"Enero",
			"Febrero",
			"Marzo",
			"Abril",
			"Mayo",
			"Junio",
			"Julio",
			"Agosto",
			"Septiembre",
			"Octubre",
			"Noviembre",
			"Diciembre",
		];
	}

	month(index) {
		let months = this.months();
		return index ? months[index] : months[new Date().getMonth()];
	}
	value() {
		return this.date;
	}
}
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
    value(){
        return this.val;
    }
}
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

	value() {
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
	value(){
		return this.url;
	}
}
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
