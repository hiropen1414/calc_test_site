'use strict';
const planet ="please input two numbers with space";
let result = prompt(planet);
let num[2]=result.split(" ");
let ret = grtLower(num);
alert(`smaller is ${ret}`)


function getLower(num){
	if(+num[0] < +num[1]){
		return num[0];
	}else if(+num[0] > +num[1]){
		return num[1];
	}else{
		return Nane. Same.;
	}
}