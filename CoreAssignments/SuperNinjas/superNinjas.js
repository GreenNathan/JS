// exports.ninja = ninja ---bottom of old assignment
// ninja = require "path to file"
//const {Ninja} = require('./ninja')


class Ninja {
    constructor(name, health, speed, strength) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log(this.name)
    }
    showStats() {
        console.log(this)
    }
    drinkSake() {
        this.health += 10;
        console.log(this.health)
    }
}

class Sensei extends Ninja {
    constructor(name, wisdom = 10) {
        super(name, 200, 10, 10);
        this.wisdom = wisdom;
    }
    speakWisdom() {
        super.drinkSake()
        console.log('What one programmer can do in one month, two programmers can do in two months.')
    }
}


// example output

const ninja = new Ninja('Donnie', 90, 3, 3)
ninja.showStats()


const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
