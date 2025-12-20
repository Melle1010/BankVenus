class Account{
    #balance;
    #owner;
    #transactions;

    constructor(balance, owner, transactions = []){
        this.#balance = balance;
        this.#owner = owner;
        this.#transactions = transactions;
    }
    constructor(owner){
        this.#balance = 0;
        this.#owner = owner;
        this.#transactions = [];
    }

    // Get
    get owner(){
        return this.#owner;
    }
    get balance(){
        return this.#balance;
    }
    get transactions(){
        return this.#transactions;
    }

    // Set
    set owner(owner){
        this.#owner = owner;
    }
    set balance(balance){
        this.#balance = balance;
    }
    set transactions(transactions){
        this.#transactions = transactions;
    }

    // Methods
    addTransaction(transaction){
        this.#transactions.push(transaction);
        this.#balance += transaction.amount;
    }

}