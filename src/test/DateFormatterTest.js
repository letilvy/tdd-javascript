QUnit.module("DateFormatter");

QUnit.test("Should return the empty string when the date is null or undefined", function(assert) {
	assert.equal(DateFormatter.FormatDate(), "");
});

QUnit.test("Should format date as month/day/year when date object is valid", function(assert) {
	var oCurrentDate = new Date(2018, 11, 24, 0, 0, 0, 0);
	assert.equal(DateFormatter.FormatDate(oCurrentDate), "12/24/2018", "Return 12/24/2018 string");
});

QUnit.test("Should format be configurable: short (e.g. 1/17/2015) and long (e.g. January 4, 2015) when date object is valid", function(assert) {
	var oCurrentDate = new Date(2018, 11, 24, 0, 0, 0, 0);
	assert.equal(DateFormatter.FormatDate(oCurrentDate, true), "December 24, 2018", "Long format is right");
	assert.equal(DateFormatter.FormatDate(oCurrentDate, false), "12/24/2018", "Short format is right");
});