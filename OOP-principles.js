/**
 * @title Implementation of an Animal classification Diagram
 * @author Marcellus Ifeanyi
 * @notice This is the implementation of the Animal classification Diagram
 * @dev This code uses JS ES6 + classes to implement the Animal classification Diagram and also show the use of OOP Principles: Inheritance, Abstraction, Encapsulation and Polymorphism
 */

// Parent Class
class Animal {
  constructor(name, speed, size) {
    //ABSTRACT CLASS: Defining Animal as an Abstract class
    if (this.constructor === Animal) {
      throw new Error("❌ You cannot  Implement Animal class directly ");
    }

    this.name = name;
    this.speed = speed;
    this.size = size;
  }

  canFly = true;
  canSwim = true;
  canRun = true;
  numberOfLegs = 4;
  numberOfEyes = 2;
  hasBackBone = true;

  //List of animal names
  animalNames = [
    "Arthropoda",
    "Fish",
    "Amphibia",
    "Reptiles",
    "AVES",
    "Mammals",
  ];

  coldBlooded = ["Arthropoda", "Fish", "Amphibia", "Reptiles"];
  warmBlooded = ["AVES", "Mammals"];

  // Method to check if Animal name in the list of animal is Cold Blooded
  checkColdBlooded(name) {
    if (this.animalNames.includes(name) && this.coldBlooded.includes(name)) {
      return `${name} is a Cold-Blooded Animal`;
    } else {
      return `Sorry ${name} is not a Cold-Blooded Animal`;
    }
  }

  // Method to check if Animal name in the list of animals is Warm Blooded
  checkWarmBlooded(name) {
    if (this.animalNames.includes(name) && this.warmBlooded.includes(name)) {
      return `${name} is a Warm-Blooded Animal`;
    } else {
      return `Sorry ${name} is not a Warm-Blooded Animal`;
    }
  }

  getFeatures() {
    return `canFly: ${this.canFly}\ncanRun: ${this.canRun}\ncanSwim: ${this.canSwim}\nnumberOfEyes: ${this.numberOfEyes}\nnumberOfLegs: ${this.numberOfLegs}\nhasBackBone: ${this.hasBackBone}`;
  }

  makeSounds() {
    return `This animal makes these sounds: \nchirping, \ntweeting, \nsquawking, \nsinging`;
  }

  //PRIVATE METHOD: This can only be called inside this class... ENCAPSULATION
  #removeFromList(name) {
    if (this.animalNames.includes(name)) {
      this.animalNames.pop();
    }
  }

  // getter method to allow us to call the private method outside the class
  get RemoveFromList() {
    return this.#removeFromList;
  }
}

//const animal = new Animal(); // Calling an Abstract Class throws an Error

console.log("\n************* Class Inheritance *****************************");

// INHERITANCE: WithOutBackBone Inheritances from the Animal Class

// Child class... Animals Without Back Bones
class WithOutBackBone extends Animal {
  constructor(name, speed, size, color) {
    super(name, speed, size);
    this.color = color;
  }

  // Modifying the properties... POLYMORPHISM
  family = "Arthropoda";
  canFly = true;
  canSwim = false;
  canRun = false;
  numberOfLegs = 2;
  numberOfEyes = 2;
  hasBackBone = false;
  hasWings = true;

  flightDuration = "4hrs";

  // POLYMORPHISM: Modifying the getFeatures method from the parent class
  getFeatures() {
    return `Family: ${this.family} canFly: ${this.canFly}\ncanRun: ${this.canRun}\ncanSwim: ${this.canSwim}\nnumberOfEyes: ${this.numberOfEyes}\nnumberOfLegs: ${this.numberOfLegs}\nhasBackBone: ${this.hasBackBone}\n hasWings: ${this.hasWings} `;
  }

  canFlyX(name, speed) {
    return `${name} can fly  at a speed of ${speed}`;
  }

  //private method... ENCAPSULATION
  #moreInfo() {
    return `Butterfy is an Arthropods. Arthropods are characterized by their\nsegmented bodies, jointed appendages, and exoskeletons`;
  }

  // getter function the private method, this allows us to call it outside the class
  get MoreInfo() {
    return this.#moreInfo;
  }

  get ColdBloodedAnimal() {
    return this.coldBlooded;
  }
}

console.log(
  "\n========== Creating withOutBackBoneX Object from the WithOutBackBone class ======="
);
const withOutBackBoneX = new WithOutBackBone("Fish", 20, "Big", "Brown");
console.log(withOutBackBoneX);

console.log("\n========== Checking if animal is Cold-Blooded");
console.log(withOutBackBoneX.checkColdBlooded("Arthropoda"));

console.log(
  "\n======== Getting the List of Cold Blooded Animal from the Diagram ====="
);
console.log(withOutBackBoneX.ColdBloodedAnimal);

console.log("\n=========== Getting Animal Features =============");
console.log(withOutBackBoneX.getFeatures());

console.log(
  "\n=== Creating a Butterfly Object from the WithOutBackBone Class==="
);
const butterfly = new WithOutBackBone("Butterfly", 20, "Big", "Brown");

console.log("\n======= Calling canFly method on the butterfly object =======");
console.log(butterfly.canFlyX("Butterfly", 50));

console.log("\n========= Getting the features of Butterfly ===============");
console.log(butterfly.getFeatures());

console.log(
  "\n====== Checking if Butterfly (Arthropoda) is Cold-Blooded======="
);
console.log(`Butterfly is an ${butterfly.checkColdBlooded("Arthropoda")}`);

console.log("\n===== More Info about Butterfly ================");
console.log(butterfly.MoreInfo());

console.log(
  "\n************************************************************************"
);

//Class INHERITANCE

// Child class... Animals with BackBones
class WithBackBone extends Animal {
  // Fish properties
  Scales = true;
  Gills = true;
  Fins = true;
  Tail = true;
  Mouth = true;
  Eyes = true;

  // Tortoise(Reptile) properties
  slowMovement = true;
  longLifespan = true;
  protectiveShell = true;
  diverseHabitats = true;
  hingedPlastron = true;

  // Mammals properties
  hasHairOrFur = true;
  hasMammaryGlands = true;
  areVertebrates = true;
  hasFourChamberedHeart = true;
  canRun = true;
  mammalsExample = ["Man", "Cat", "Dog", "Lion", "Goat"];

  //private property... ENCAPSULATION
  #hasBackBoneAnimals = ["Fish", "Amphibia", "Reptiles", "AVES", "Mammals"];

  // Modifying the makeSounds method... POLYMORPHISM
  noiseDuration = "2hrs";
  makeSounds() {
    return `This animal makes these sounds: \nmew-mew, \nhiss, \ngrunt, \nsinging`;
  }

  // Getter method to access private property outside the class
  get HasBackBoneAnimals() {
    return this.#hasBackBoneAnimals;
  }

  //Private method... ENCAPSULATION
  #fishFeatures() {
    return `Fish is an Animal with BackBone and has these features:\nhasScales: ${this.Scales}\nhasGills: ${this.Gills}\nhasFins: ${this.Fins}\nhasTail: ${this.Tail}\nhasMouth: ${this.Mouth}\nhasEyes: ${this.Eyes}`;
  }

  // getter method for accessing the private method outside the class
  get FishFeatures() {
    return this.#fishFeatures;
  }

  //private property...ENCAPSULATION
  #tortoiseFeatures() {
    return `\nhasSlowMovement: ${this.slowMovement}\nhasLongLifeSpan: ${this.longLifespan}\nhasProtectiveShell: ${this.protectiveShell}\nhasDiverseHabitat: ${this.diverseHabitats}\nhasHingedPlastron: ${this.hingedPlastron}
      `;
  }

  get TortoiseFeatures() {
    return this.#tortoiseFeatures;
  }

  // private method... ENCAPSULATION
  #mammalsFeatures() {
    return `\nhasHairOrFur: ${this.hasHairOrFur}\nhasMammaryGlands: ${this.hasMammaryGlands}\nareVertebrates: ${this.areVertebrates}\nhasFourChamberedHeart: ${this.hasFourChamberedHeart}\ncanRun: ${this.canRun}\nMammalsExample: ${this.mammalsExample}
    `;
  }

  // Getter method for accessing the private method outside of the class
  get MammalsFeatures() {
    return this.#mammalsFeatures;
  }

  // Modifying the makeSounds method from the parent class... POLYMORPHISM
  makeSounds() {
    return ` Mammals make these noise or sounds: \n grunts\n meows\n growls\n cry\n purrs`;
  }

  get WarmBloodedAnimals() {
    return this.warmBlooded;
  }
}

console.log(
  "\n=====Creating withBackBoneY Object from the WithBackBone class ======"
);
const withBackBoneY = new WithBackBone();

console.log("\n========== Checking if animal is Warm-Blooded");
console.log(withBackBoneY.checkWarmBlooded("Mammals"));

console.log(
  "\n======= Getting the Warm-Blooded Animal with BackBones from the Diagram ====="
);
console.log(withBackBoneY.WarmBloodedAnimals);

console.log("\n========= Getting the List of animals that has BackBone ======");
console.log(withBackBoneY.HasBackBoneAnimals);

console.log(
  "\n======== Creating the Fish Object WithBackBone class ============"
);
const fish = new WithBackBone();

console.log("\n========= Getting the features of fish");
console.log(fish.FishFeatures());

console.log(
  "\n======== Creating Tortoise Object WithBackBone class ============"
);
const tortoise = new WithBackBone();

console.log("\n======== Getting features of Tortoise(Reptile)=========");
console.log(tortoise.TortoiseFeatures());

console.log(
  "\n===== Creating mammals Object from the WithBackBone class ======"
);
const mammals = new WithBackBone();

console.log("\n====== Getting the Features of mammals ==========");
console.log(mammals.MammalsFeatures());

console.log("\n===== Getting the sounds from mammals ============");
console.log(mammals.makeSounds());
