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

	week(index) {
		const week_ = [
			"Domingo",
			"Lunes",
			"Martes",
			"Miércoles",
			"Jueves",
			"Viernes",
			"Sábado",
		];

		if (index) return week_[index];
		return week_;
	}

	months(index) {
		const months_ = [
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
		if (index) return months_[index];
		return months_;
	}
}
