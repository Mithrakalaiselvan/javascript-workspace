var peopeFactory = function(name,age,state){

	var temp = {};

	temp.age = age;
	temp.name = name;
	temp.state = state;

	temp.printPeople = function(){
		console.log(temp.name +","+ temp.age +","+ temp.state);
	}
	return temp;
}


var person1 = peopeFactory("john",23,"CA");
var person2 = peopeFactory("Smith",20,"SC");


person1.printPeople();
person2.printPeople();