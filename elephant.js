function makeElephant(name, size, color, legCount, weight, tailWeight, tailLength, bodyWeight, bodyLength, trunkWeight, trunkLength) {
	// Create an elephant
	var elephant = {};
	// elephant properties
	elephant.name = name;
	elephant.size = size;
	elephant.color = color;
	elephant.legCount = legCount;
	elephant.weight = weight;

	elephant.tail = {
		weight: tailWeight,
		length: tailLength
	};

	elephant.trunk = {
		weight: trunkWeight,
		length: trunkLength
	};

	elephant.body = {
		weight: bodyWeight,
		length: bodyLength
	};
// Makes Elephant
	return elephant;
}
function eatElephant(elephantName) {
	delete elephantName.tail;
	delete elephantName.trunk;
	delete elephantName.body;
// Console aid
// console.log("elephant", elephantName);
}

var dumbo = makeElephant("Dumbo", 8, "slategrey", 3, 200, 10, 4, 50, 6, 140, 10);
var fluffy = makeElephant("Fluffy", 10, "pink", 4, 270, 10, 4, 50, 6, 140, 10);
var slappy = makeElephant("Slappy", 6, "white", 4, 180, 10, 4, 50, 6, 140, 10);

var elephantMenu = [dumbo, fluffy, slappy];
// console.log("elephantMenu", elephantMenu);

// function addTooList(elephantName) {
// elephantMenu.push [elephantName]
// }

function isAvailableToBeEaten(whichElephant){
	 
		if (whichElephant.weight >= 200 && whichElephant.legCount === 4) {
			return true;
		} 
	//return false after elephant function is done to check whole menu.
	return false;
}

console.log("Welcome to Eat-a-phant!!!")
console.log("Look at our menu!")
for (var i = 0; i < elephantMenu.length; i++) {
	if (elephantMenu[i].weight >= 200 && elephantMenu[i].legCount === 4) {
	console.log("------------------------------------------------------")
	console.log(`You can order a  ${elephantMenu[i].color} elephant with a
	 tail weight of ${elephantMenu[i].tail.weight} and a total weight of ${elephantMenu[i].weight}.`);
	}
}

function orderElephant (customerPreference) {
	for (var i = 0; i < elephantMenu.length; i++) {
		if (elephantMenu[i].color === customerPreference && isAvailableToBeEaten(elephantMenu[i])) {
			eatElephant(elephantMenu[i]);
			console.log(`${elephantMenu[i].name} was eaten!`);
			

		}
	}
}

var joe = {};
joe.hungryLevel = 10;
joe.money = 30;
joe.preference = "pink";
orderElephant(joe.preference);
// joe.eat = eatElephant;
// joe.eat();

var brenda = {};
brenda.hungryLevel = 6;
brenda.money = 70;
brenda.preference = "white";


// switch elephantName() {
// 	case: "dumbo"
// 	"Day"
// }





