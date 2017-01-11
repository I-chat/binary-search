var file = [

Array.prototype.toTwenty = function() {
	for (var i = 1; i <= 20; i++) {
		this.push(i);
	}
	return this;
},

Array.prototype.toForty = function () {
	for (var i = 1; i <= 20; i++) {
		this.push(i * 2);
	}
	return this;
},

Array.prototype.toOneThousand = function() {
	for (var i = 1; i <= 100; i++) {
		this.push(i * 10);
	}
	return this;
},

Array.prototype.search = function (d) {
	var min = 0;
	var max = this.length - 1;
	var value = {};
	var counter = 0;
	while (min <= max) {
		var guess = (max + min) / 2 | 0;
		if (this[guess] < d) {
			counter += 1;
			min = guess + 1;
		} else if (this[guess] > d) {
			counter += 1;
			max = guess - 1;
		} else {
			value.count = counter;
			value.index = guess;
			value.length = max + 1;
			return value;
		}
	}
}

]
module.exports = file;