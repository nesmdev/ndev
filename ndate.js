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
}
