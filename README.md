# OOP Implementation of Animal Classifications

## Description

This is the Implementation of the Object-Oriented Programming Principles (Inheritance, Abstraction, Encapsulation, Polymorphism) in JavaScript to model the Animal Kingdom Classification Diagram below.

![Animal Kingdom Classification](https://cdn1.byjus.com/wp-content/uploads/2019/04/Animal-Kingdom-Classification-of-Animal-Kingdom.png)

This Project was done to test and demonstrate understanding of the Object-Oriented Programming Principles in JavaScript and its application in Real life.

## Usage

- clone the repository and cd into the directory such that you are on `OOP-Implementation-Animal-Kingdom`
- To run this code, make sure you have [nodejs](https://nodejs.org) installed
- use the following command to run the code on your terminal

```bash
# run OOP-principles.js

node OOP-principles.js

```

## Sample output

- If the `OOP-principles.js` is run as it is on this repository, the Output should look like this

```bash

➜  OOP-Implementation-Animal-Kingdom$ node OOP-principles.js

************* Class INHERITANCE *****************************

========== Creating withOutBackBoneX Object from the WithOutBackBone class =======
WithOutBackBone {
  canFly: true,
  canSwim: false,
  canRun: false,
  numberOfLegs: 2,
  numberOfEyes: 2,
  hasBackBone: false,
  animalNames: [ 'Arthropoda', 'Fish', 'Amphibia', 'Reptiles', 'AVES', 'Mammals' ],
  coldBlooded: [ 'Arthropoda', 'Fish', 'Amphibia', 'Reptiles' ],
  warmBlooded: [ 'AVES', 'Mammals' ],
  name: 'Fish',
  speed: 20,
  size: 'Big',
  family: 'Arthropoda',
  hasWings: true,
  flightDuration: '4hrs',
  color: 'Brown'
}

========== Checking if animal is Cold-Blooded
Arthropoda is a Cold-Blooded Animal

======== Getting the List of Cold Blooded Animal from the Diagram =====
[ 'Arthropoda', 'Fish', 'Amphibia', 'Reptiles' ]

=========== Getting Animal Features =============
Family: Arthropoda canFly: true
canRun: false
canSwim: false
numberOfEyes: 2
numberOfLegs: 2
hasBackBone: false
 hasWings: true

=== Creating a Butterfly Object from the WithOutBackBone Class===

======= Calling canFly method on the butterfly object =======
Butterfly can fly  at a speed of 50

========= Getting the features of Butterfly ===============
Family: Arthropoda canFly: true
canRun: false
canSwim: false
numberOfEyes: 2
numberOfLegs: 2
hasBackBone: false
 hasWings: true

====== Checking if Butterfly (Arthropoda) is Cold-Blooded=======
Butterfly is an Arthropoda is a Cold-Blooded Animal

===== Getting More Info about Butterfly ================
Butterfy is an Arthropods. Arthropods are characterized by their
segmented bodies, jointed appendages, and exoskeletons

************************************************************************

***************Class INHERITANCE******************************

=====Creating withBackBoneY Object from the WithBackBone class ======

========== Checking if animal is Warm-Blooded
Mammals is a Warm-Blooded Animal

======= Getting the Warm-Blooded Animal with BackBones from the Diagram =====
[ 'AVES', 'Mammals' ]

========= Getting the List of animals that has BackBone ======
[ 'Fish', 'Amphibia', 'Reptiles', 'AVES', 'Mammals' ]

======== Creating the Fish Object WithBackBone class ============

========= Getting the features of fish
Fish is an Animal with BackBone and has these features:
hasScales: true
hasGills: true
hasFins: true
hasTail: true
hasMouth: true
hasEyes: true

======== Creating Tortoise Object WithBackBone class ============

======== Getting features of Tortoise(Reptile)=========

hasSlowMovement: true
hasLongLifeSpan: true
hasProtectiveShell: true
hasDiverseHabitat: true
hasHingedPlastron: true


===== Creating mammals Object from the WithBackBone class ======

====== Getting the Features of mammals ==========

hasHairOrFur: true
hasMammaryGlands: true
areVertebrates: true
hasFourChamberedHeart: true
canRun: true
MammalsExample: Man,Cat,Dog,Lion,Goat


===== Getting the sounds from mammals ============
 Mammals make these noise or sounds:
 grunts
 meows
 growls
 cry
 purrs

```

## What I Learnt

Doing this task has drilled me more on Object Oriented Programming and its vast applications in Software Engineering from System Designs to Development. I now have a deeper understanding of OOP in JavaScript and proficient in using it to model and solve real world problems. I now have a better understanding of the OOP principles:

- Inheritance
- Abstraction
- Encapsulation and
- Polymorphism

Object-Oriented Analysis(OOA) and Object-Oriented Designs(OOD) has shown me the importance of paying attention to details while drawing the Use Case Diagram and the Class Diagram, because your Design is wrong the Overall Code implementation will be wrong as well.

## Contributing

This Project is Open for Contribution by all,
Pull requests are welcome.
For major changes, please open an issue first
to discuss what you would like to change.

### Instructions

- Fork this repository
- Clone your forked repository
- Add your scripts
- Commit and push
- Create a pull request
- Wait for pull request to merge

## Show your support

Give a ⭐️ if this project helped you!

## License

[MIT](https://choosealicense.com/licenses/mit/)
