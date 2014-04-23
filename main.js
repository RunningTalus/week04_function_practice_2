//1.) Write a function called 'getName' which takes a single object argument and returns the value of the 'name' property of the given object.
	//getName({ name: 'Luisa', age: 25 }) should return 'Luisa'

	var getName = function(parameterObject){
		return (parameterObject.name);
	};

	getName({name:'Luisa', age: 25});
	// console.log(getName({name:'Luisa', age: 25}));
	//logs Luisa

//2.) Write a function called 'totalLetters' which takes an array of strings and returns the total number of letters in all strings.

	var totalLetters = function(arrOfStrings){
		var start = 0;
		for (var i=0; i<arrOfStrings.length; i++) {
			start += arrOfStrings[i].length;

		};
		return start;
	};

	var totalLetters2 = function(arrOfStrings) { 
		var arrTotal = arrOfStrings.join('').length
		return arrTotal;
	};
	
	totalLetters(['javascript', 'is', 'awesome']);
	// console.log(totalLetters(['javascript', 'is', 'awesome']));
	//logs 19
	totalLetters2(['what', 'happened', 'to', 'my', 'function']);
	// console.log(totalLetters2(['what', 'happened', 'to', 'my', 'function']));
	//logs 24

//3.)Write a function called 'keyValue' which takes two arguments and returns an object with a key of the first argument and the value of the second argument.
// keyValue('city', 'Denver') should return Object {city: "Denver"}

var keyValue = function(key, value){
	var newObj = {};
	newObj[key] = value;
	return newObj;
};

keyValue('city', 'Denver'); 
// console.log(keyValue('city', 'Denver'));
//logs Object {city: "Denver"}




//4.) Write a function called 'negativeIndex' which takes an array and a negative number, and returns the value from the array at the given negative index, as if the array was circular, i.e. arr.length+num.

// negativeIndex(['a', 'b', 'c', 'd', 'e'], -2) should return 'd'
// negativeIndex(['jerry', 'sarah', 'sally'], -1) should return 'sally'

negativeIndex = function (arrStrLit, neg) {
	return arrStrLit[arrStrLit.length + neg]; 
};

negativeIndex(['a', 'b', 'c', 'd', 'e'], -2);
// console.log(negativeIndex(['a', 'b', 'c', 'd', 'e'], -2));
// //logs d
negativeIndex(['jerry', 'sarah', 'sally'], -1);
// console.log(negativeIndex(['jerry', 'sarah', 'sally'], -1));
// //logs sally