var peopeProtoDynamic = function(name,age,state){

	this.age = age;
	this.name = name;
	this.state = state;

	if( typeof this.printPeople !== 'function'){
		peopeProtoDynamic.prototype.printPeople = function(){
			console.log(this.name +","+ this.age +","+ this.state);
		}
	}
}

var person1 = new peopeProtoDynamic("john",23,"CA");

person1.printPeople();
