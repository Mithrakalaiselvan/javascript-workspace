var peopleProto = function(){

}

peopleProto.prototype.age = 0;
peopleProto.prototype.name = "no name";
peopleProto.prototype.state = "no state";

peopleProto.prototype.printPeople = function(){
	console.log(this.name +","+ this.age +","+ this.state);
}

var person1 = new peopleProto();
person1.age = 23;
person1.name = "john";
person1.state = "CA";

person1.printPeople();