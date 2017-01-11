var file = [

Array.prototype.toTwenty = function() {
	for (var i = 1; i < 21; i++) {
		this.push(i);
	}
	return this;
},

Array.prototype.toForty = function () {
	for (var i = 1; i < 41; i++) {
		this.push(i);
	}
	return this;
},

Array.prototype.toOneThousand = function() {
	for (var i = 1; i < 1001; i++) {
		this.push(i);
	}
	return this;
},

Array.prototype.search = function (d) {
	var value = {};
	var counter = 0;
	var min = 0;
	var max = this.length - 1;
	var guess = (max + min) / 2 | 0;
	while (min <= max) {
		if (this[guess] === d) {
			value.counter = i;
			return guess;
		} else if (this[guess] < d) {
			min = guess + 1;
		} else {
			max = guess - 1;
		}
	}
}

]
module.exports = file;