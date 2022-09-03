class Ninja{
    constructor(name, health, speed, strength){
        this.name = name
        this.health = health
        this.speed = speed || 3
        this.strength = strength || 3
    }
    sayName(){
        console.log(this.name)
        return this
    }
    showStats(){
        console.log(`Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`)
        return this
    }
    drinkSake(){
        this.health += 10
    }
}

class Sensei extends Ninja{
    constructor(name, wisdom){
        super(name, 200, 10, 10)
        this.wisdom = wisdom ||10
    }

    speakWisdom(){
        this.drinkSake()
        console.log("Live laugh love")
    }

}

const gaiden = new Ninja("Hayabusa", 100)
gaiden.sayName()
gaiden.drinkSake()
gaiden.showStats()

const yoshi = new Sensei("Yoshi")

yoshi.showStats().speakWisdom()