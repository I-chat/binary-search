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
	var ans = {length: this.length, count: 0, index: -1};
	while (min <= max) {
		var guess = (max + min) / 2 | 0;
		if (this[min] === d) {
			ans.index = min;
			return ans;
		} else if (this[max] === d) {
			ans.index = max;
			return ans;
		} else if (this[guess] === d){
			ans.index = guess;
			return ans
		} else if (this[guess] < d) {
			min = guess + 1;
			max -= 1;
		} else {
			max = guess - 1;
			min += 1;
		}
		ans.count += 1;
	}
	return ans;
}

]
module.exports = file;