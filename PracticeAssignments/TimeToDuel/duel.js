// worked with Dustin, Carlos, Sergio. -yellow team 9/26-

class Cards {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Cards {
    constructor(name, cost, power, resilience) {
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }
    attack(target) {
        target.resilience -= this.power
    }
}

class Effect extends Cards {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost)
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    alterStat(otherCard) {
        if (otherCard instanceof Unit) {
            if (this.stat === "power") {
                otherCard.power += this.magnitude;
            }
            if (this.stat === "resilience") {
                otherCard.resilience += this.magnitude;
            }
        } else {
            console.log("Target must be a unit!")
        }
    }
}

const redBeltNinja = new Unit('Red Belt Ninja', 3, 3, 4);
const blackBeltNinja = new Unit('Black Belt Ninja', 4, 5, 4);

const hardAlgorithm = new Effect('Hard Algorithm', 2, 'increase targets resilience by 3', 'resilience', +3);
const unhandledPromiseRejection = new Effect('Unhandled Promise Rejection', 1, 'reduce targets resilience by 2', 'resilience', -2);
const pairProgramming = new Effect('Pair Programming', 3, 'increase power target by 2', 'power', +2);

hardAlgorithm.alterStat(redBeltNinja)
console.log(redBeltNinja)
unhandledPromiseRejection.alterStat(blackBeltNinja)
console.log(blackBeltNinja)
pairProgramming.alterStat(redBeltNinja)
console.log(redBeltNinja)
redBeltNinja.attack(blackBeltNinja)
console.log(blackBeltNinja)

