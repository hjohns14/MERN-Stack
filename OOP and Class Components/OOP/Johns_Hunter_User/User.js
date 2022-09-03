class User {
    constructor(name, email, accountBalance=0){
        this.name = name
        this.email = email
        this.accountBalance = accountBalance
    }

    makeDeposit(amount) {
        this.accountBalance += amount
        return this
    }
    makeWithdrawl(amount){
        this.accountBalance -= amount
        return this
    }
    displayBalance(){
        console.log(`${this.name}'s Balance is ` + this.accountBalance)
        return this
    }
    transferMoney(user, amount){
        user.makeDeposit(amount)
        this.makeWithdrawl(amount)
    }
}

const me = new User("Hunter", "Email@email.com", 5000)
me.displayBalance()
me.makeDeposit(50)
me.makeDeposit(42)
me.makeDeposit(100)
me.makeWithdrawl(32)
me.displayBalance()

const peter = new User("Peter","mail@mongo.com")
const jim = new User("Jim", "jim@Jim.com", 900)

peter.makeDeposit(100).makeDeposit(150).displayBalance().makeWithdrawl(50).makeWithdrawl(50).displayBalance()

jim.makeDeposit(1000).makeWithdrawl(500).makeWithdrawl(400).makeWithdrawl(100).displayBalance()

me.transferMoney(jim, 500)

me.displayBalance()
jim.displayBalance()