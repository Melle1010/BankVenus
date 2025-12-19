class User{
    #name;
    #accounts;

    constructor(name, accounts){
        this.#name = name;
        this.#accounts = accounts;
    }

    // Get
    getName(){
        return this.#name;
    }
    getAccounts(){
        return this.#accounts;
    }

    // Set
    setName(name){
        this.#name = name;
    }
    setAccounts(accounts){
        this.#accounts = accounts;
    }
}