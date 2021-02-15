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

	getDate() {
		let date = this.date;

		return new Date(date.toDateString());
	}

	getDateTime() {
		let date = this.date;
		return new Date(date);
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
}
