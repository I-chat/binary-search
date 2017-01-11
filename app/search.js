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
}

]
module.exports = file;