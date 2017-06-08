var peopeConstructor = function(name,age,state){

	this.age = age;
	this.name = name;
	this.state = state;

	this.printPeople = function(){
		console.log(this.name +","+ this.age +","+ this.state);
	}
}

var person1 = new peopeConstructor("john",23,"CA");
var person2 = new peopeConstructor("Smith",20,"SC");

person1.printPeople();
person2.printPeople();