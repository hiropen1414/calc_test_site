"use strict";
const RET="smaller is ";

const planet ="please input two numbers with ,";
let i=5;
let result = prompt(planet);
let num=result.split(",");
let ret = getLower(num);
alert(ret)
answer(ret,agree,disagree);
let struct = {
	test1: "test",
	test2: 300,
	test3:8976543,
	test4:true,
	test5:undefined,
	test6:"r u okay?",
	test7: 200n,
	// [Symbol.toPrimitive](hint) {
	// 	alert(`hint: ${hint}`);
	// 	return hint == "string" ? `{name: "${this.nam}"}` : this.age;
	// }
	toString(){
		return this.test7;
	}
};

let clone = Object.assign ({},struct);
let store={};
let t=0;
document.writeln("original<br>");
for (let s in clone) {
	store[t++] = s;
	document.writeln(`${t - 1} : ${s} : ${typeof struct?.[s]} : ${struct?.[s]}<br>\n`);
}
document.writeln("<br><br>convert<br>");
while(--t >= 0)
	document.writeln(`${t} : ${store[t]} : ${typeof struct?.[store[t]]} : ${struct?.[store[t]]}<br>\n`);

let str = {
	est: "aaa",
	ato() {
		alert(this.est);
	}
}
str.ato();

alert(struct);


function getLower(num){
	if(+num[0] < +num[1]){
		return RET + num[0];
	}else if(+num[0] > +num[1]){
		return RET + num[1];
	}else{
		return "Same";
	}
}

function answer(ret,yes,no){
	if(confirm(`${ret}?`)){
		yes();
	}else{
		no();
	}
}

function agree()
{
	alert("you agreed");
}
function disagree()
{
	alert("you disagreed");
}