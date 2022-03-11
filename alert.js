'use strict';
const planet ="What's your name?";
let result = prompt(planet);

for(let i=0;i<50;i++){
	let ret = urusai(i);
	alert(ret);
}




function urusai(i){
	if(i == 0){
		return (1);
	}else{
		return (i * urusai(i - 1));
	}
}