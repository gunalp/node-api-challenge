let isSafe = (value) => {

	if(value.search(/[_;$?!*,{}']/gi) !== -1) {return false;} else{return true;}

};

let isNumber = (value) => {

	if(value.search(/[A-Za-z]/gi) !== -1) {return false;} else{return true;}

};

module.exports = {
	isSafe,
	isNumber
};