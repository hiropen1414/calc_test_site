'use strict';
const RET="smaller is ";

const planet ="please input two numbers with ,";
let result = prompt(planet);
let num=result.split(",");
let ret = getLower(num);
alert(ret)


function getLower(num){
	if(+num[0] < +num[1]){
		return RET + num[0];
	}else if(+num[0] > +num[1]){
		return RET + num[1];
	}else{
		return "Same";
	}
}