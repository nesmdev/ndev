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
		return index ? week[index] : week[this.date.getDay()];
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
		return index ? months[index] : months[new Date(this.date).getMonth()];
	}
	value() {
		return this.date;
	}

	addHours(hours) {
		this.date.setHours(this.date.getHours() + hours);
		this.date = new Date(this.date);
		return this;
	}

	addMinutes(minutes) {
		this.date.setMinutes(this.date.getMinutes() + minutes);
		this.date = new Date(this.date);
		return this;
	}
}
