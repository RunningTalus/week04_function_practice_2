// describe("Module", function() {
//   it("should do something", function() {
//     expect(true).toEqual(false);
//   });
// });

describe("getName", function() {
  it("should take an object as its parameter and return the value from the name property", function() {
  	var parameterObject = ({name: 'Luisa', age: 25});
    expect(parameterObject.name).toEqual('Luisa');
  });
});

// describe("totalLetters", function() {
// 	it("should take an array of string literals and return the total number of characters in all strings", function() {
// 	var arrOfStrings = (['javascript', 'is', 'awesome']);
// 	expect(totalLetters).toEqual(19);
// 	});
// });

// describe("totalLetters2", function() {
// 	it("should take an array of string literals and return the total number of characters in all strings", function() {
// 	var arrTotal = (['what', 'happened', 'to', 'my', 'function']);
// 	expect(totalLetters2).toEqual(24);
// 	});
// });

describe("keyValue", function() {
	it("should take two string literals, create a new object, and make them key/value pairs", function() {
		var keyValue = ('city', 'Denver');
		expect(keyValue).toEqual(Object {city: "Denver"});
	}); 
});