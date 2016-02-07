// array for fortune cookie feature
var fortuneCookies = [
	"Conquer your fears or they will conquer you.",
	"Rivers need springs.",
	"Do not fear what you don't know.",
	"You will have a pleasant surprise.",
	"Whenever possible, keep it simple,",
];

// make stuff available outside of your custom module with the global variable "exports"
// note the array would be hidden from the outide (encapsulated), which is our intent
exports.getFortune = function() {
	var idx = Math.floor(Math.random() * fortuneCookies.length);
	return fortuneCookies[idx];
}