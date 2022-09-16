"use strict";
let mainBtn = document.querySelector("button");
console.log(mainBtn);
mainBtn.addEventListener("click", function () {
	alert("Нет это Оптимус Прайм");
});
let a = 5 + +5;
console.log(a);
let myname = "ALI";
let mysurname = " BEKBOLAT";
console.log(myname + mysurname);
console.log(typeof null);
function plus(a, b) {
	return a + b;
}
console.log(plus(10, 7));
let obj = {
	name: "Ali",
	SayHello() {
		console.log(obj.name);
	},
};
let ac = 5;
ac = "lol";
console.log(ac);
let obj1 = { user: "ali" };
let obj2 = { user: "ali" };
console.log(obj1 === obj2);
let arr = ["A", "b", "c"];
console.log(arr[1]);
let obj3 = { user: "ali" };
console.log(obj3["user"]);
