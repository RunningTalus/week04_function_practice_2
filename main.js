//1.) Write a function called 'getName' which takes a single object argument and returns the value of the 'name' property of the given object.
	//getName({ name: 'Luisa', age: 25 }) should return 'Luisa'

	// var getName = function(parameterObject){
	// 	console.log(parameterObject.name);
	// 		console.log(parameterObject.age);
	// 	return (parameterObject.name);
	// };

	// getName({name:'Luisa', age: 25});

//2.) Write a function called 'totalLetters' which takes an array of strings and returns the total number of letters in all strings.

// 2a.) totalLetters(['javascript', 'is', 'awesome']) should return 19

	var totalLetters = function(arrOfStrings){
		totalIndex = arrOfStrings.length;
		for(var i=0; i<arrOfStrings.length; i++) {
			var totalLength = arrOfStrings[i].length;
		};

		
		// console.log(arrOfStrings[0].length + arrOfStrings[1].length + arrOfStrings[2].length));
	};

	totalLetters(['javascript', 'is', 'awesome']);




// 2b.) totalLetters(['what', 'happened', 'to', 'my', 'function']) should return 24