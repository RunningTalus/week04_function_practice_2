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

describe("totalLetters", function() {
	it("should take an array of strings and return the total number of characters in that string", function() {
	var arrOfStrings = (['javascript', 'is', 'awesome']);
	expect(arrOfStrings)
	})
})