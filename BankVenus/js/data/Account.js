class Account{
    #balance;
    #owner;
    #transactions;

    constructor(balance, owner, transactions){
        this.#balance = balance;
        this.#owner = owner;
        this.#transactions = transactions;
    }

    // Get
    getOwner(){
        return this.#owner;
    }
    getBalance(){
        return this.#balance;
    }
    getTransactions(){
        return this.#transactions;
    }

    // Set
    setOwner(owner){
        this.#owner = owner;
    }
    setBalance(balance){
        this.#balance = balance;
    }
    setTransactions(transactions){
        this.#transactions = transactions;
    }

}