//1.) Write a function called 'getName' which takes a single object argument and returns the value of the 'name' property of the given object.
	//getName({ name: 'Luisa', age: 25 }) should return 'Luisa'

	var getName = function(parameterObject){
		// console.log(parameterObject.name);
		return (parameterObject.name);
	};

	getName({name:'Luisa', age: 25});

//2.) Write a function called 'totalLetters' which takes an array of strings and returns the total number of letters in all strings.

	var totalLetters = function(arrOfStrings){
		var start = 0;
		for (var i=0; i<arrOfStrings.length; i++) {
			start += arrOfStrings[i].length;

		};
		// console.log(start); //logs 19
		return start;
	};

	var totalLetters2 = function(arrOfStrings) { 
		var arrTotal = arrOfStrings.join('').length
		// console.log(arrTotal);  //logs 24
		return arrTotal;
	};
	
	totalLetters(['javascript', 'is', 'awesome']);
	totalLetters2(['what', 'happened', 'to', 'my', 'function']);

//3.) 